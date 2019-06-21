import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '../utils/Theme';
import { makeStyles } from '@material-ui/core/styles';
import Button from './Button';
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from './TextField'
import PageTemplate from './templates/PageTemplate';
import Logo from './Logo'
import { classes } from 'istanbul-lib-coverage';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const styles = theme => ({

  // button:
  // {
  //   marginLeft: 20,
  //   marginRight: 20
  // }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  handleFieldChange = (name, value) => {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <PageTemplate>
          <Logo />
          <Typography variant="subtitle1" style={{ paddingTop: 41 }}>
            Welcome Back!
          </Typography>
          <Typography variant="subtitle2" style={{ paddingBottom: 35 }}>
            Please Log In to continue
          </Typography>
          <TextField label="Email Id or phone number" onFieldChange={this.handleFieldChange} />
          <TextField label="Password" onFieldChange={this.handleFieldChange} />
          <Typography variant="body1" style={{ paddingTop: 31, paddingBottom: 22 }}>
            Forgot Password?
          </Typography>
          <Button color='primary' variant='contained' rootClass={classes.button} style={{ width: 225 }} />
        </PageTemplate>
      </MuiThemeProvider>
    )
  }
}
export default withStyles(styles, { withTheme: true })(App);
