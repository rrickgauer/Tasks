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
        const modal = this.e_modal;

        this.e_nameDisplay        = $(modal).find('.modal-title');
        this.e_descriptionDisplay = $(modal).find('.modal-header .description');
        this.e_phoneDisplay       = $(modal).find('.event-data.phone .event-data-data');
        this.e_addressDisplay     = $(modal).find('.event-data.address .event-data-data');
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

        $(self.e_nameDisplay).text(apiResponse.name);
        $(self.e_descriptionDisplay).text(apiResponse.description);
        $(self.e_phoneDisplay).text(apiResponse.phone_number);

        
        const displayAddress = self.getAddressDisplayHtml(apiResponse);
        $(self.e_addressDisplay).text(displayAddress);
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
    Show the modal
    **********************************************************/
    showModal() {
        $(this.e_modal).modal('show');
    }
    

}

