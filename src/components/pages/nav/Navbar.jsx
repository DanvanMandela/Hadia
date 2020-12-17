import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'

import { ShoppingCart } from '@material-ui/icons'
import logo from '../../../assets/logo/logo1.png'
import useStyles from './style/Style'
import { Link, useLocation, NavLink } from 'react-router-dom'

const Navbar = ({ totalItems }) => {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar className={classes.toolbar}>
                    <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
                        <img src={logo} alt="Hadia" height='40px' className={classes.image} />

                    </Typography>

                    <ul>
                        {location.pathname == "/" ? <Typography component={Link} to="/" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                            Home
                    </Typography> : <Typography component={Link} to="/" variant="body2" className={classes.title} color="inherit">
                                Home
                    </Typography>}


                    </ul>
                    <ul>
                        {location.pathname == "/shop" ? <Typography component={Link} to="/shop" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                            Shop
                    </Typography> : <Typography component={Link} to="/shop" variant="body2" className={classes.title} color="inherit">
                                Shop
                    </Typography>}

                    </ul>
                    <ul>
                        {location.pathname == "/about" ? <Typography component={Link} to="/about" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                            About
                    </Typography> : <Typography component={Link} to="/about" variant="body2" className={classes.title} color="inherit">
                                About
                    </Typography>}
                    </ul>
                    <ul>
                        {location.pathname == "/contact" ? <Typography component={Link} to="/about" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                            Contact
                    </Typography> : <Typography component={Link} to="/contact" variant="body2" className={classes.title} color="inherit">
                                Contact
                    </Typography>}
                    </ul>
                    
                <ul >
                        <div className={classes.grow}>
                            {location.pathname != "/cart" && (
                                <div className={classes.button} style={{ marginLeft: "auto" }}>
                                    <IconButton component={Link} to="/cart" aria-label="show cart item" style={{ color: '#212121' }}>
                                        <Badge badgeContent={totalItems} color="secondary">
                                            <ShoppingCart />
                                        </Badge>
                                    </IconButton>

                                </div>)}
                        </div>
                    </ul>
            
             </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
