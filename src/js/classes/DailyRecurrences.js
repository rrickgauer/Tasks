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
        const eventRecurrencesHtml = this.getEventRecurrencesHtml();
        const dateDisplay = this.date.toFormat('ccc LLL d');
        const numItemsDisplay = `<span class="badge badge-secondary ml-1">${this.eventRecurrences.length}</span>`;


        let html = `
        <div class="board-wrapper" data-date="${this.date.toSQLDate()}">
            <div class="card board-daily-recurrences">
                <div class="card-header">
                    <h6>${dateDisplay} ${numItemsDisplay}</h6>
                </div>
                <div class="card-body">${eventRecurrencesHtml}</div>
                <div class="card-footer">
                    <input type="text" class="form-control form-control-sm" placeholder="Add task">
                </div>
            </div>
        </div>`;

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