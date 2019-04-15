import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Code, School, Work } from '@material-ui/icons/';
import Github from '../../assets/images/github-icon.png'
import Resume from '../../assets/images/cv-logo-white.png'
import Linkedin from '../../assets/images/linkedin.png'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuAppBar extends React.Component {
   

    render() {
        const { classes } = this.props;
 

        return (
            <div className={classes.root}>

                <AppBar position="static">
                    <Toolbar>

                        <Typography variant="h6" color="inherit" className={classes.grow}>Daniel Kentfield</Typography>

                        <div className='nav-logos-container'>
                            <a href='https://github.com/dk03'> <img className='nav-logo' src={Github} /></a>
                            <a href='/'> <img className='nav-logo' src={Resume} /></a>
                            <a href='https://www.linkedin.com/in/daniel-kentfield-0606279b/'> <img className='nav-logo' src={Linkedin} /></a>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);