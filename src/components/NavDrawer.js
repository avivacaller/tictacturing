import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {Link} from 'react-router'
import {NavToggleButton} from '../styled/NavDrawer'

class NavDrawer extends Component {
    state = {
        open: false,
        width: "260px"
    };

    toggle = () => {
        this.setState((prevState, props) => {
            return {
                //set it to the opposite of what is was in the previous state
                open: !prevState.open
            }
        })
    };

    render() {
        return (
            <div>
                <NavToggleButton
                    toggle={this.toggle}
                    width={this.state.width}
                    open={this.state.open}
                >

                </NavToggleButton>
                <Drawer
                    open={this.state.open}
                    >
                    <div style={
                        {
                            height: '200px',
                            width: '100%',
                            backgroundColor: 'orange',
                        }
                    }>Login</div>

                    <Divider/>

                    <Link
                        to={'/'}
                    >
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText={'Play'}
                        />
                    </Link>

                    <Link
                        to={'/profile'}>
                        <MenuItem
                            onTouchTap={this.toggle}
                            primaryText={'Profile'}
                        />
                    </Link>
                </Drawer>

            </div>
        )
    }
}

export default NavDrawer