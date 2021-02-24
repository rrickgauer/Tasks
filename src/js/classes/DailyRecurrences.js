/**********************************************************************************************************************
DailyRecurrences

This represents a card that has a list of EventRecurrences in it.
**********************************************************************************************************************/
class DailyRecurrences 
{
    /**********************************************************
    Constructor
    **********************************************************/ 
    constructor(a_date) {
        this.eventRecurrences = [];
        this.date = a_date;
    }

    /**********************************************************
    Insert a new event recurrence into the Event Recurrences list.
    **********************************************************/ 
    addEventRecurrence(a_apiResponseEventRecurrence) {
        this.eventRecurrences.push(new EventRecurrence(a_apiResponseEventRecurrence));
    }

    /**********************************************************
    Generate the html for a daily recurrence
    **********************************************************/ 
    getHtml() {
        // format the date for display
        const weekdayDisplay = this.date.toLocaleString(DateTime.DATE_HUGE);

        // build the header
        let htmlHeader = `
        <div class="header">
            <div class="header-date">
                ${weekdayDisplay}
            </div>
        </div>`;

        // get the recurrences html
        const eventRecurrencesHtml = this.getEventRecurrencesHtml();

        // build the recurrence html
        let htmlEvents = `            
        <div class="container-events">
            <ul class="list-group events-list">
                ${eventRecurrencesHtml}
            </ul>
        </div>`;

        // format the date to put into the data attribute
        const dateData = this.date.toSQLDate();

        // put them all together
        let html = `<div class="container-day-recurrences" data-date="${this.date.toSQLDate()}">${htmlHeader} ${htmlEvents} </div>`;

        return html;

    }



    /**********************************************************
    Generate all of the html for the EventRecurrences in the list.
    **********************************************************/
    getEventRecurrencesHtml() {
        let html = '';

        for (let count = 0; count < this.eventRecurrences.length; count++) {
            html += this.eventRecurrences[count].getHtml();
        }

        return html;
    }
}