import React, { PureComponent } from "react";

export class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <h1>{this.props.name}</h1>
        </header>
      </div>
    );
  }
}

export default Header;
