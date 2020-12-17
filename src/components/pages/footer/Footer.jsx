import React from 'react'
import useStyle from './style/Style'
import { TableFooter, Typography, IconButton, TextareaAutosize, TextField, Badge } from '@material-ui/core'
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather'
import './style/style.css'
import '../../../style/layout.scss'
import '../../../style/utils.scss'


const Footer = () => {
    const classes = useStyle()
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
                                        <Twitter href="https://www.twitter.com/"/>
                                    </IconButton>
                                    <IconButton aria-label="show cart item" style={{ color: '#212121' }}>
                                        <Instagram href="https://www.instagram.com/"/>
                                    </IconButton>
                                    <IconButton aria-label="show cart item" style={{ color: '#212121' }}>
                                        <Linkedin href="https://www.linkedin.com/"/>
                                    </IconButton>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <h2 class="mb-5 d-block font-color-white cursor-pointer">User Navigation </h2>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/shop">Shop</a></li>
                                    <li><a href="/cart">Cart</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contacts">Contacts</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                                <h2 class="mb-5 d-block font-color-black cursor-pointer">Categories</h2>
                                <ul>


                                    <li><a href="/shop">Mobile</a></li>
                                    <li><a href="/shop">Shoes</a></li>
                                    <li><a href="/shop">Cloths</a></li>
                                    <li><a href="/shop">Accessories</a></li>
                                    <li><a href="/shop">Flowers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="footer-menu">
                            <div class="col-md-8">
                    <div class="copyright">
                        <p>&copy; 2020 Hadia<br/> All Rights Reserved.<a href="http://www.hadiags.com" target="_blank">hadiags.com</a></p>
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
