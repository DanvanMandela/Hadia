import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core'
import useStyles from './style/styles'
import AddressForm from './AddressForm'
import PaymentForm from './PaymentForm'
import '../../../style/bootstrap.css'
import '../../../style/utils.scss'
import '../../../style/layout.scss'
import '../home/style/style.css'

import { commerce } from '../../../lib/Commerce'

const steps = ['Shipping address', 'Payment details']


const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const [checkoutToken, setCheckoutToken] = useState(null)
    const [activeStep, setActiveStep] = useState(0)
    const [shippingData, setShippingData] = useState({})
    const classes = useStyles()

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
                setCheckoutToken(token)
            } catch (error) {

            }
        }
        generateToken()
    }, [cart])

    const nextStep = () => setActiveStep((previousActiveStep) => previousActiveStep + 1)
    const backStep = () => setActiveStep((previousActiveStep) => previousActiveStep - 1)
    const next = (data) => {
        setShippingData(data)
        nextStep()
    }

    const Confirmation = () => (
        <div>
            confirmation
        </div>
    )

    const Form = () => (activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} onCaptureCheckout={onCaptureCheckout} />)

    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>

                    <div class="text-center pb-1 border-primary mb-4">
                        <h2 class="text-primary">Checkout </h2>
                    </div>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel >
                                    {step}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>

        </div>
    )
}

export default Checkout
