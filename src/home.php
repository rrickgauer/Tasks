<!DOCTYPE html>
<html>

<head>
    <?php include('header.php'); ?>
    <title>Tasks</title>
</head>

<body>
    <?php include('navbar.php'); ?>

    <div class="container">


        <!-- toolbar to filter/search for events -->

        <div class="d-flex align-items-baseline justify-content-between mt-5 mb-3">
            <!-- title -->
            <div><h3>Tasks</h3></div>

            <!-- right side -->
            <div class="d-flex align-items-baseline">
                <!-- date selector -->
                <div class="form-group form-event-new-group flatpickr-date">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class='bx bx-calendar'></i></span>
                        </div>
                        <input type="text" class="form-control form-control-sm" id="date-input" data-input>
                    </div>
                    <div class="invalid-feedback"></div>
                </div>


                <!-- next, prev, today buttons -->
                <div class="d-flex align-items-center ml-3">
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

        </div>




        <!-- recurrences go here -->

        <div class="card">
            <div class="card-body">
                <div class="recurrences-board">
                    <div class="recurrences">
                        <div class="d-flex justify-content-center my-5 py-5">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>


    <?php include('event-modal.php');?>

    <?php include('footer.php'); ?>
    <script src="js/home.js"></script>

</body>

</html>