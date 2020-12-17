import React from 'react'
import useStyles from './style/Style'
import logo from '../../../assets/banner5.png'
import { Grid, Typography } from '@material-ui/core'
import Product from '../../product/Product'
import WebFont from 'webfontloader'
import '../../../style/bootstrap.css'
import './style/style.css'
import brand2 from '../../../assets/brand/brand2.png'
import Explore from './Explore'

const BackgroundHead = {
    paperContainer: {
        backgroundImage: 'url(' + logo + ')'
    }
}

WebFont.load({
    google: {
        families: ['Titillium Web:300,400,700', 'sans-serif']
    }
})


const Home = ({ products, onAddToCart }) => {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <section>
                <img src={logo} className={classes.center} />

            </section>
            <br />

            <div class="promo-area">
                <div class="zigzag-bottom"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="single-promo promo1">
                                <i class="fa fa-refresh"></i>
                                <p>30 Days return</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-promo promo2">
                                <i class="fa fa-truck"></i>
                                <p>Free shipping</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-promo promo3">
                                <i class="fa fa-lock"></i>
                                <p>Secure payments</p>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="single-promo promo4">
                                <i class="fa fa-gift"></i>
                                <p>New products</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center pb-1 border-primary mb-4">
                <h2 class="text-primary">New Arrivals </h2>
            </div>
            <br />


            <div className="row mb-5">
                {products.map((product) => (
                    <div key={product} className="col-6 col-sm-6 col-lg-3">
                        <Product product={product} onAddToCart={onAddToCart} />
                    </div>
                ))}
            </div>
            <br />
            <div class="text-center pb-1 border-primary mb-4">
                <h2 class="text-primary">top Selling </h2>
            </div>
            <br />
        
            <div className="row mb-5">
                {products.map((product) => (
                    <div key={product} className="col-6 col-sm-6 col-lg-3">
                        <Product product={product} onAddToCart={onAddToCart} />
                    </div>
                ))}
            </div>
            <br />


        </main>

    )
}

export default Home
