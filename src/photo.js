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
        console.log(this.state.pictures.concat(pictureDataURLs)) /* ADD THIS DATA URL TO WHERE I NEED IT */
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }


}

export default Photo