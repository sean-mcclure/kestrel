import React from 'react';

const headlines = [{
                    logo : "https://www.bbb.org/ProfileImages/2d00bd8f-a238-4212-be19-7253b92e97f5.png",
                    title : "Forbes Says It's Targeting Trump Staffers and Their Future Employers",
                    link : "https://www.newsmax.com/"
                  }]

export var list_of_headlines = headlines.map((headline_obj, i) => 
      <div className="headlines_wrapper" key={i.toString()}>
          <table>
              <tbody>
                  <tr>
                      <td className="headlines_cell"><img className="avatar" src="https://img.utdstc.com/icon/771/f6d/771f6d762698529b0f48f0f351871619b6034ce1fbaec75d431bf14fb5defb75:200" alt="avatar_img"></img><div className="user top_posts_user">John Smith</div></td>
                      <td className="headlines_cell"><h4 className="top_post_title">{headline_obj.title}</h4></td>
                  </tr>
              </tbody>
          </table>
      </div>    
);

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {headlines: list_of_headlines
};
  }

  componentDidMount() {
    this.headline_id = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.headline_id);
  }

  tick() {
    this.setState({
      headlines: list_of_headlines
    });
  }

  render() {
    return (
         <>
         {this.state.headlines}
         </>
    );
  }
}

export default Headlines