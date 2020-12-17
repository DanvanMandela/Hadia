import React, { useState, useEffect } from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { commerce } from '../../../lib/Commerce'
import TextFieldItem from './TextFieldItem'
import '../../../style/utils.scss'
import '../../../style/bootstrap.css'
import '../../../style/layout.scss'
import '../home/style/style.css'

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')
    const methods = useForm()



    const fetchShippingCountries = async (checkOutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkOutTokenId)
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
        console.log(checkoutToken.id)
    }

    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)

        setShippingSubdivisions(subdivisions)
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
        setShippingOptions(options)
        setShippingOption(options[0].id)
    }


    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)

    }, [shippingSubdivision])

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry)
    }, [shippingCountry])


    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                    <Grid container spacing={3}>
                        <TextFieldItem name='firstName' label='First Name' />
                        <TextFieldItem name='lastName' label='Last Name' />
                        <TextFieldItem name='address1' label='Address' />
                        <TextFieldItem name='email' label='Email' />
                        <TextFieldItem name='city' label='City' />
                        <TextFieldItem name='zip' label='ZIP/ Postal code' />
                        <div className="col-12 col-sm-6 mb-3">
                            <label className="w-100">
                                <p className="mb-1 font-size-caption font-color-light">
                                    Country
                                </p>
                                <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                    {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}

                                </Select>
                            </label>
                        </div>

                        <div className="col-12 col-sm-6 mb-3">
                            <label className="w-100">
                                <p className="mb-1 font-size-caption font-color-light">
                                    Sub-division
                                </p>
                                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                                    {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </label>
                        </div>


                        <div className="col-12 col-sm-6 mb-3">
                            <label className="w-100">
                                <p className="mb-1 font-size-caption font-color-light">
                                    Options
                                </p>
                                <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                    {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                                        <MenuItem key={item.id} value={item.id}>
                                            {item.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </label>
                        </div>
                    </Grid>

                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button component={Link} to="/cart" className="checkout-confirm-buttons h-48 px-3 border bg-white border-color-gray500 font-color-light mb-2 mb-sm-0 mr-sm-2 no-print">Back to cart</Button>
                    <Button type='submit'  className="checkout-confirm-buttons h-48 px-3 border bg-black border-color-gray500 font-color-light mb-2 mb-sm-0 mr-sm-2 no-print">payment</Button>
                        
                    </div>

                </form>
            </FormProvider>

        </>
    )
}

export default AddressForm
