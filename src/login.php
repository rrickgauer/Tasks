<!DOCTYPE html>
<html>
    <head>
        <?php include('header.php');?>
        <title>Login - Tasks</title>
    </head>
    <body>
        <div class="container">
            <h1 class="text-center my-5">Log in to Tasks</h1>

            <form>
                <!-- email -->
                <div class="form-group">
                    <label for="login-email">Email address</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class='bx bx-envelope'></i></span>
                        </div>
                        <input type="email" class="form-control" id="login-email">
                        <div class="invalid-feedback"></div>
                        <div class="valid-feedback"></div>
                    </div>
                </div>

                <!-- password -->
                <div class="form-group">
                    <label for="login-password">Password</label>
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class='bx bxs-lock-alt'></i></span>
                        </div>
                        <input type="password" class="form-control" id="login-password">
                        <div class="invalid-feedback"></div>
                        <div class="valid-feedback"></div>
                    </div>
                </div>

                <button type="button" class="btn btn-primary" id="btn-login">Log in</button>
            </form>

        </div>



    <?php include('footer.php'); ?>
    <script src="js/login.js"></script>        
    </body>
</html>