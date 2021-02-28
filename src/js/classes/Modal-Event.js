/**********************************************************************************************************************
ModalEvent

This class holds the logic for the Event Modal.
It retrieves and displays the meta-data for an event.
**********************************************************************************************************************/

class ModalEvent
{  
    /**********************************************************
    Constructor.

    Parms:
        a_e_modalElement - the event modal html element
    **********************************************************/
    constructor(a_e_modalElement) {
        this.e_modal = a_e_modalElement;
        this.userID = Utilities.getUserIdFromLocalStorage();
        this.setElementFields();
        this.addEventListeners();
    }


    /**********************************************************
    Sets all the class properties.
    **********************************************************/
    setElementFields() {
        const self = this;
        const modal = this.e_modal;

        this.e_nameDisplay        = $(modal).find('.modal-title');
        this.e_descriptionDisplay = $(modal).find('.modal-header .description');
        this.e_phoneDisplay       = $(modal).find('.event-data.phone .event-data-data');
        this.e_addressDisplay     = $(modal).find('.event-data.address .event-data-data');
        this.e_occursOnDisplay    = $(modal).find('.event-data.occurs-on .event-data-data');

        this.e_btnToggleHeaderEdit = $(modal).find('.btn-modal-header-edit');

        this.e_formEditName        = $('#name-edit');
        this.e_formEditStartsOn    = $('#starts-on-edit');
        this.e_formEditStatsAt     = $('#starts-at-edit');
        this.e_formEditEndsOn      = $('#ends-on-edit');
        this.e_formEditEndsAt      = $('#ends-at-edit');
        this.e_formEditSeperation  = $('#seperation-edit');
        this.e_formEditFrequency   = $('#frequency-edit');
        this.e_formEditDay         = $('#recurrence-day-edit');
        this.e_formEditWeek        = $('#recurrence-week-edit');
        this.e_formEditMonth       = $('#recurrence-month-edit');
        this.e_formEditAddress1    = $('#address-1-edit');
        this.e_formEditAddress2    = $('#address-2-edit');
        this.e_formEditCity        = $('#city-edit');
        this.e_formEditState       = $('#state-edit');
        this.e_formEditZip         = $('#zip-edit');
        this.e_formEditDescription = $('#description-edit');
        this.e_formEditPhone       = $('#phone-edit');
    }

    /**********************************************************
    Initializes the modal display fields.

    This should be called every time a new event needs to be displayed
    **********************************************************/
    init(a_eventID, a_occursOn) {
        this.eventID = a_eventID;
        this.occursOn = DateTime.fromSQL(a_occursOn);
        this.loadData(this.displayEventData);
    }

    /**********************************************************
    Request the event data from the API
    **********************************************************/
    loadData(actionSuccess, actionError) {
        const self = this;
        const apiUrl = Utilities.buildApiEventUrl(Constants.API_URLS.EVENTS, this.eventID);

        if (actionSuccess == undefined) {
            actionSuccess = console.log;
        }

        if (actionError == undefined) {
            actionError = console.error;
        }

        $.ajax({
            headers: {"X-USER-ID": self.userID},
            url: apiUrl,
            type: "GET",
            success: function(response) {
                actionSuccess(response, self);
            },
            error: actionError,
        });
    }


    /**********************************************************
    Display the event data in the modal.
    **********************************************************/
    displayEventData(apiResponse, self) {
        if (self == undefined) {
            self = this;
        }

        // event name
        $(self.e_nameDisplay).html(apiResponse.name);
        
        // description
        $(self.e_descriptionDisplay).html(apiResponse.description);

        // phone
        $(self.e_phoneDisplay).html(apiResponse.phone_number);

        // address
        const displayAddress = self.getAddressDisplayHtml(apiResponse);
        $(self.e_addressDisplay).html(displayAddress);

        // occurs on
        let occursOnDisplay = self.occursOn.toFormat('cccc, LLLL d');
        
        // if the api response includes a non-null starts_at, display the time as well 
        if (apiResponse.starts_at != null) {
            let startsAtDisplay = DateTime.fromSQL(apiResponse.starts_at).toLocaleString(DateTime.TIME_SIMPLE);
            occursOnDisplay += `&nbsp;&sdot;&nbsp;${startsAtDisplay}`;
        }

        $(self.e_occursOnDisplay).html(occursOnDisplay);

        self.loadEditFormData(apiResponse, self);
    }

