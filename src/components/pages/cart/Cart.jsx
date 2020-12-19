import React from 'react'
import '../../../style/bootstrap.css'
import useStyle from '../home/style/Style'
import CartItem from './cartItem/CartItem'
import { List, ListItem, Container, Button, Typography } from '@material-ui/core'
import '../../../style/layout.scss'
import '../../../style/utils.scss'
import cartIcon from '../../../assets/add-to-basket.png'
import arrowBackIcon from '../../../assets/icon/arrow-long-right.svg'
import { Link} from 'react-router-dom'


const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyle()
    const FilledCart = () => (

        <div className>
            <section>


                <div class="row">


                    <div class="col-lg-8">

                        <div class="mb-3">
                            <div class="pt-4 wish-list">

                                <h5 class="mb-4">Cart (<span>{cart.total_items}</span> items)</h5>

                                <hr class="mb-4" />
                                <List className={classes.root} subheader={<li />}>
                                    {cart.line_items.map((item) => (
                                        <ListItem item xs={12} sm={4} key={item.id} >
                                            <CartItem item={item} onUpdateCartQuantity={handleUpdateCartQuantity} onRemoveFromCart={handleRemoveFromCart} />
                                        </ListItem>
                                    ))}
                                </List>

                                <p class="font-size-subheader mb-2 font-weight-bold"><i class="fas fa-info-circle mr-1"></i>Cart items will be avialble for 30 days</p>

                            </div>
                        </div>


                        <div class="mb-3">
                            <div class="pt-4">

                                <h5 class="text-left font-weight-medium">Expected shipping delivery</h5>

                                <p class="mb-0"> Mon to Sat</p>
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="pt-4">

                                <h5 class="mb-4">We accept</h5>

                                <img class="mr-2" width="45px"
                                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                    alt="Visa" />
                                <img class="mr-2" width="45px"
                                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                    alt="Mastercard" />
                                <img class="mr-2" width="45px"
                                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                    alt="PayPal acceptance mark" />
                            </div>
                        </div>

                    </div>

                    <div class="col-lg-4">

                        <div class="mb-3">
                            <div class="pt-4">

                                <h5 class="mb-3">The total amount of</h5>

                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Temporary amount
                                      <span>{cart.subtotal.formatted_with_symbol}</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>The total amount of</strong>
                                            <strong>
                                                <p class="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <span><strong>{cart.subtotal.formatted_with_symbol}</strong></span>
                                    </li>
                                </ul>

                                <Button  component={Link} to="/checkout"  className="checkout-confirm-buttons h-48 px-3 flex-grow-1 border bg-transparent border-color-black font-color-light mb-2 mb-sm-0 mr-sm-2 no-print">
                                        Checkout
                                 </Button>

        
                            </div>
                        </div>

                        <div class="mb-3">
                            <div class="pt-4">
                                <div class="collapse" id="collapseExample">
                                    <div class="mt-3">
                                        <div class="md-form md-outline mb-0">
                                            <input type="text" id="discount-code" class="form-control font-weight-light"
                                                placeholder="Enter discount code" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>


            </section>
        </div>

    )

    const EmptyCart = () => (
        <div className="d-flex align-items-center justify-content-center bg-brand300 flex-grow-1 p-4 p-md-5 flex-column">
            <div className="position-relative cursor-pointer mb-3">
                <img src={cartIcon} className="w-22" />
                <div
                    className="position-absolute font-size-tiny font-weight-bold"
                    style={{ right: '-4px', top: '-4px' }}
                >
                </div>
            </div>
            <p className="text-center font-weight-medium">

                <h2 class="text-primary">No Items Yet Keep Shopping</h2>
                <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
                    
                    <Typography component={Link} to='/shop'>
                    <a className="d-flex py-3 align-items-center font-color-black borderbottom border-color-black">
                            <img src={arrowBackIcon} />
                        </a>
                    </Typography>
                </div>
            </p>
        </div>

    )
    return (
        <div>

            <Container>
                <div className={classes.toolbar} />
                {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
            </Container>
        </div>
    )
}

export default Cart
