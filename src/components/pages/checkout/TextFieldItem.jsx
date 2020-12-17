import React from 'react'
import '../../../style/layout.scss'
import '../../../style/utils.scss'
import '../../../style/bootstrap.css'
import { TextField, Grid, useFormControl } from '@material-ui/core'
import { useFormContext, Controller } from 'react-hook-form'

const TextFieldItem = ({ name, label }) => {
    const { control } = useFormContext()
    return (
        <Grid item xs={12} sm={6}>
            <label className="w-100 mb-3 mt-2 mb-sm-0">
                <p className="mb-1 font-size-caption font-color-light">
                    {label}
                </p>
            </label>
            <Controller
                as={TextField}
                control={control}
                fullWidth
                name={name}
                required
            />
        </Grid>


    )
}

export default TextFieldItem
