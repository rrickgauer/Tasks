<!DOCTYPE html>
<html>

<head>
    <?php include('header.php'); ?>
    <title>Tasks</title>
</head>

<body>
    <?php include('navbar.php'); ?>


    <div class="container-fluid">

        <h1 class="text-center my-5">Tasks</h1>


        <div class="toolbar">
            <div class="form-group">
                <label for="date-input">Date</label>
                <input type="text" class="form-control flatpickr-date" id="date-input">
            </div>
        
        </div>



        <div class="recurrences-board mt-5">
            <div class="recurrences">

            </div>
        </div>
    </div>


    <?php include('event-modal.php');?>

    <?php include('footer.php'); ?>
    <script src="js/home.js"></script>

</body>

</html>