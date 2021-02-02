

class Common {

    static displayAlert(message) {
        $.toast({
            text: message,
            position: 'bottom-center',
            loader: false,
            bgColor: '#3D3D3D',
            textColor: 'white'
        });
    }

    /**
     * Returns the user id from the local storage.
     */
    static getUserIdFromLocalStorage() {
        return window.localStorage.getItem('userID');
    }

    // returns a UUID
    static getUUID() {
        return uuidv4();
    }
}



