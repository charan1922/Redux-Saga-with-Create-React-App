import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { requestApiData } from "./actions";

// const person = ({ data }) => (
//   <div key={data.is.value}>
//     <h1>{data.gender}</h1>
//   </div>
// );

class Home extends Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  render() {
    console.log(this.props.data.results);

    return (
      <div>
        {/* {this.props.data.results.map(
          datas => {
            console.log(datas);
          }
          // <person x={data} />;
        )} */}
        Home
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