    /**********************************************************
    Generates a string to display an event's address:
    Address 1 Address 2, City, ST ZIP
    **********************************************************/
    getAddressDisplayHtml(a_eventStruct) {
        // setup flags
        const isAddress1Set = a_eventStruct.location_address_1 != null;
        const isAddress2Set = a_eventStruct.location_address_2 != null;
        const isCitySet     = a_eventStruct.location_city != null;
        const isStateSet    = a_eventStruct.location_state != null;
        const isZipSet      = a_eventStruct.location_zip != null;
        
        let result = '';
        
        if (isAddress1Set) {
            result += `${a_eventStruct.location_address_1}`;
        }

        if (isAddress2Set) {
            result += ` ${a_eventStruct.location_address_2}`;
        }

        if ((isAddress1Set || isAddress2Set) && (isCitySet || isStateSet || isZipSet)) {
            result += ', ';
        }

        if (isCitySet) {
            result += `${a_eventStruct.location_city}`;

            if (isStateSet || isZipSet) {
                result += ', ';
            }
        }

        if (isStateSet) {
            result += `${a_eventStruct.location_state}`;

            if (isZipSet) {
                result += ' ';
            }
        }

        if (isZipSet) {
            result += `${a_eventStruct.location_zip}`;
        }

        
        return result;
    }

    /**********************************************************
    Load the event data into the edit event form

    this.e_formEditName
    this.e_formEditStartsOn
    this.e_formEditStatsAt
    this.e_formEditEndsOn
    this.e_formEditEndsAt
    this.e_formEditSeperation
    this.e_formEditFrequency
    this.e_formEditDay
    this.e_formEditWeek
    this.e_formEditMonth
    this.e_formEditAddress1
    this.e_formEditAddress2
    this.e_formEditCity
    this.e_formEditState
    this.e_formEditZip
    this.e_formEditDescription
    this.e_formEditPhone
    **********************************************************/
    loadEditFormData(apiResponse, self) {
        console.log(apiResponse);

        
        $(self.e_formEditName).val(apiResponse.name);   // name
        $(self.e_formEditStartsOn).val(apiResponse.starts_on);  // starts on
        $(self.e_formEditStartsAt).val(apiResponse.starts_at);  // starts at

        $(self.e_formEditEndsOn).val(apiResponse.ends_on);
        $(self.e_formEditEndsAt).val(apiResponse.ends_at);
        $(self.e_formEditSeperation).val(apiResponse.seperation);
        $(self.e_formEditFrequency).val(apiResponse.frequency);
        $(self.e_formEditDay).val(apiResponse.recurrence_day);
        $(self.e_formEditWeek).val(apiResponse.recurrence_week);
        $(self.e_formEditMonth).val(apiResponse.recurrence_month);
        $(self.e_formEditAddress1).val(apiResponse.location_address_1);
        $(self.e_formEditAddress2).val(apiResponse.location_address_2);
        $(self.e_formEditCity).val(apiResponse.location_city);
        $(self.e_formEditState).val(apiResponse.location_state);
        $(self.e_formEditZip).val(apiResponse.location_zip);
        $(self.e_formEditDescription).val(apiResponse.description);
        $(self.e_formEditPhone).val(apiResponse.phone_number);

    }


    /**********************************************************
    Show the modal
    **********************************************************/
    showModal() {
        $(this.e_modal).modal('show');
    }
    
    /**********************************************************
    Adds all the event listeners to the modal
    **********************************************************/
    addEventListeners() {
        const self = this;
        
        // toggle an edit for the event data
        $(this.e_btnToggleHeaderEdit).on('click', function() {
            $(self.e_modal).find('.modal-header-display').removeClass('active');
            $(self.e_modal).find('.modal-header-edit').addClass('active');
        });

        // make sure the edit form is not visible when the modal is closed
        $(this.e_modal).on('hidden.bs.modal', function() {
            $(self.e_modal).find('.modal-header-display').addClass('active');
            $(self.e_modal).find('.modal-header-edit').removeClass('active');
        });
    }

}

