const az = window.az

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
        az.remove_element("user_image", 1)
        az.add_image("hold_img", 1, {
            "this_class": "user_image",
            "image_data": data
        })
        az.style_image("user_image", 1, {
            "align": "center"
        })
    }
})
}