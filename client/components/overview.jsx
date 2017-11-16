import React from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    state: {}

  }



  render () {
    return (
      <div>
        <div>
          <div>Please take a moment to look over your information.</div>
          <div>If everything looks good, please click "Done!" to return to the landing page.</div>
          <div>If you would like to change something, go back and do so!</div>
        </div>
        <div>
          <div>
            <span>Username: </span>
            <span>{this.props.formOneData.username}</span>
          </div>
          <div>
            <span>Password: </span>
            <span>{this.props.formOneData.password}</span>
          </div>
          <div>
            <span>Email: </span>
            <span>{this.props.formOneData.email}</span>
          </div>
          <div>
            <span>First Name: </span>
            <span>{this.props.formTwoData.firstName}</span>
          </div>
          <div>
            <span>Last Name: </span>
            <span>{this.props.formTwoData.lastName}</span>
          </div>
          <div>
            <span>Phone Number: </span>
            <span>{this.props.formTwoData.phone}</span>
          </div>
          <div>
            <span>Street Address: </span>
            <span>{this.props.formThreeData.streetAddress}</span>
          </div>
          <div>
            <span>City: </span>
            <span>{this.props.formThreeData.city}</span>
          </div>
          <div>
            <span>State: </span>
            <span>{this.props.formThreeData.state}</span>
          </div>
          <div>
            <span>Zip Code: </span>
            <span>{this.props.formThreeData.zip}</span>
          </div>
        </div>
        <div>
          <button onClick={() => { this.props.history.push('/form/formThree'); }}>Go Back</button>
          <button onClick={() => { this.props.history.push('/'); }}>Done!</button>
        </div>
      </div>);
  }
}

function mapStateToProps (state) {
  return {
    formOneData: state.formOneData,
    formTwoData: state.formTwoData,
    formThreeData: state.formThreeData
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Overview);