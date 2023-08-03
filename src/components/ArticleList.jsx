import React, { PureComponent } from "react";
import Article from "./Article";

export class ArticleList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const postsArr = this.props.posts;

    const postList = postsArr.map((item) => {
      return (
        <Article
          key={item.id}
          title={item.title}
          date={item.date}
          preview={item.preview}
        />
      );
    });

    return (
      <div>
        <main>{postList}</main>
      </div>
    );
  }
}

export default ArticleList;
