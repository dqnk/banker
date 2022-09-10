import axios from "axios";
import React, {Component} from "react";
import { Button, Container, Card, Row } from "react-bootstrap";


class ExpenseTable extends Component <{}, {setName: string, setValue: number, fetchData: []}>{
  constructor(props) {
    super(props);
    this.state = { 
      setName: "",
      setValue: 0,
      fetchData: []
    }
  };
  componentDidMount() {
    axios.get("/api/get").then((response) => {
      this.setState({
        fetchData: response.data,
      });
    });
    console.log("test");
    console.log(this.state.fetchData);
  };
  handleChange = (event) => {
    this.setState(prevState => ({...prevState, [event.target.name]: event.target.value}));
  };
  submit = () => {
    axios.post("/api/insert", (this.state.setName, this.state.setValue)).then(() => {
      alert("success post");
    });
    console.log(this.state);
    console.log(this.state.fetchData);
    document.location.reload();
  };

  render() {
//    let card = this.state.fetchData.map((val, key) => {
//      return (
//        <React.Fragment>
//          <Card style={{ width: "18rem" }} className="m-2">
//            <Card.Body>
//              <Card.Title>{this.state.setName}</Card.Title>
//              <Card.Text>{this.state.setValue}</Card.Text>
//              <input
//                name="reviewUpdate"
//                onChange={this.handleChange}
//                placeholder="Update Review"
//              ></input>
//            </Card.Body>
//          </Card>
//        </React.Fragment>
//      );
//    });
    return(
      <div className="App">
        <div className="form">
          <input
            name="setName"
            placeholder="Enter Expense Name"
            onChange={this.handleChange}
          />
          <input
            name="setValue"
            placeholder="Enter Expense Amount"
            onChange={this.handleChange}
          />
        </div>
        <Button className="my-2" variant="primary" onClick={this.submit}>
          Submit
        </Button>{" "}
        <br />
        <br />

      </div>
    );
  };
}
export default ExpenseTable;
