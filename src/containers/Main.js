require('normalize.css/normalize.css');
require('styles/App.css');

import EditPanel from '../components/EditPanel';
import SignUpForm from '../components/SignUpForm';
// import CircuitToolbar from '../components/Toolbar';
import AlertDismissable from '../components/AlertDismissable';
import ModalDismissable from '../components/SignUpModal';

import ElementPanel from '../components/ElementPanel';

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className='index'>
        <ElementPanel />

        <EditPanel />
      </div>
    );
  }
}

export default AppComponent;
