// input variables
const inputName            = $('#name-new');
const inputDescription     = $('#description-new');
const inputPhone           = $('#phone-new');
const inputAddress1        = $('#address-1-new');
const inputAddress2        = $('#address-2-new');
const inputCity            = $('#city-new');
const inputState           = $('#state-new');
const inputZip             = $('#zip-new');
const inputStartsOn        = $('#starts-on-new');
const inputStartsAt        = $('#starts-at-new');
const inputEndsOn          = $('#ends-on-new');
const inputEndsAt          = $('#ends-at-new');
const inputSeperation      = $('#seperation-new');
const inputFrequency       = $('#frequency-new');
const inputRecurrenceDay   = $('#recurrence-day-new');
const inputRecurrenceWeek  = $('#recurrence-week-new');
const inputRecurrenceMonth = $('#recurrence-month-new');

const btnSubmit = $('#btn-submit-new-event');

const inputClassName = '.event-new-input';

// other shit
const mUser = new User(Common.getUserIdFromLocalStorage());


/***************************************************************************
 * Main logic
 ***************************************************************************/
$(document).ready(function() {
    addListeners();
    initFlatpickr();
});


/***************************************************************************
 * Add all the event listeners to the page.
 ***************************************************************************/
function addListeners() {
    submitNewEvent();
    removeInvalidFeedback();
    toggleRecurrenceInputsVisibility();
}

/***************************************************************************
 * Initialize the date/time inputs to use flatpickr
 ***************************************************************************/
function initFlatpickr() {
    // time inputs
    $('.event-dates-new .time').flatpickr({
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i:S",
        altInput: true,
        altFormat: "h:i K",
    });
    
    // date inputs
    $('.event-dates-new .date').flatpickr({
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
    });   
}


/***************************************************************************
 * Submits a new event to the api.
 ***************************************************************************/
function submitNewEvent() {
    $(btnSubmit).on('click', function() {
        // make sure all inputs are valid
        if (!areInputsValid()) {
            return;
        }
        
        let inputValues = getNewEventInputValues();   // retrieve the input values
        
        // generate and add a UUID for the event
        // const eventUUID = Common.getUUID();
        inputValues.id = Common.getUUID();
        inputValues.recurrence_id = Common.getUUID();
                
        // send the request to the api
        // $.ajax({
        //     headers: {"X-USER-ID" :  mUser.userID},
        //     url: m_API_EVENTS,
        //     type: "POST",
        //     data: inputValues,
        //     success: submitNewEventSuccess,
        //     error: submitNewEventError,
        // });
    });
}


/***************************************************************************
 * Validates all the inputs before sending the request to the api.
 ***************************************************************************/
function areInputsValid() {
    // ensure a name is given
    if ($(inputName).val() == '') {
        // set the error message
        const invalidFeedbackMessage = 'Please enter a name.';
        $(inputName).closest('.form-event-new-group').find('.invalid-feedback').text(invalidFeedbackMessage);
        
        // set the input to invalid to show the message
        $(inputName).addClass('is-invalid');
        
        return false;
    }


    // starts_on must have value
    if ($(inputStartsOn).val() == '') {
        setInputIsInvalid(inputStartsOn, 'Required');
    }

    // ends_on must have value
    if ($(inputEndsOn).val() == '') {
        setInputIsInvalid(inputEndsOn, 'Required');
    }


    
    return true;
}

/***************************************************************************
 * Sets the text of an input's error message section.
 * Then, sets the input to invalid.
 ***************************************************************************/
function setInputIsInvalid(elementName, errorMessage) {
    if (errorMessage == undefined) {
        errorMessage = 'Error.';
    }
    $(elementName).closest('.form-group').find('.invalid-feedback').text(errorMessage)
    $(elementName).closest('.form-group').find('input').addClass('is-invalid');
    $(elementName).addClass('is-invalid');
}


/***************************************************************************
 * Remove the class is-invalid from an input when it is changed.
 ***************************************************************************/
function removeInvalidFeedback() {
    $(inputClassName).on('change keydown', function() {
        $(this).removeClass('is-invalid');
        $(this).closest('.form-group').find('input').removeClass('is-invalid');
    });
}


/***************************************************************************
 * Returns a dictionary structure of all the input parms.
 ***************************************************************************/
function getNewEventInputValues() {
    
    // get the inital input values
    const inputValues = {
        name:               $(inputName).val(),
        description:        $(inputDescription).val(),
        phone_number:       $(inputPhone).val(),
        location_address_1: $(inputAddress1).val(),
        location_address_2: $(inputAddress2).val(),
        location_city:      $(inputCity).val(),
        location_state:     $(inputState).val(),
        location_zip:       $(inputZip).val(),
        starts_on:          $(inputStartsOn).val(),
        starts_at:          $(inputStartsAt).val(),
        ends_on:            $(inputEndsOn).val(),
        ends_at:            $(inputEndsAt).val(),
        frequency:          $(inputFrequency).val(),
        seperation:         $(inputSeperation).val(),
        recurrence_day:     $(inputRecurrenceDay).val(),
        recurrence_week:    $(inputRecurrenceWeek).val(),
        recurrence_month:   $(inputRecurrenceMonth).val(),
    }
    
    
    // loop through the dictionary and change all empty strings to nulls
    const keys = Object.keys(inputValues);
    
    for (let count = 0; count < keys.length; count++) {
        const theKey = keys[count];         // current key
        
        if (inputValues[theKey] == '') {    // empty string
            inputValues[theKey] = null;
        }
    }
    
    return inputValues;
}


/***************************************************************************
 * Action to take when submitting a new event is successful.
 ***************************************************************************/
function submitNewEventSuccess(responseData, textStatus, xhr) {
    console.log(responseData);
}

/***************************************************************************
 * Action to take when submitting a new event returns an error.
 ***************************************************************************/
function submitNewEventError(response) {
    console.error(response.responseText);
}


/***************************************************************************
 * Toggles the recurrence inputs visibility depending on which frequency
 * the input was changed to.
 ***************************************************************************/
function toggleRecurrenceInputsVisibility() {
    $(inputFrequency).on('change', function() {
        const inputFrequencyValue = $(inputFrequency).find('option:selected').val();

        // clear and hide all the recurrence inputs initiallly
        $('.event-new-input.recurrence').val('');
        $('.event-new-input.recurrence').addClass('d-none');
        
        // if the frequency was set to once, hide the seperation and exit
        if (inputFrequencyValue == m_EVENT_FREQUENCY_VALUES.ONCE) {
            $(inputSeperation).addClass('d-none');
            $(inputSeperation).val('1');
            return;
        } else {
            $(inputSeperation).removeClass('d-none');
        }


        if (inputFrequencyValue == m_EVENT_FREQUENCY_VALUES.WEEKLY) {
            $(inputRecurrenceDay).removeClass('d-none');            // show day
        } 
        else if (inputFrequencyValue == m_EVENT_FREQUENCY_VALUES.MONTHLY) {
            $(inputRecurrenceDay).removeClass('d-none');            // show day
            $(inputRecurrenceWeek).removeClass('d-none');           // show week
        } 
        else if (inputFrequencyValue == m_EVENT_FREQUENCY_VALUES.YEARLY) {
            $('.event-new-input.recurrence').removeClass('d-none'); // show all
        }
    });


}


