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