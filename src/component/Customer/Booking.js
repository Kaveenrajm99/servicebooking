import React from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Booking = () => {
    let navigate = useNavigate();


    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            service: "",
            number: 0,
            date: 0

        },
        validate: values => {
            const errors = {};

            if (!values.email) {
                errors.email = 'Email Please';
            }
            else if (!values.name) {
                errors.name = 'Enter  the Name';
            }
            if (!values.service) {
                errors.service = 'Enter the service ';
            }
            if (!values.number) {
                errors.number = 'Please Enter Phone Number';
            }
            if (!values.date) {
                errors.date = 'Book Date';
            }

            return errors;
        },
        onSubmit: async values => {
            try {
                await axios.post("http://localhost:3001/bookingdetail", values)
                alert("Booking Conformed ")
                navigate('/servicelist')
            } catch (error) {
                console.log(error);
            }
        },
    })

    // useEffect(() => {
    //     if (!window.localStorage.getItem("loginsecretkey")) {
    //         navigate('/customerlogin')
    //     }
    // }, [])


    return (

        <div className='container'>
            <h1 className='text-center fw-bold'>Booking Details</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Email</label>
                        <input type={"email"} name="email" onChange={formik.handleChange}
                            value={formik.values.email} className="form-control" />
                        <span className='text-primary'> {formik.errors.email}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Name</label>
                        <input type={"text"} name="name" onChange={formik.handleChange}
                            value={formik.values.name} className="form-control" />
                        <span className='text-primary'> {formik.errors.name}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Service</label>
                        <input type={"text"} name="service" onChange={formik.handleChange}
                            value={formik.values.service} className="form-control" />
                        <span className='text-primary'> {formik.errors.service}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Number</label>
                        <input type={"tel"} name="number" onChange={formik.handleChange}
                            value={formik.values.number} className="form-control" maxlength="10" />
                        <span className='text-primary'> {formik.errors.number}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Date</label>
                        <input type={"date"} name="date" onChange={formik.handleChange}
                            value={formik.values.date} className="form-control" />
                        <span className='text-primary'> {formik.errors.date}</span>
                    </div>
                </div>
                <div className='col fw-bold text-center'>
                    <input disabled={formik.errors.values} type={"submit"} className="btn btn-primary mt-4" />
                </div>
                <br></br>
            </form>
        </div>
    )
}

export default Booking