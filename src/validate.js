export function validate(options) {
    if (document.getElementsByClassName(options.input_class)[0].value !== "" && document.getElementsByClassName(options.input_class)[1].value !== "") {
        if (document.getElementsByClassName(options.input_class)[0].value.indexOf("@") === -1) {
            alert(options.fail_message_1)
        } else {
            if (document.getElementById("sign_up").style.background === "gold") { // new user (registering)
                options.new_user_function();
            } else { // existing user (signing in)
                options.existing_user_function();
            }
        }
    } else {
            alert(options.fail_message_2)
    }
}

            