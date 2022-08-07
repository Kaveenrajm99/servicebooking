import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Productdetail = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);


    const fetchData = async () => {
        const { data } = await axios.get('https://servicebookingapp.herokuapp.com/servicedetail', {
            headers: {
                Authorization: window.localStorage.getItem("loginsecretkey")
            }
        })
        setPosts(data);

    };


    useEffect(() => {
        fetchData();
    }, []);


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
                await axios.post('https://servicebookingapp.herokuapp.com/service-detail', values)
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
                        <button disabled={formik.errors.values} type={"submit"} className="btn btn-primary m-3">submit</button>
                        <Link to='/customerview' className="btn btn-primary m-3">Go Back</Link>
                    </div>
                </div>
            </form><br />
            <div >
                <h1 className='text-center fw-bold mb-2'>Service List </h1>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr className='text-center fs-3'>

                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Duration</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    posts.map((post) => {
                                        return <tr className='fw-bold text-center mt-5'>
                                            <td>{post.title}</td>
                                            <td>{post.category}</td>
                                            <td>{post.duration}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Productdetail;