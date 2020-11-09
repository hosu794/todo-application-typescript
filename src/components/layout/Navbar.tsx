import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Navbar: FC<{}> = () => (
    <React.Fragment>
          <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
       
          <Typography variant="h6" color="inherit" noWrap>
            Typescript Todo Application
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
)

export default Navbar;