export function register_photo_upload() {
document.getElementsByClassName("upload_input")[0].style.display = "none"
document.getElementsByClassName("upload_image")[0].addEventListener("click", function() {
    document.getElementsByClassName("upload_input")[0].click()
})
document.getElementsByClassName("upload_input")[0].addEventListener("change", function(event) {
    var file_types = ["png", "jpg", "jpeg", "gif"]
    var extension = event.target.files[0].name.split(".")[1]
    const is_success = file_types.indexOf(extension) > -1
    if (is_success) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload = function(event) {
           if (extension === "png" || extension === "jpg" || extension === "jpeg" || extension === "gif") {
               var file_upload_data_f678sdfa = event.target.result;
               alert(file_upload_data_f678sdfa)
           }             
        }
    }
})
}
                                                                  