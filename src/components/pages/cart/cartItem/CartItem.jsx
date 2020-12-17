import React from 'react'
import { Divider, Avatar, CardActions, Button, Typography, IconButton } from '@material-ui/core'
import '../../../../style/bootstrap.css'
import useStyle from './style/Style'
import { DeleteForever } from '@material-ui/icons'

const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart }) => {
    const classes = useStyle()
    return (
        <div>
            <div class="row mb-4">
                <div class="col-md-5 col-lg-3 col-xl-3">
                    <div class="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img class="img-fluid w-100"
                            src={item.media.source} alt="Sample" />

                    </div>
                </div>
                <div class="col-md-7 col-lg-9 col-xl-9">
                    <div>
                        <div class="d-flex justify-content-between">
                            <div>
                                <h5>{item.name}</h5>

                                <p class="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black" /><span><strong id="summary">{item.line_total.formatted_with_symbol}</strong></span>
                            </div>
                            <div>
                                <div class="def-number-input number-input safari_only mb-0 w-100">

                                    <CardActions className={classes.cardActions}>

                                        <Button type="button" size="small" onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)}>-</Button>
                                        <Typography>{item.quantity}</Typography>
                                        <Button type="button" size="small" onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)}>+</Button>

                                    </CardActions>
                                </div>

                            </div>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <CardActions className={classes.cardActions}>
                                    <IconButton  style={{ color: '#212121' }} onClick={() => onRemoveFromCart(item.id)}>
                                        <DeleteForever/>
                                    </IconButton>
                                </CardActions>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Divider variant="inset" component="li" />

        </div>
   
         
   )
}

export default CartItem
