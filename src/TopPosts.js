import React from 'react';
import avatar from "./avatar.png";

const top_posts = ["This is a Headline Title.", 
                    "This is a Headline Title.",
                    "This is a Headline Title.", 
                    "This is a Headline Title."]

export var list_of_top_posts = top_posts.map((post, i) => 
      <div className="top_post_wrapper" key={i.toString()}>
          <table>
              <tbody>
                  <tr>
                      <td className="top_posts_cell"><img className="avatar" src={avatar} alt="avatar_img"></img><div className="user top_posts_user">John Smith</div></td>
                      <td className="top_posts_cell"><h4 className="top_post_title">{post}</h4></td>
                  </tr>
              </tbody>
          </table>
      </div>    
);

class TopPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {top_posts: list_of_top_posts
};
  }

  componentDidMount() {
    this.top_post_id = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.top_post_id);
  }

  tick() {
    this.setState({
      top_posts: list_of_top_posts
    });
  }

  render() {
    return (
         <>
         {this.state.top_posts}
         </>
    );
  }
}

export default TopPosts