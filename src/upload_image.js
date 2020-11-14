const az = window.az
setTimeout(function() {
 az.hold_value.uploaded_image = false
}, 1000)
export function image_upload() {

az.add_upload_button("hold_modal", 1, {
    "this_class": "upload_photo"
})
az.style_button("upload_photo", 1, {
    "display": "none"
})
az.add_event("upload_photo", 1, {
    "type": "upload",
    "function": function(data) {
        az.remove_element("uploaded_img", 1)
        az.add_image("modal_main", 1, {
            "this_class": "uploaded_img",
            "image_data": data
        })
        az.style_image("uploaded_img", 1, {
            "align": "center",
            "width" : "200px",
            "margin-top" : "10px"
        })
        az.hold_value.uploaded_image = data
    }
})
}