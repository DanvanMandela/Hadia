import React from 'react'
import useStyle from './style/Style'
import { Typography, IconButton} from '@material-ui/core'
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather'
import './style/style.css'
import '../../../style/layout.scss'
import '../../../style/utils.scss'
import { Link, useLocation} from 'react-router-dom'


const Footer = () => {
    const classes = useStyle()
    const location = useLocation()
    return (
        <>
            <div class="footer-top-area">
                <div class="zigzag-bottom"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-about-us">
                                <h2><span>HADIA</span> gift-shop</h2>
                                <p>We have more than 2 years involvement in making flawlessly given gift containers filled the most awesome and novel things from around the globe.</p>
                                <div class="footer-social">
                                    <IconButton aria-label="show cart item" style={{ color: '#212121' }}>
                                        <Facebook href="https://www.facebook.com/" />
                                    </IconButton>
                                    <IconButton aria-label="show cart item" style={{ color: '#212121' }}>
                                        <Twitter href="https://www.twitter.com/" />
                                    </IconButton>
                                    <IconButton aria-label="show cart item" style={{ color: '#212121' }}>
                                        <Instagram href="https://www.instagram.com/" />
                                    </IconButton>
                                    <IconButton aria-label="show cart item" style={{ color: '#212121' }}>
                                        <Linkedin href="https://www.linkedin.com/" />
                                    </IconButton>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <h2 class="mb-5 d-block font-color-white cursor-pointer">User Navigation </h2>
                                <ul>

                                    <li>
                                        {location.pathname == "/" ? <Typography component={Link} to="/" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                                            Home
                                    </Typography> : <Typography component={Link} to="/" variant="body2" className={classes.title} color="inherit">
                                                Home
                                    </Typography>}
                                    </li>
                                    <li>
                                        {location.pathname == "/shop" ? <Typography component={Link} to="/shop" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                                            Shop
                                    </Typography> : <Typography component={Link} to="/shop" variant="body2" className={classes.title} color="inherit">
                                                Shop
                                    </Typography>}
                                    </li>
                                    <li>
                                        {location.pathname == "/cart" ? <Typography component={Link} to="/cart" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                                            Cart
                                    </Typography> : <Typography component={Link} to="/cart" variant="body2" className={classes.title} color="inherit">
                                                Cart
                                    </Typography>}
                                    </li>
                        
                                    <li>
                                        {location.pathname == "/about" ? <Typography component={Link} to="/about" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                                            About
                                    </Typography> : <Typography component={Link} to="/about" variant="body2" className={classes.title} color="inherit">
                                                About
                                    </Typography>}
                                    </li>
                                    <li>
                                        {location.pathname == "/contact" ? <Typography component={Link} to="/contact" variant="body2" className={classes.title} style={{ color: '#f89d13' }}>
                                            Contact
                                    </Typography> : <Typography component={Link} to="/contact" variant="body2" className={classes.title} color="inherit">
                                                Contact
                                    </Typography>}
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <h2 class="mb-5 d-block font-color-black cursor-pointer">Categories</h2>
                                <ul>
                                <li>
                                   <Typography component={Link} to="/shop" variant="body2" className={classes.title} color="inherit">
                                    Cloths
                                    </Typography>
                                    </li>
                                    <li>
                                   <Typography component={Link} to="/shop" variant="body2" className={classes.title} color="inherit">
                                   Shoes
                                    </Typography>
                                    </li>
                                   
                                    <li>
                                   <Typography component={Link} to="/shop" variant="body2" className={classes.title} color="inherit">
                                    Mobile
                                    </Typography>
                                    </li>
                                   
                                    <li>
                                   <Typography component={Link} to="/shop" variant="body2" className={classes.title} color="inherit">
                                   Accessories
                                    </Typography>
                                    </li>
                                
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <div class="col-md-8">
                                    <div class="copyright">
                                        <p>&copy; 2020 Hadia<br /> All Rights Reserved.<a href="http://www.hadiags.com" target="_blank">hadiags.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </>
    )
}

export default Footer
