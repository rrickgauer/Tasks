const DateTime = luxon.DateTime;

class Constants {

    static API = 'http://localhost/files/api.tasks/src/main.php';

    static API_URLS = {
        EVENTS: Constants.API + '/events',
        RECURRENCES: Constants.API + '/recurrences',
        USERS: Constants.API + '/users',
    };

    static API_RETURN_CODES = {
        Email_Is_Taken: 100,
    }

    static EVENT_FREQUENCY_VALUES = {
        ONCE: 'ONCE',
        DAILY: 'DAILY',
        WEEKLY: 'WEEKLY',
        MONTHLY: 'MONTHLY',
        YEARLY: 'YEARLY',
    }
}








