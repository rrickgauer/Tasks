<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('header.php'); ?>
    <title>Create new event</title>
</head>
<body>
    <?php include('navbar.php'); ?>

    <div class="container">

        <h1 class="text-center my-5">New Event</h1>


        <!-- new event form -->
        <form class="form-event-new">
            <!-- name -->
            <div class="form-group form-event-new-group">
                <label for="name-new">Name</label>
                <input type="text" class="form-control form-control-sm event-new-input" id="name-new" maxlength="100" autofocus>
                <div class="invalid-feedback"></div>
            </div>


            <hr class="mt-5">


            <!-- start and end times -->
            <div class="event-dates-new">
                <!-- starts on -->
                <div class="form-group form-event-new-group">
                    <label for="starts-on-new">Starts on</label>
                    <input type="date" class="form-control form-control-sm event-new-input date" id="starts-on-new">
                    <div class="invalid-feedback"></div>
                </div>

                <!-- starts at -->
                <div class="form-group form-event-new-group">
                    <label for="starts-at-new">Starts at</label>
                    <input type="time" class="form-control form-control-sm event-new-input time" id="starts-at-new">
                    <div class="invalid-feedback"></div>
                </div>

                <!-- ends on -->
                <div class="form-group form-event-new-group">
                    <label for="ends-on-new">Ends on</label>
                    <input type="date" class="form-control form-control-sm event-new-input date" id="ends-on-new">
                    <div class="invalid-feedback"></div>
                </div>

                <!-- ends at -->
                <div class="form-group form-event-new-group">
                    <label for="ends-at-new">Ends at</label>
                    <input type="time" class="form-control form-control-sm event-new-input time" id="ends-at-new">
                    <div class="invalid-feedback"></div>
                </div>
            </div>

            <hr class="mb-5">

            <!-- recurrence info -->
            <div class="event-recurrence-new">

                <div class="d-flex">
                    <span class="mr-3">Repeats every</span>
                    <!-- seperation -->
                    <div class="form-group form-event-new-group mr-3">
                        <input type="number" class="form-control form-control-sm event-new-input time" id="seperation-new" min="0">
                    </div>
                    
                    <!-- frequency -->
                    <div>
                        <div class="form-group form-event-new-group">
                            <select class="form-control form-control-sm event-new-input" id="frequency-new">
                                <option value="ONCE">Does not repeat</option>
                                <option value="DAILY">Day</option>
                                <option value="WEEKLY">Week</option>
                                <option value="MONTHLY">Month</option>
                                <option value="YEARLY">Year</option>
                            </select>
                        </div>
                    </div>
                    
                    <!-- recurrence day -->
                    <div class="form-group form-event-new-group ml-3">
                        <input type="number" class="form-control form-control-sm event-new-input recurrence d-none" id="recurrence-day-new" max="31" placeholder="Day recurrence">
                    </div>

                    <!-- recurrence week -->
                    <div class="form-group form-event-new-group ml-3">
                        <input type="number" class="form-control form-control-sm event-new-input recurrence d-none" id="recurrence-week-new" max="31" placeholder="Week recurrence">
                    </div>

                    <!-- recurrence month -->
                    <div class="form-group form-event-new-group ml-3">
                        <input type="number" class="form-control form-control-sm event-new-input recurrence d-none" id="recurrence-month-new" max="31" placeholder="Month recurrence">
                    </div>
                </div>


            </div>









            <hr class="mb-5">
            <!-- description -->
            <div class="form-group form-event-new-group">
                <label for="description-new">Description</label>
                <input type="text" class="form-control form-control-sm event-new-input" id="description-new">
            </div>

            <!-- phone number -->
            <div class="form-group form-event-new-group">
                <label for="phone-new">Phone</label>
                <input type="tel" class="form-control form-control-sm event-new-input" id="phone-new">
            </div>

            
            <!-- address 1 -->
            <div class="form-group form-event-new-group">
                <label for="address-1-new">Address 1</label>
                <input type="text" class="form-control form-control-sm event-new-input" id="address-1-new" maxlength="70">
            </div>

            
            <!-- address 2 -->
            <div class="form-group form-event-new-group">
                <label for="address-2-new">Address 2</label>
                <input type="text" class="form-control form-control-sm event-new-input" id="address-2-new" maxlength="70">
            </div>

            
            <!-- city -->
            <div class="form-group form-event-new-group">
                <label for="city-new">City</label>
                <input type="text" class="form-control form-control-sm event-new-input" id="city-new" maxlength="40">
            </div>

            
            <!-- state -->
            <div class="form-group form-event-new-group">
                <label for="state-new">State</label>
                <select id="state-new" class="form-control form-control-sm event-new-input">
                    <?php include('state-abbvs-select.php'); ?>
                </select>
            </div>

            
            <!-- zip -->
            <div class="form-group form-event-new-group">
                <label for="zip-new">Zip</label>
                <input type="text" class="form-control form-control-sm event-new-input" id="zip-new">
            </div>


            <!-- heres where recurrence shit goes -->
            

            <button type="button" id="btn-submit-new-event" class="btn btn-sm btn-primary">Create event</button>
        </form>









    
    
    
    
    
    
    
    
    
    </div>
    


    <?php include('footer.php'); ?>
    <script src="js/new-event.js"></script>
</body>
</html>