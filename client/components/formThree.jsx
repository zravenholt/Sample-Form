import React from 'react';
import {Link} from 'react-router-dom';
import {Form, Text, Select} from 'react-form';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {formThreeSubmit} from '../actions/formThreeSubmit.js';
import Helper from './helper.jsx';

class FormThree extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDB = this.updateDB.bind(this);
  }

  updateDB (data) {
    axios.put(`/users/${this.props.id}`, {
      streetAddress: data.streetAddress,
      city: data.city,
      state: data.state,
      zip: parseInt(data.zip)
    })
    .then((res) => {
      console.log('submitted to DB', res);
    }).catch((err) => {
      console.log('Error adding user to database:', err);
    });
  }

  handleSubmit (values) {
    this.props.formThreeSubmit(values);
    this.updateDB(data);
    this.props.history.push('/form/overview');
  }

  render () {
    return (
      <div>
        <div>
          <Form onSubmit={(values) => { this.handleSubmit(values); }}>
            {formApi => (
              <form onSubmit={formApi.submitForm}>
                <label htmlFor="streetAddress">What is your street address?:</label>
                <Text field="streetAddress" placeholder={this.props.formData ? this.props.formData.streetAddress : 'ex: 12345 Main St.'}/>
                <label htmlFor="city">What city do you live in?: </label>
                <Text field="city" placeholder={this.props.formData ? this.props.formData.city : 'ex: San Francisco'}/>
                <label htmlFor='state'>What state is that in?:</label>
                <Text field="state" placeholder={this.props.formData ? this.props.formData.state : 'ex: California'}/>
                <label htmlFor="zip">What is your 5 digit zip code?: </label>
                <Text field="zip" placeholder={this.props.formData ? this.props.formData.zip : 'ex: 94102'}/>
                <button type='submit'>Save and continue</button>
              </form>
            )}
          </Form>
        </div>
        <Link to='/form/formTwo'>Go back and Edit</Link>
      </div>);
  }
}

function mapStateToProps (state) {
  return {
    formData: state.formThreeData
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({formThreeSubmit: formThreeSubmit}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormThree);