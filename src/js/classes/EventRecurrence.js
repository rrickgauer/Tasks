/**********************************************************************************************************************
WeekDates

This represents an event recurrence.
**********************************************************************************************************************/

class EventRecurrence {

    /**********************************************************
    Constructor
    **********************************************************/
    constructor(a_apiResponse) {
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
    }

    /**********************************************************
    Sets all the properites of the class to null
    **********************************************************/
    setAllPropertiesToNull() {
        this.event_id           = null;
        this.user_id            = null;
        this.name               = null;
    }

    /**********************************************************
    Generates and returns the html for this event recurrence
    **********************************************************/
    getHtml() {

        let html = `
        <li class="list-group-item event" data-event-id="${this.event_id}">
            <div class="d-flex justify-content-between">
                <div class="d-flex w-100">
                    <div class="event-checkbox"><input type="checkbox" /></div>
                    <div class="d-flex w-100 event-modal-open">
                        <div class="event-time">3:00 PM</div>
                        <div class="event-name">${this.name}</div>
                    </div>

                </div>

                <div class="event-dropdown">
                    <div class="dropdown">
                        <button class="btn" type="button" data-toggle="dropdown">
                            <i class='bx bx-dots-horizontal-rounded'></i>
                        </button>
                        <div class="dropdown-menu">
                            <button class="dropdown-item" type="button">Action</button>
                            <button class="dropdown-item" type="button">Another action</button>
                            <button class="dropdown-item" type="button">Something else here</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="event-labels"></div>
        </li>`;


        return html;

    }
}









