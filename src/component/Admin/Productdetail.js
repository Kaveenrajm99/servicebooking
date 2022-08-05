import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Productdetail = () => {
    const navigate = useNavigate();
    const formik = useFormik({

        initialValues: {
            title: "",
            category: "",
            duration: ""

        },
        validate: values => {
            const errors = {};

            if (!values.title) {
                errors.title = 'Title Please';
            }
            else if (!values.category) {
                errors.category = 'Enter the Category';
            }
            else if (!values.duration) {
                errors.duration = 'Enter the duration';
            }
            return errors;
        },
        onSubmit: async values => {
            try {
                await axios.post('http://localhost:3001/service-detail', values)
                alert("service generated:)")
                navigate('/customerview')

            } catch (error) {
                console.log(error);
            }

        },
    })

    // useEffect(() => {
    //     if (!window.localStorage.getItem("loginsecretkey")) {
    //         navigate('/adminlogin')
    //     }
    // }, [])


    return (

        <div className='container'>
            <h3 className='mt-3 fw-bold'>Add Services</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className='row mt-2'>
                    <div className='col-lg-6'>
                        <label>Title</label>
                        <input type={"text"} name="title" onChange={formik.handleChange}
                            value={formik.values.title} className="form-control" />
                        <span className='text-warning'> {formik.errors.title}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Category</label>
                        <input type={"text"} name="category" onChange={formik.handleChange}
                            value={formik.values.category} className="form-control" />
                        <span className='text-warning'> {formik.errors.category}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Duration</label>
                        <input type={"text"} name="duration" onChange={formik.handleChange}
                            value={formik.values.duration} className="form-control" />
                        <span className='text-warning'> {formik.errors.duration}</span>
                    </div>
                    <div >
                        <button disabled={formik.errors.values} type={"submit"} className="btn btn-primary mt-4">submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Productdetail;