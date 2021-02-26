<!DOCTYPE html>
<html>

<head>
    <?php include('header.php'); ?>
    <title>Tasks</title>
</head>

<body>
    <?php include('navbar.php'); ?>

    <div class="container">
        <h1 class="text-center my-5">Tasks</h1>

        <!-- toolbar to filter/search for events -->
        <div class="toolbar">
            <div>
                <div class="form-group">
                    <input type="text" class="form-control form-control-sm flatpickr-date" id="date-input">
                </div>
            </div>


            <div class="d-flex align-items-center">
                <div class="btn-group" role="group" aria-label="Basic example">
                    <!-- previous week button -->
                    <button type="button" class="btn btn-sm btn-light btn-date-picker" data-date-interval="prev" title="Previous week">
                        <i class='bx bxs-chevron-left'></i>
                    </button>

                    <!-- next week button -->                    
                    <button type="button" class="btn btn-sm btn-light btn-date-picker" data-date-interval="next" title="Next week">
                        <i class='bx bxs-chevron-right'></i>
                    </button>
                </div>

                <!-- this week button -->
                <button type="button" class="btn btn-sm btn-light ml-3 btn-date-picker" data-date-interval="today" title="Today">Today</button>
            </div>

        </div>

        <!-- recurrences go here -->
        <div class="recurrences-board mt-5">
            <div class="recurrences"></div>
        </div>
    </div>


    <?php include('event-modal.php');?>

    <?php include('footer.php'); ?>
    <script src="js/home.js"></script>

</body>

</html>