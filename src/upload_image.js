import {is_mobile} from "./mobile.js"

const cloudName = 'dllmrcc0h';
const unsignedUploadPreset = 'qxq7k2nz';

export function uploadFile(file) {
    var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
     xhr.onreadystatechange = function(e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var url = response.secure_url;
      var tokens = url.split('/');
      /*tokens.splice(-2, 0, 'w_150,c_scale');*/
      var img = new Image();
      img.src = tokens.join('/');
      img.alt = response.public_id;
    }
  };
  fd.append('upload_preset', unsignedUploadPreset);
  fd.append('file', file);
  xhr.send(fd);
}

