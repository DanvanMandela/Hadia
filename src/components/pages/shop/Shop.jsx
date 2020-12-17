import React from 'react'
import '../../../style/bootstrap.css'
import '../../pages/home/style/style.css'
import { Grid, Typography } from '@material-ui/core'
import Product from '../../product/Product'
import useStyles from '../home/style/Style'

const Shop = ({ products, onAddToCart }) => {
    const classes = useStyles()
    return (
        <>
            <main className={classes.content}>
                <div class="site-section">
                    <div class="text-center pb-1 border-primary mb-4">
                        <h2 class="text-primary">Shop</h2>
                    </div>
                    <br />
                    <Grid container justify='center' spacing={4} >
                        {
                            products.map((product) => (
                                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                    <Product product={product} onAddToCart={onAddToCart} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </main>

        </>
    )
}

export default Shop
