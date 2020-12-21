import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingBasketSharp } from '@material-ui/icons'
import useStyles from '../../nav/style/Style'
import logo from '../../../../assets/logo/logo1.png'



const BootstrapNavbar = ({ totalItems }) => {
    const classes = useStyles()
    const location = useLocation()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar className={classes.toolbar}>

                    <div>
                        <div className="row">
                            <div className="col-md-12">
                                <Navbar bg="white" variant="light" expand="lg" sticky="top">
                                    <Navbar.Brand >
                                        <Typography component={Link} to="/" variant="h5" className={classes.title} color="inherit">
                                            <img src={logo} alt="Hadia" height='40px' className={classes.image} />
                                        </Typography>
                                    </Navbar.Brand>

                                    <Navbar id="basic-navbar-nav">
                                        <Nav className="mr-auto">
                                            <Nav.Link >
                                                {location.pathname == "/" ? <Typography component={Link} to="/" variant="body1" style={{ color: '#f89d13' }}>
                                                    Home
                                                   </Typography> : <Typography component={Link} to="/" variant="body1" color="inherit">
                                                        Home
                                                  </Typography>}
                                            </Nav.Link>
                                            <Nav.Link >
                                                {location.pathname == "/shop" ? <Typography component={Link} to="/shop" variant="body1" style={{ color: '#f89d13' }}>
                                                    Shop
                                             </Typography> : <Typography component={Link} to="/shop" variant="body1" color="inherit">
                                                        Shop
                                              </Typography>}</Nav.Link>
                                            <Nav.Link >
                                                {location.pathname == "/about" ? <Typography component={Link} to="/about" variant="body1" style={{ color: '#f89d13' }}>
                                                    About
                                             </Typography> : <Typography component={Link} to="/about" variant="body1" color="inherit">
                                                        About
                                             </Typography>}
                                            </Nav.Link>
                                            <Nav.Link >
                                                {location.pathname == "/contact" ? <Typography component={Link} to="/about" variant="body1" style={{ color: '#f89d13' }}>
                                                    Contact
                                             </Typography> : <Typography component={Link} to="/contact" variant="body1" color="inherit">
                                                        Contact
                                                 </Typography>}
                                            </Nav.Link>

                                        </Nav>
                                        {location.pathname != "/cart" && (
                                            <div className={classes.button} style={{ marginLeft: "auto" }}>
                                                <IconButton component={Link} to="/cart" aria-label="show cart item" style={{ color: 'gray' }}>
                                                    <Badge badgeContent={totalItems} color="secondary">
                                                        <ShoppingBasketSharp />
                                                    </Badge>
                                                </IconButton>

                                            </div>)}
                                    </Navbar>

                                </Navbar>

                            </div>
                        </div>
                    </div>


                </Toolbar></AppBar>

        </>
    )
}
export default BootstrapNavbar

