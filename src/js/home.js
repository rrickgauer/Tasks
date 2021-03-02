/**********************************************************
Page elements
**********************************************************/
const e_dateSelector       = $('#date-input');
const e_recurrences        = $('.recurrences');
const e_recurrencesBoard   = $('.recurrences-board');
const e_modalEvent         = $('#modal-event');
const e_datePicker         = $('.btn-date-picker');


/**********************************************************
Module variables
**********************************************************/
let m_User       = null;
let m_WeekDates  = new WeekDates();
let m_ModalEvent = new ModalEvent(e_modalEvent);

/**********************************************************
Main logic
**********************************************************/
$(document).ready(function() {
    setUser();
    getEventsInRange(m_WeekDates.first.toSQLDate(), m_WeekDates.last.toSQLDate(), displayWeeklyEvents);
    $("#nav-item-home").addClass('active');
    addListeners();
    initFlatpickrs();
});


/**********************************************************
Registers all of the event listeners for the page.
**********************************************************/
function addListeners() {
    $(e_dateSelector).on('change', requestNewDates);
    $(e_recurrences).on('click', '.event-modal-open', openModalEvent);
    $(e_datePicker).on('click', getNewWeekInterval);

    $(e_modalEvent).on('event_update', function() {
        getEventsInRange(m_WeekDates.first.toSQLDate(), m_WeekDates.last.toSQLDate(), displayWeeklyEvents);
    });

    $('body').on('change', '.event-checkbox input', toggleEventCompleted);
}


/**********************************************************
Load all the Flatpickr date instances.

a_defaultDate: a date string that the input's value will be set to
**********************************************************/
function initFlatpickrs(a_defaultDate) {

    let defaultDate = "today";
    if (a_defaultDate != undefined) {
        defaultDate = a_defaultDate;
    }

    // date inputs
    $('.flatpickr-date').flatpickr({
        altInput: true,
        altFormat: "F j, Y",
        dateFormat: "Y-m-d",
        defaultDate: defaultDate,
    });   
}


/**********************************************************
Retrieve a week's worth of recurrences from the API
**********************************************************/
function requestNewDates(a_newDate) {
    // display a spinner
    const spinnerHtml = '<div class="d-flex justify-content-center my-5 py-5"><div class="spinner-border" role="status"></div></div>';
    $('.recurrences-board .recurrences').html(spinnerHtml);

    let newDate = DateTime.fromSQL($(this).val());
    m_WeekDates = new WeekDates(newDate);

    getEventsInRange(m_WeekDates.getFirstString(), m_WeekDates.getLastString(), displayWeeklyEvents);    
}


/**********************************************************
Loads the user object.

If no user id is set in local storage, go to the login page.
**********************************************************/
function setUser() {
    // be sure the user's id is set
    if (!Utilities.isUserIdSet()) {
        window.location.href = 'login.php';
    }

    m_User = new User(window.localStorage.getItem('userID'));
}

/**********************************************************
Checks the localStorage if the userID is set.
**********************************************************/
function isUserIdSet() {
    if (window.localStorage.getItem('userID') == null) {
        return false;
    } else {
        return true;
    }
}

/**********************************************************
Makes a request to the api to get all the date occurences
within the range of dates given.
**********************************************************/
function getEventsInRange(a_startsOn, a_endsOn, a_actionSuccess, a_actionError) {
    // verify the start and end dates are set
    if (a_startsOn == undefined) {
        console.error('getEventsInRange() - needs start date');
        return;
    } else if (a_endsOn == undefined) {
        console.error('getEventsInRange() - needs ends date');
        return;
    }

    // actions to take if request was successful
    if (a_actionSuccess == undefined) {
        a_actionSuccess = function(response, textStatus, xhr) {
            // console.log(JSON.parse(response));
            console.log(response);
        }
    }

    // actions to take if request was successful
    if (a_actionError == undefined) {
        a_actionError = function(response) {
            console.error(response.responseText);
        }
    }

    // set the date ranges
    const dateRanges = {
        starts_on: a_startsOn,
        ends_on: a_endsOn,
    }
    
    // send the request to the api
    $.ajax({
        headers: {"X-USER-ID" :  m_User.userID},
        url: Constants.API_URLS.RECURRENCES,
        type: "GET",
        data: dateRanges,
        success: a_actionSuccess,
        error: a_actionError,
    });
}



