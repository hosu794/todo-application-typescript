import { Typography } from "@material-ui/core";
import React from "react";


const Header = () => (
   <React.Fragment>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Todo Application
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              This is an application that i have created to learn a typescript skills.
            </Typography>
   </React.Fragment>
)

export default Header;