import React, { useState, useEffect } from 'react'
import { commerce } from './lib/Commerce'
import { Navbar, Home, About, Footer, Shop, Cart, Checkout,Contacts,BootstrapNavbar } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
    const condition = navigator.onLine ? 'online' : 'offline'



    const fetchProducts = async () => {
        const { data } = await commerce.products.list()

        setProducts(data)
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity)
        setCart(cart)
    }

    const handleUpdateCartQuantity = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity })
        setCart(cart)
    }
    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId)
        setCart(cart)
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty()
        setCart(cart)
    }


    const fetchCart = async () => {
        const cartItem = await commerce.cart.retrieve()
        setCart(cartItem)
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh()
        setCart(newCart)

    }
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
            setOrder(incomingOrder)
            refreshCart()
        } catch (error) {
            setErrorMessage(error.data.error.message)
        }

    }


    useEffect(() => {
        if (condition === 'online') {
            fetch('https://www.google.com/', {
                mode: 'no-cors'
            }).then(() => {
                console.log('CONNECTED TO INTERNET')
                fetchProducts()
                fetchCart()
            }).catch(() => {
                console.log('INTERNET CONNECTIVITY ISSUE')
            })

        } else {
            console.log('OFFLINE');
        }

    }, [])

    return (
        <Router>
            <div>
                <BootstrapNavbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Home products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>

                    <Route exact path="/shop">
                        <Shop products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart
                            cart={cart}
                            handleUpdateCartQuantity={handleUpdateCartQuantity}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                        />
                    </Route>

                    <Route exact path="/checkout">
                        <Checkout
                            cart={cart}
                            order={order}
                            onCaptureCheckout={handleCaptureCheckout}
                            error={errorMessage}
                        />
                    </Route>
                    <Route exact path="/contact">
                       <Contacts/>
                    </Route>
                </Switch>
                <Footer />
            </div>

        </Router>

    )
}
export default App