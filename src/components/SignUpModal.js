import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SignUpPage from '../containers/SignUpPage';

class SignUpModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
      />,
      <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
      />
    ];

    return (
        <div>
          <RaisedButton label="Sign up" onTouchTap={this.handleOpen} />
          <Dialog
              title="Sign Up"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
          >

            <SignUpPage/>

          </Dialog>
        </div>
    );
  }
}

SignUpModal.defaultProps = {};

export default SignUpModal;
