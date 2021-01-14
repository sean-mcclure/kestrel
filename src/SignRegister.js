import Parse from "parse";

import {visible} from "./visible";

    Parse.initialize("2vJNSZlP54FvvotQc5f4RjvJ6o6YiOFATpAgcB4b", "HOBV5HQp2R4lR4icbblBlgeny3hpHPuewsXM9wJR");
    Parse.serverURL = "https://parseapi.back4app.com/";

    export async function new_user(pass_email, pass_password) {
        var user = new Parse.User();
        user.set("username", pass_email);
        user.set("email", pass_email);
        user.set("password", pass_password);
        try {
            await user.signUp();
            visible("sign_in");
            document.getElementsByClassName("sign_in_input")[0].value = "";
            document.getElementsByClassName("sign_in_input")[1].value = "";
            document.getElementById("welcome_modal").style.display = "block";
            setTimeout(function() {
                document.getElementById("welcome_modal").style.display = "none";
                document.getElementsByClassName("options_icons")[3].classList.add("rubberBand_it");
            }, 3000)
        } catch (error) {
            alert(error.message);
            document.getElementsByClassName("sign_in_input")[0].value = "";
            document.getElementsByClassName("sign_in_input")[1].value = "";
            document.getElementsByClassName("sign_in_input")[0].focus();
        }
    }

    async function sign_in_user(pass_email, pass_password) {
        try {
            var user = await Parse.User.logIn(pass_email, pass_password);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }

    function log_user_out() {
        Parse.User.logOut().then(() => {
            var currentUser = Parse.User.current(); // this will now be null
        });
    }

    function check_if_user_is_already_signed_in() {
        var currentUser = Parse.User.current();
        if (currentUser) {
            console.log(currentUser)
        } else {
            console.log("signed out")
        }
    }