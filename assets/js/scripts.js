(function ($) {
    "use strict";

    // Default User & Pass
    var Username = "username",
        Password = "password";

    // Variables
    var userId = $('#userID'),
        userIdErr = $('#userIdError'),
        pass = $('#password'),
        passErr = $('#passError'),
        loginErr = $('#loginError'),
        inputErr = $('.error');

    loginErr.fadeOut();

    // Check for username value
    userId.on('keyup', function () {
        if (userId.val() != "") {
            userId.removeClass('inputError');
            userIdErr.text('');
            userIdErr.fadeOut();
            loginErr.fadeOut();
        } else {
            loginErr.fadeOut();
        }
    });

    // // Check for password value
    pass.on('keyup', function () {
        if (pass.val() != "") {
            pass.removeClass('inputError');
            passErr.text('');
            passErr.fadeOut();
            loginErr.fadeOut();
        } else {
            loginErr.fadeOut();
        }
    });

    // Form Validation
    $("#loginForm").on('submit', function (event) {
        event.preventDefault();

        // Username Validate
        if (userId.val() === "") {
            userId.addClass('inputError');
            userIdErr.fadeIn();
            userIdErr.text('Please enter your username.');
        }

        // password Validate
        if (pass.val() === "") {
            pass.addClass('inputError');
            passErr.fadeIn();
            passErr.text('Please enter your password.');
        }

        if (userId.val() && pass.val()) {
            if (userId.val() != Username) {
                loginErr.fadeIn();
                loginErr.text('Your username or password is incorrect.');
            } else {
                loginErr.text('');
            }
            if (pass.val() != Password) {
                loginErr.fadeIn();
                loginErr.text('Your username or password is incorrect.');
            } else {
                loginErr.text('');
            }
        }

        // Check for erorr
        if ((inputErr.text() == "") && (loginErr.text() == "")) {
            // Reset The Form
            $("#loginForm").trigger("reset");
            console.log('Logged In');
            return true;
        } else {
            return false;
        }
    });
})(jQuery);