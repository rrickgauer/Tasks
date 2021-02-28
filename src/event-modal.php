<div class="modal fade" id="modal-event" tabindex="-1">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">

                <div class="modal-header-display active">
                    <div class="d-flex justify-content-between align-items-start">
                        <!-- title -->
                        <h4 class="modal-title"></h4>

                        <!-- button to close the modal -->
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <!-- description -->
                    <p class="description"></p>

                    <!-- occurs on -->
                    <div class="event-data event-data-normal occurs-on">
                        <div class="event-data-icon"><i class='bx bx-time'></i></div>
                        <div class="event-data-data"></div>
                    </div>

                    <!-- address -->
                    <div class="event-data event-data-normal address">
                        <div class="event-data-icon"><i class='bx bx-been-here'></i></div>
                        <div class="event-data-data"></div>
                    </div>

                    <!-- phone number -->
                    <div class="event-data event-data-normal phone">
                        <div class="event-data-icon"><i class='bx bx-phone'></i></div>
                        <div class="event-data-data"></div>
                    </div>

                    <!-- event action buttons -->
                    <div class="d-flex align-items-center justify-content-start">
                        <button type="button" class="btn btn-sm btn-light btn-modal-header-edit" title="Edit"><i class='bx bxs-pencil'></i></button>
                        <button type="button" class="btn btn-sm btn-light btn-modal-header-delete" title="Delete event"><i class='bx bx-trash'></i></button>
                    </div>
                </div>

                <div class="modal-header-edit">
                    <form class="form-event-edit">
                        <!-- name -->
                        <div class="form-group form-event-edit-group">
                            <label for="name-edit">Name</label>
                            <input type="text" class="form-control form-control-sm event-edit-input" id="name-edit" maxlength="100" autofocus>
                            <div class="invalid-feedback"></div>
                        </div>


                        <!-- start and end times -->
                        <div class="event-dates-edit">
                            <div class="form-row">
                                <!-- starts on -->
                                <div class="form-group form-event-edit-group col-4">
                                    <label for="starts-on-edit">Starts on</label>
                                    <input type="date" class="form-control form-control-sm event-edit-input date" id="starts-on-edit">
                                    <div class="invalid-feedback"></div>
                                </div>

                                <!-- starts at -->
                                <div class="form-group form-event-edit-group col-2 time">
                                    <label for="starts-at-edit">At</label>
                                    <div class="input-group">
                                        <input type="time" class="form-control form-control-sm event-edit-input " id="starts-at-edit" data-input>
                                        <div class="input-group-append">
                                            <button class="btn btn-sm btn-outline-secondary" type="button" data-clear><i class='bx bx-x'></i></button>
                                        </div>
                                    </div>
                                    <div class="invalid-feedback"></div>
                                </div>

                                <!-- ends on -->
                                <div class="form-group form-event-edit-group  col-4">
                                    <label for="ends-on-edit">Ends on</label>
                                    <input type="date" class="form-control form-control-sm event-edit-input date" id="ends-on-edit">
                                    <div class="invalid-feedback"></div>
                                </div>

                                <!-- ends at -->
                                <div class="form-group form-event-edit-group col-2 time">
                                    <label for="ends-at-edit">At</label>
                                    <div class="input-group">
                                        <input type="time" class="form-control form-control-sm event-edit-input" id="ends-at-edit" data-input>
                                        <div class="input-group-append">
                                            <button class="btn btn-sm btn-outline-secondary" type="button" data-clear><i class='bx bx-x'></i></button>
                                        </div>
                                    </div>
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>

                        </div>

                        <!-- recurrence info -->
                        <div class="event-recurrence-edit">
                            <p><b>Recurrence</b></p>
                            <div class="d-flex">
                                <!-- <span class="mr-1">Repeats every</span> -->
                                <!-- seperation -->
                                <div class="form-group form-event-edit-group mr-3">
                                    <input type="number" class="form-control form-control-sm event-edit-input" id="seperation-edit" min="1" value="1">
                                    <div class="invalid-feedback"></div>
                                </div>

                                <!-- frequency -->
                                <div>
                                    <div class="form-group form-event-edit-group">
                                        <select class="form-control form-control-sm event-edit-input" id="frequency-edit">
                                            <option value="ONCE">Does not repeat</option>
                                            <option value="DAILY">Day</option>
                                            <option value="WEEKLY">Week</option>
                                            <option value="MONTHLY">Month</option>
                                            <option value="YEARLY">Year</option>
                                        </select>
                                        <div class="invalid-feedback"></div>
                                    </div>
                                </div>

                                <!-- recurrence day -->
                                <div class="form-group form-event-edit-group ml-3">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" class="form-control form-control-sm event-edit-input recurrence" id="recurrence-day-edit" max="31" placeholder="Day recurrence">
                                    <div class="invalid-feedback"></div>
                                </div>

                                <!-- recurrence week -->
                                <div class="form-group form-event-edit-group ml-3">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" class="form-control form-control-sm event-edit-input recurrence" id="recurrence-week-edit" max="5" placeholder="Week recurrence">
                                    <div class="invalid-feedback"></div>
                                </div>

                                <!-- recurrence month -->
                                <div class="form-group form-event-edit-group ml-3">
                                    <input type="number" pattern="[0-9]*" inputmode="numeric" class="form-control form-control-sm event-edit-input recurrence" id="recurrence-month-edit" max="12" placeholder="Month recurrence">
                                    <div class="invalid-feedback"></div>
                                </div>
                            </div>
                        </div>

                        <!-- address 1 -->
                        <div class="form-group form-event-edit-group">
                            <label for="address-1-edit">Address 1</label>
                            <input type="text" class="form-control form-control-sm event-edit-input" id="address-1-edit" maxlength="70">
                        </div>


                        <!-- address 2 -->
                        <div class="form-group form-event-edit-group">
                            <label for="address-2-edit">Address 2</label>
                            <input type="text" class="form-control form-control-sm event-edit-input" id="address-2-edit" maxlength="70">
                        </div>

                        <div class="form-row">
                            <!-- city -->
                            <div class="form-group form-event-edit-group col-6">
                                <label for="city-edit">City</label>
                                <input type="text" class="form-control form-control-sm event-edit-input" id="city-edit" maxlength="40">
                            </div>

                            <!-- state -->
                            <div class="form-group form-event-edit-group col-3">
                                <label for="state-edit">State</label>
                                <select id="state-edit" class="form-control form-control-sm event-edit-input">
                                    <option value="" selected disabled class="d-none">Select state</option>
                                    <?php include('state-abbvs-select.php'); ?>
                                </select>
                            </div>


                            <!-- zip -->
                            <div class="form-group form-event-edit-group col-3">
                                <label for="zip-edit">Zip</label>
                                <input type="text" class="form-control form-control-sm event-edit-input" id="zip-edit">
                            </div>
                        </div>

                        <!-- description -->
                        <div class="form-group form-event-edit-group">
                            <label for="description-edit">Description</label>
                            <input type="text" class="form-control form-control-sm event-edit-input" id="description-edit">
                        </div>

                        <!-- phone number -->
                        <div class="form-group form-event-edit-group">
                            <label for="phone-edit">Phone</label>
                            <input type="tel" class="form-control form-control-sm event-edit-input" id="phone-edit">
                        </div>

                        <button type="button" id="btn-edit-event-save" class="btn btn-sm btn-success">Save</button>
                        <button type="button" id="btn-edit-event-cancel" class="btn btn-sm btn-danger">Cancel</button>
                    </form>



                </div>


            </div>
    
            <div class="modal-body">


            </div>

        </div>
    </div>
</div>