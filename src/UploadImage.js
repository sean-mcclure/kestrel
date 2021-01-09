const React = require('react')
class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div>
        <input type="file" onChange={this.handleChange} className="input_hide"/>
        <img src={this.state.file} alt="" id="avatar_pic" className="avatar_pic"/>
      </div>
    );
  }
}
export default Upload;