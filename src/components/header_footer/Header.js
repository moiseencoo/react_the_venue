import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';


export default class Header extends Component {
    state = {
        drawerOpen: false,
        headerFill: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }


    handleScroll = () => {
        if ( window.scrollY > 50 ) {
           this.setState({
               headerFill: true,
           })
        } else {
            this.setState({
                headerFill: false,
            })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value,
        })
    }
 
    render() {
    return (
        <AppBar
            position="fixed"
            style={{
                backgroundColor: this.state.headerFill ? '#2f2f2f' : 'transparent',
                boxShadow: 'none',
                padding: '10px',
            }}
        >
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>
                <IconButton            
                onClick={ () => this.toggleDrawer(true) }
                color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <SideDrawer 
                    open={this.state.drawerOpen}
                    onClose={ (value) => this.toggleDrawer(value) }
                />
            </Toolbar>
        </AppBar>
    )
  }
}

