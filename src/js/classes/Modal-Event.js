/**********************************************************
ModalEvent

This class holds the logic for the Event Modal.
It retrieves and displays the meta-data for an event.
**********************************************************/


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

        const locationStruct = {
            address_1: apiResponse.location_address_1,
            address_2: apiResponse.location_address_2,
            city:     apiResponse.location_city,
            state:    apiResponse.location_state,
            zip:      apiResponse.location_zip,
        }

        let address = self.getAddressDisplayHtml(locationStruct);
        console.log(address);
    }

    /**********************************************************
    Generates a string to display an event's address:
    Address 1 Address 2, City, ST ZIP
    **********************************************************/
    getAddressDisplayHtml(locationStruct) {
        // setup flags
        const isAddress1Set = locationStruct.address_1 != null;
        const isAddress2Set = locationStruct.address_2 != null;
        const isCitySet     = locationStruct.city != null;
        const isStateSet    = locationStruct.state != null;
        const isZipSet      = locationStruct.zip != null;
        
        let result = '';
        
        if (isAddress1Set) {
            result += `${locationStruct.address_1}`;
        }

        if (isAddress2Set) {
            result += ` ${locationStruct.address_2}`;
        }

        if ((isAddress1Set || isAddress2Set) && (isCitySet || isStateSet || isZipSet)) {
            result += ', ';
        }

        if (isCitySet) {
            result += `${locationStruct.city}`;

            if (isStateSet || isZipSet) {
                result += ', ';
            }
        }

        if (isStateSet) {
            result += `${locationStruct.state}`;

            if (isZipSet) {
                result += ' ';
            }
        }

        if (isZipSet) {
            result += `${locationStruct.zip}`;
        }

        
        return result;
    }


    /**********************************************************
    Show the modal
    **********************************************************/
    showModal() {
        $(this.e_modal).modal('show');
    }
    

}

