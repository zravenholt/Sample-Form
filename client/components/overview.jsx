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
        <div className='top-blurb'>
          Please take a moment to look over your information.
          If everything looks good, please click "Done!" to return to the landing page.
          If you would like to change something, go back and do so!
        </div>
        <div className='questions'>
          <div>
            <span className='label'>Username: </span>
            <span className='response'>{this.props.formOneData.username}</span>
          </div>
          <div>
            <span className='label'>Password: </span>
            <span className='response'>{this.props.formOneData.password}</span>
          </div>
          <div>
            <span className='label'>Email: </span>
            <span className='response'>{this.props.formOneData.email}</span>
          </div>
          <div>
            <span className='label'>First Name: </span>
            <span className='response'>{this.props.formTwoData.firstName}</span>
          </div>
          <div>
            <span className='label'>Last Name: </span>
            <span className='response'>{this.props.formTwoData.lastName}</span>
          </div>
          <div>
            <span className='label'>Phone Number: </span>
            <span className='response'>{this.props.formTwoData.phone}</span>
          </div>
          <div>
            <span className='label'>Street Address: </span>
            <span className='response'>{this.props.formThreeData.streetAddress}</span>
          </div>
          <div>
            <span className='label'>City: </span>
            <span className='response'>{this.props.formThreeData.city}</span>
          </div>
          <div>
            <span className='label'>State: </span>
            <span className='response'>{this.props.formThreeData.state}</span>
          </div>
          <div>
            <span className='label'>Zip Code: </span>
            <span className='response'>{this.props.formThreeData.zip}</span>
          </div>
        </div>
        <div>
          <button className='back-button final-button' onClick={() => { this.props.history.push('/form/formThree'); }}>Go Back</button>
          <button className='link-button save final-button'onClick={() => { this.props.history.push('/'); }}>Done!</button>
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