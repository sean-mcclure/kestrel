import React from 'react';
import ImageUploader from 'react-images-upload';
 
class Photo extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture, pictureDataURLs) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
        var img = document.createElement("img")
        img.src = this.state.pictures.concat(pictureDataURLs)[0]
        img.style.width = "50%"
        img.style.marginTop = "10px"
        document.getElementsByClassName("hold_uploaded_img")[0].append(img)
        document.getElementsByClassName("textarea")[0].style.height = "50px"
        
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={false}
                buttonText="PHOTO"
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png', '.gif']}
                maxFileSize={5242880}
                buttonClassName="photo_upload_button"
                withLabel={false}
                buttonStyles={{background:"#F3B32B", color:"#141414", fontWeight:'bold', position:'absolute'}}
            />
        );
    }


}

export default Photo