/**********************************************************
Takes a week's worth of event recurrences received from the
API and displays them for viewing.
**********************************************************/
function displayWeeklyEvents(a_events) {
    const vRecurrencesSun   = new DailyRecurrences(m_WeekDates.getDateInTheWeek(Constants.WEEKDAY_VALUES.SUNDAY));
    const vRecurrencesMon   = new DailyRecurrences(m_WeekDates.getDateInTheWeek(Constants.WEEKDAY_VALUES.MONDAY));
    const vRecurrencesTues  = new DailyRecurrences(m_WeekDates.getDateInTheWeek(Constants.WEEKDAY_VALUES.TUESDAY));
    const vRecurrencesWed   = new DailyRecurrences(m_WeekDates.getDateInTheWeek(Constants.WEEKDAY_VALUES.WEDNESDAY));
    const vRecurrencesThurs = new DailyRecurrences(m_WeekDates.getDateInTheWeek(Constants.WEEKDAY_VALUES.THURSDAY));
    const vRecurrencesFri   = new DailyRecurrences(m_WeekDates.getDateInTheWeek(Constants.WEEKDAY_VALUES.FRIDAY));
    const vRecurrencesSat   = new DailyRecurrences(m_WeekDates.getDateInTheWeek(Constants.WEEKDAY_VALUES.SATURDAY));


    // put each event into its related day bucket
    for (let count = 0; count < a_events.length; count++) {
        const thisEvent = a_events[count];
        let thisEventWeekday = DateTime.fromSQL(thisEvent.occurs_on).weekday;

        if (thisEventWeekday == 7) {
            thisEventWeekday = Constants.WEEKDAY_VALUES.SUNDAY;
        }

        switch (thisEventWeekday) {
            case Constants.WEEKDAY_VALUES.SUNDAY:
                vRecurrencesSun.addEventRecurrence(thisEvent);
                break;
            case Constants.WEEKDAY_VALUES.MONDAY:
                vRecurrencesMon.addEventRecurrence(thisEvent);
                break;
            case Constants.WEEKDAY_VALUES.TUESDAY:
                vRecurrencesTues.addEventRecurrence(thisEvent);
                break;
            case Constants.WEEKDAY_VALUES.WEDNESDAY:
                vRecurrencesWed.addEventRecurrence(thisEvent);
                break;
            case Constants.WEEKDAY_VALUES.THURSDAY:
                vRecurrencesThurs.addEventRecurrence(thisEvent);
                break;
            case Constants.WEEKDAY_VALUES.FRIDAY:
                vRecurrencesFri.addEventRecurrence(thisEvent);
                break;
            case Constants.WEEKDAY_VALUES.SATURDAY:
                vRecurrencesSat.addEventRecurrence(thisEvent);
                break;
        }
    }


    // combine all of the html for each of the days
    let html = vRecurrencesSun.getHtml() + vRecurrencesMon.getHtml();
    html += vRecurrencesTues.getHtml() + vRecurrencesWed.getHtml();
    html += vRecurrencesThurs.getHtml() + vRecurrencesFri.getHtml();
    html += vRecurrencesSat.getHtml();

    // add the html to the view
    $(e_recurrences).html(html);
}

/**********************************************************
Opens the event modal when an recurrence is clicked.
**********************************************************/
function openModalEvent(a_eventElement) {
    let eventID = a_eventElement;

    /**
     * If the argument is a jquery event,
     * we need to rerieve the event id from the attribute of the element
     */
    if (a_eventElement instanceof jQuery.Event) {
        eventID = $(this).closest('.event').attr('data-event-id');
    }

    const occursOn = $(this).closest('.container-day-recurrences').attr('data-date');

    m_ModalEvent.init(eventID, occursOn);
    m_ModalEvent.showModal();
}


/**********************************************************
When the user clicks one of the arrow buttons to get 
the next, previous, or current weekly tasks.
**********************************************************/
function getNewWeekInterval(a_callerElement) {
    const newInterval = $(this).attr('data-date-interval');

    // decide whether to increase or decrease the week by 1
    if (newInterval == 'prev') {
        m_WeekDates.decreaseCurrentWeek(1);
    } else if (newInterval == 'next') {
        m_WeekDates.increaseCurrentWeek(1);        
    } else {
        m_WeekDates = new WeekDates();  // set it to today
    }

    // get the new events from the api
    getEventsInRange(m_WeekDates.getFirstString(), m_WeekDates.getLastString(), displayWeeklyEvents);

    // set the date selector input value to the new date
    initFlatpickrs(m_WeekDates.getCurrentString());
}


function toggleEventCompleted(self) {
    const markEventCompleted = $(this).is(':checked');
    const type = markEventCompleted ? "POST" : "DELETE";

    const eventID = $(this).closest('.event').attr('data-event-id');
    const date = $(this).closest('.container-day-recurrences').attr('data-date');
    const url = `${Constants.API_URLS.COMPLETIONS}/${eventID}/${date}`;

    // send the request to the api
    $.ajax({
        headers: {"X-USER-ID" :  m_User.userID},
        url: url,
        type: type,
        success: console.log,
        error: function(xhr) {
            console.error(xhr.responseText);
            Utilities.displayAlert('There was an error.');
        },
    });
}


