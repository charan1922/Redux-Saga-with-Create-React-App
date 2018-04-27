import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestApiData } from "./actions";

class Home extends Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    // const { gender, picture } = this.props.data.results;
    if (!this.props.data.results) return <div>Loading ...</div>;
    let ab = [...this.props.data.results];
    console.log(ab, "api");

    return (
      <div>
        <h1>{"home"}</h1>
        <img src={ab[0].picture.large} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
