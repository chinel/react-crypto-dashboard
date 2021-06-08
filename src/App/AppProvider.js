import React from "react";

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
    };
  }

  setPage = (page) => this.setState({ page });
}
