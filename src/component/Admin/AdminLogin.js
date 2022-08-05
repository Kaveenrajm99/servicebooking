import React, { useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            adminId: '',
            password: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.adminId) {
                errors.adminId = "adminId Missing";
            }
            if (!values.password) {
                errors.password = "Password  missing";
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                let loginData = await axios.post('http://localhost:3001/admin-login', values);
                window.localStorage.setItem('loginsecretkey', loginData.data.token);
                {
                    loginData.data.message === "login successfully" ?
                        navigate('/customerview') : alert("Does not match")
                }
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    })

    useEffect(() => {
        window.localStorage.removeItem('loginsecretkey')
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 login">
                    <div className="mt-2">
                        <h1 className="text-center login-head">Admin</h1>
                    </div>
                    <div className="mt-5 login-border col-sm-12 col-md-12 col-lg-12">
                        <form className="m-5" onSubmit={formik.handleSubmit}>
                            <div className="row">
                                <div className="box">
                                    <span style={{ color: "blue" }}>{formik.errors.adminId}</span>
                                    <input type="number" className="form-control boxs" name="adminId" placeholder="adminId" onChange={formik.handleChange} value={formik.values.adminId} />
                                </div>
                                <div className="box">
                                    <span style={{ color: "blue" }}>{formik.errors.password}</span>
                                    <input type="password" className="form-control boxs" name="password" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} />
                                </div>
                                <div className=" box">
                                    <input type="submit" className="form-control btn btn-primary boxs" value={"Login"} />

                                </div>
                                <div className="fw-bold box">
                                    <p className="text-center text-dark">---New Admin---</p>
                                    <Link to={'/adminregister'}>
                                        <input type="submit" className="form-control btn btn-secondary fw-bold boxs" value={"SignUp"} />
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AdminLogin