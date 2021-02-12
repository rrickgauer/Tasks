


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
    }


    /**********************************************************
    Sets all the class properties.
    **********************************************************/
    setElementFields() {
        const self = this;
        this.e_event_data = $(self.e_modal).find('.event-data');

        this.e_name               = $(this.e_event_data).find('dd.name');
        this.e_description        = $(this.e_event_data).find('dd.description');
        this.e_phone_number       = $(this.e_event_data).find('dd.phone_number');
        this.e_location_address_1 = $(this.e_event_data).find('dd.location_address_1');
        this.e_location_address_2 = $(this.e_event_data).find('dd.location_address_2');
        this.e_location_city      = $(this.e_event_data).find('dd.location_city');
        this.e_location_state     = $(this.e_event_data).find('dd.location_state');
        this.e_starts_on          = $(this.e_event_data).find('dd.starts_on');
        this.e_ends_on            = $(this.e_event_data).find('dd.ends_on');
        this.e_frequency          = $(this.e_event_data).find('dd.frequency');
        this.e_seperation         = $(this.e_event_data).find('dd.seperation');
    }

    /**********************************************************
    Initializes the modal display fields.

    This should be called every time a new event needs to be displayed
    **********************************************************/
    init(a_eventID) {
        this.eventID = a_eventID;
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

        $(self.e_name).html(apiResponse.name);
        $(self.e_description).html(apiResponse.description);
        $(self.e_phone_number).html(apiResponse.phone_number);
        $(self.e_location_address_1).html(apiResponse.location_address_1);
        $(self.e_location_address_2).html(apiResponse.location_address_2);
        $(self.e_location_city).html(apiResponse.location_city);
        $(self.e_location_state).html(apiResponse.location_state);
        $(self.e_starts_on).html(apiResponse.starts_on);
        $(self.e_ends_on).html(apiResponse.ends_on);
        $(self.e_frequency).html(apiResponse.frequency);
        $(self.e_seperation).html(apiResponse.seperation);


    }

}

