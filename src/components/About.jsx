import React, { PureComponent } from "react";

export class About extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const imageSrc = this.props.image || "https://via.placeholder.com/215Links";

    return (
      <div>
        <aside>
          <img src={imageSrc} alt="blog logo"></img>
          <p>{this.props.about}</p>
        </aside>
      </div>
    );
  }
}

export default About;
