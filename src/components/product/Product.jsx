import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './style/Style'
import '../../style/layout.scss'
import '../../style/utils.scss'


const Product = ({ product, onAddToCart }) => {
    const classes = useStyles()
    return (
        <div>
        
            <a className="mb-5 d-block font-color-black cursor-pointer">
                <div
                    className="mb-3"
                    style={{
                        paddingBottom: '125%',
                        background: `url("${product.media.source}") center center/cover`
                    }}
                />
                <p className="font-size-subheader mb-2 font-weight-bold">
                    {product.name}
                </p>
                <p className="mb-2 font-color-medium">
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
                </p>

                <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                    {product.price.formatted_with_symbol}
                    <IconButton  aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart />
                    </IconButton>

                    
                </p>


            </a>

        </div>


    )
}

export default Product
