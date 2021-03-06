<!DOCTYPE html>
<html>

<head>
    <?php include('header.php');?>
    <title>Login - Tasks</title>
</head>

<body>
    <div class="container">
        <h1 class="text-center my-5">Log in to Tasks</h1>

        <div class="d-flex justify-content-center">
            <div class="card card-login">
                <div class="card-body">
                    <form>
                        <!-- email -->
                        <div class="form-group">
                            <label for="login-email">Email</label>
                            <input type="email" class="form-control form-control-sm" id="login-email">
                            <div class="invalid-feedback"></div>
                            <div class="valid-feedback"></div>

                        </div>

                        <!-- password -->
                        <div class="form-group">
                            <label for="login-password">Password</label>
                            <input type="password" class="form-control form-control-sm" id="login-password">
                            <div class="invalid-feedback"></div>
                            <div class="valid-feedback"></div>
                        </div>

                        <div class="buttons">
                            <button type="button" class="btn btn-sm btn-primary" id="btn-login">Log in</button>
                            <a href="create-account.php" class="other-page">Create account</a>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>





    </div>



    <?php include('footer.php'); ?>
    <script src="js/login.js"></script>
</body>

</html>