import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestHelloWorld } from "./actions";

class Home extends Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }

  render() {
    return <div>Home {this.props.helloWorld}</div>;
  }
}

const mapStateToProps = state => ({
  helloWorld: state.helloWorld
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestHelloWorld }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
