import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import FormOne from '../components/formOne.jsx';
import FormTwo from '../components/formTwo.jsx';
import FormThree from '../components/formThree.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render () {
    return (<div>
      <Switch>
        <Route path='/form/formOne' component={FormOne}/>
        <Route path='/form/formTwo' component={FormTwo}/>
        <Route path='/form/formThree' component={FormThree}/>
      </Switch>
    </div>);
  }
}

export default Form;