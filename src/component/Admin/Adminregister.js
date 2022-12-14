import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';


const Adminregister = () => {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            adminId: 0,
            mobile: 0,
            password: '',
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Required";
            }
            if (!values.email) {
                errors.email = "Email Missing";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.adminId) {
                errors.adminId = "adminId  missing";
            }
            if (!values.password) {
                errors.password = "Password  missing";
            }
            if (!values.mobile) {
                errors.mobile = "Required";
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://servicebookingapp.herokuapp.com/admin-register', values);
                alert('Registered Successfully')
                navigate('/adminlogin');
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    })
    return (
        <div className="container-fluid bg">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 login">
                    <div className="mt-4">
                        <h1 className="text-center login-head">Join us </h1>
                    </div>
                    <div className="mt-3 col-sm-12 col-md-12 col-lg-12 login-border">
                        <form className="m-5" onSubmit={formik.handleSubmit}>
                            <div class="row login-details">
                                <div class="col mt-4">
                                    <span style={{ color: "blue" }}>{formik.errors.name}</span>
                                    <input type="text" class="form-control" name="name" placeholder="Name" onChange={formik.handleChange} value={formik.values.name} />
                                </div>
                                <div class=" mt-3">
                                    <span style={{ color: "blue" }}>{formik.errors.mobile}</span>
                                    <input type="tel" class="form-control" name="mobile" placeholder="91XXXXXXXXX" onChange={formik.handleChange} value={formik.values.mobile} />
                                </div>
                                <div class="mt-3">
                                    <span style={{ color: "blue" }}>{formik.errors.email}</span>
                                    <input type="email" class="form-control" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} />
                                </div>
                                <div class="mt-3">
                                    <span style={{ color: "blue" }}>{formik.errors.adminId}</span>
                                    <input type="number" class="form-control" name="adminId" placeholder="adminId plz" onChange={formik.handleChange} value={formik.values.adminId} />
                                </div>
                                <div class="mt-3">
                                    <span style={{ color: "blue" }}>{formik.errors.password}</span>
                                    <input type="password" class="form-control" name="password" placeholder="Create Password" onChange={formik.handleChange} value={formik.values.password} />
                                </div>
                                <div class="mt-3">
                                    <input type="submit" class="form-control btn btn-warning" value={"Create Account"} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adminregister;