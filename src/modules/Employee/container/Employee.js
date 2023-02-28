import React, { Component } from 'react';
import Form from "../components/Form";
import CardDisplay from "../components/CardDisplay";
import { connect } from "react-redux";

class Employee extends Component {
    state = {
        value: 0,
      };
    
    render() {
        return (
            <>
                <Form />
                <CardDisplay employeData={this.props.employeData} />
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      employeData: state.employeData,
    };
  };

export default connect(mapStateToProps, null)(Employee);