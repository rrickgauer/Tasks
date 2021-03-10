const DateTime = luxon.DateTime;

class Constants {

    static API = 'https://api.tasks.ryanrickgauer.com/main.php';

    static API_URLS = {
        EVENTS: Constants.API + '/events',
        RECURRENCES: Constants.API + '/recurrences',
        USERS: Constants.API + '/users',
        COMPLETIONS: Constants.API + '/completions',
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

    static WEEKDAY_VALUES = {
        SUNDAY: 0,
        MONDAY: 1,
        TUESDAY: 2,
        WEDNESDAY: 3,
        THURSDAY: 4,
        FRIDAY: 5,
        SATURDAY: 6,
    }

}








