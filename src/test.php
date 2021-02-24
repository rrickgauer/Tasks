<!DOCTYPE html>
<html>

<head>
    <?php include('header.php'); ?>
    <title>Tasks</title>
</head>

<body id="test">
    <?php include('navbar.php'); ?>

    <div class="container mt-5">



        <div class="container-day-recurrences">
            <div class="header">
                <div class="header-dates">
                    <div class="header-dow">Sunday</div>
                    <div class="mx-1">&sdot;</div>
                    <div class="header-date">3/8/1996</div>
                </div>
            </div>

            <div class="container-events">
                <ul class="list-group list-group-flush events-list">
                    <li class="list-group-item event">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex">
                                <div class="event-checkbox"><input type="checkbox" /></div>
                                <div class="event-time">3:00 PM</div>
                                <div class="event-name">Event name</div>
                            </div>

                            <div class="event-dropdown">
                                <div class="dropdown">
                                    <button class="btn" type="button" data-toggle="dropdown"><i
                                            class='bx bx-dots-horizontal-rounded'></i></button>
                                    <div class="dropdown-menu">
                                        <button class="dropdown-item" type="button">Action</button>
                                        <button class="dropdown-item" type="button">Another action</button>
                                        <button class="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="event-labels">
                            <span class="badge badge-primary event-label">Primary</span>
                            <span class="badge badge-secondary event-label">Primary</span>
                            <span class="badge badge-success event-label">Primary</span>
                            <span class="badge badge-danger event-label">Primary</span>
                        </div>
                    </li>
                </ul>

            </div>




        </div>








    </div>










    <?php include('footer.php'); ?>
    <!-- <script src="js/home.js"></script> -->

</body>

</html>