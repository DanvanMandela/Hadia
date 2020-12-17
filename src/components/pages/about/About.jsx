import React from 'react'
import banner from '../../../assets/img1.jpg'
import './style/Style.css'
import './style/bootstrap.css'
import useStyles from './style/Style'

const About = () => {
    const classes = useStyles()
    return (
        <>
            <main className={classes.content}>
            <div class="site-section">
                <div class="container">
                    <div class="row mb-5">

                        <div class="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
                            <img src={banner} alt="Image" class="img-fluid rounded" />
                        </div>
                        <div class="col-md-6 order-md-1" data-aos="fade">
                            <div class="text-left pb-1 border-primary mb-4">
                                <h2 class="text-primary">Welcome to hadia</h2>
                            </div>
                            <p>At ‘Hadia’ you’ll discover a gift bin for each event. Our excellent, top notch gifts are certain to awe even the most difficult to satisfy beneficiaries. Because of the assistance of our esteemed clients and item supply organizations</p>
                            <p class="mb-5">Regardless of whether you’re passing on a signal of appreciation or basically sharing an attentive wish of recognition, sending a Corporate Gift Baskets or Baby Gift Basket or Birthday Gifts or buying someone an Iphone <b>HADIA</b> is the most ideal approach to meet, welcome, and keep the esteem streaming with every one of your customers, associates, clients and those extremely extraordinary business colleagues.</p>

                            <div class="row">
                                <div class="col-md-12 mb-md-5 mb-0 col-lg-6">
                                    <div class="unit-4">
                                        <div class="unit-4-icon mb-3 mr-4"><span class="text-primary flaticon-frontal-truck"></span></div>
                                        <div>
                                            <h3>Always new products in store for you</h3>
                                            <p>Packed with more than 1500 products and limited edition collections every second week, our stores are never the same and always amazing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </main>
         
            
        </>
    )
}

export default About
