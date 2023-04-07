$(document).ready(function () {
            $(window).scroll(function () {
                $('.video').css("opacity", 1 - $(window).scrollTop() / 700)
            })
        })
        var modal = document.getElementById('id01');

            // When the user clicks anywhere outside of the modal, close it
            // window.onclick = function (event) {
            //     if (event.target == modal) {
            //         modal.style.display = "none";
            //     }
            // }
        window.onscroll = function () { scrollFunction() };
            function scrollFunction() {
                    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                        document.getElementById("navbar").style.top = "0";
                    } else {
                        document.getElementById("navbar").style.top = "-50px";
                    }
                }

    // Defining a function to display error message
        function printError(elemId, hintMsg) {
            document.getElementById(elemId).innerHTML = hintMsg;
        }
        // function loginform(){
        //     document.getElementById(name).style.height = "0";
        // }

        // Defining a function to validate form 
        function validateForm() {
            // Retrieving the values of form elements 
            var name = document.contactForm.name.value;
            var email = document.contactForm.email.value;
            var mobile = document.contactForm.mobile.value;
            var country = document.contactForm.country.value;
            var pass = document.contactForm.pass.value;
            var address = document.contactForm.address.value;

            // Defining error variables with a default value
            var nameErr = emailErr = mobileErr = countryErr = passErr = addErr = true;

            // Validate name
            if (name == "") {
                printError("nameErr", "Please enter your name");
            } else {
                var regex = /^[a-zA-Z\s]+$/;
                if (regex.test(name) === false) {
                    printError("nameErr", "Please enter a valid name");
                } else {
                    printError("nameErr", "");
                    nameErr = false;
                }
            }

            // Validate email address
            if (email == "") {
                printError("emailErr", "Please enter your email address");
            } else {
                // Regular expression for basic email validation
                var regex = /^\S+@\S+\.\S+$/;
                if (regex.test(email) === false) {
                    printError("emailErr", "Please enter a valid email address");
                } else {
                    printError("emailErr", "");
                    emailErr = false;
                }
            }

            // Validate mobile number
            if (mobile == "") {
                printError("mobileErr", "Please enter your mobile number");
            } else {
                var regex = /^[1-9]\d{9}$/;
                if (regex.test(mobile) === false) {
                    printError("mobileErr", "Please enter a valid 10 digit mobile number");
                } else {
                    printError("mobileErr", "");
                    mobileErr = false;
                }
            }

            // Validate country
            if (country == "Select") {
                printError("countryErr", "Please select your country");
            } else {
                printError("countryErr", "");
                countryErr = false;
            }

            // Validate gender
            if (pass == "") {
                printError("passErr", "Please enter your password");
            } else {
                printError("passErr", "");
                genderErr = false;
            }
            if (address == "") {
                printError("addErr", "Please enter your address");
            } else {
                printError("addErr", "");
                addErr = false;
            }

            // Prevent the form from being submitted if there are any errors
            if ((nameErr || emailErr || mobileErr || countryErr || passErr || addErr) == true) {
                return false;
            } else {
                // Creating a string from input data for preview
                var dataPreview = "You've entered the following details: \n" +
                    "Full Name: " + name + "\n" +
                    "Email Address: " + email + "\n" +
                    "Mobile Number: " + mobile + "\n" +
                    "Country: " + country + "\n" +
                    "Password: " + pass + "\n";
                "Address: " + address + "\n";

                // Display input data in a dialog box before submitting the form
                alert(dataPreview);
            }
        }