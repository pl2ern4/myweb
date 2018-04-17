import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import FontIcon from 'material-ui/FontIcon';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';
const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  }
};

const UserMenu = (payload) => (
  <MuiThemeProvider>
    <Paper style={style.paper}>
      <Menu>
      
      <MenuItem className="profile-container">
      <List>
        <ListItem
          disabled={true}
          leftAvatar={
            <Avatar
            className="profile-img"
            src={require('../images/images.png')}
            size={30}
            style={style}
          />
          }
        /> 
      </List>
      </MenuItem>
      <Divider />
      <MenuItem primaryText="Update Profile" leftIcon={<ContentCopy />}/>
      <Divider />
      <MenuItem primaryText="Sign Out" leftIcon={<i className="material-icons">&#xE8AC;</i>} onClick={payload.handleLogOut} />
    </Menu>
    </Paper>
  </MuiThemeProvider>
);

export default UserMenu;