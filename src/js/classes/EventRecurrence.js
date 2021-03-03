/**********************************************************************************************************************
WeekDates

This represents an event recurrence.
**********************************************************************************************************************/

class EventRecurrence {

    /**********************************************************
    Constructor
    **********************************************************/
    constructor(a_apiResponse) {
        const self = this;
        this.setAllPropertiesToNull();

        // set each property
        const classKeys = Object.keys(this);
        for (let count = 0; count < classKeys.length; count++) {
            const key = classKeys[count];

            // be sure the input struct has the property before setting the object property to it
            if (a_apiResponse.hasOwnProperty(key)) {
                this[key] = a_apiResponse[key];
            }
        }

        /**
         * the api response is set to either:
         * 0 -> false
         * 1 -> true
         */
        if (this.completed != "1") {
            this.completed = false; 
        } else {
            this.completed = true;
        }

    }

    /**********************************************************
    Sets all the properites of the class to null
    **********************************************************/
    setAllPropertiesToNull() {
        this.event_id  = null;
        this.user_id   = null;
        this.name      = null;
        this.completed = null;
    }

    /**********************************************************
    Generates and returns the html for this event recurrence
    **********************************************************/
    getHtml() {
        let checkboxHtml = this.completed ? ' checked ' : '';

        let html = `
        <div class="board-item" data-event-id="${this.event_id}">
            <div class="board-item-checkbox"><input type="checkbox" ${checkboxHtml}></div>
            <div class="board-item-name ml-3">${this.name}</div>
        </div>`;

        return html;
    }
}









