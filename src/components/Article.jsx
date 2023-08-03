import React, { PureComponent } from "react";

export class Article extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <small>{this.props.date}</small>
        <p>{this.props.preview}</p>
      </div>
    );
  }
}

export default Article;
