import axios from "axios";
import React from "react";

type State = any;

class ExpenseTable extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { posts: [] };
  }
  componentDidMount() {
    axios.get("/api/get").then((response) => {
      this.setState({
        fetchData: response.data,
      });
    });
  }
  render() {
    return <h1>aa</h1>;
  }
}
export default ExpenseTable;
