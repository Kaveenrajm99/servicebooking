// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Customerview = () => {

    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);


    const fetchData = async () => {
        const { data } = await axios.get('https://servicebookingapp.herokuapp.com/bookingdetail', {
            headers: {
                Authorization: window.localStorage.getItem("loginsecretkey")
            }
        });
        setPosts(data);
    };


    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (!window.localStorage.getItem("loginsecretkey")) {
            navigate('/adminlogin')
        }
    }, [])

    const handleLogout = () => {
        window.localStorage.removeItem('loginsecretkey')
        navigate('/')
    }

    return (
        <div >
            <h1 className='fw-bold text-center'>Customer Details</h1>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to={'/productdetail'} class="btn btn-dark m-2" type="button" >Add Services</Link>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr className='text-center'>

                                <th>Name</th>
                                <th>Email</th>
                                <th>Number</th>
                                <th>Service</th>
                                <th>Date</th>
                                <th>Status</th>

                            </tr>
                        </thead>

                        <tbody>

                            {
                                posts.map((post) => {
                                    return <tr className='text-center'>
                                        <td>{post.name}</td>
                                        <td>{post.email}</td>
                                        <td>{post.number}</td>
                                        <td>{post.service}</td>
                                        <td>{post.date}</td>
                                        <td>
                                            <div className='text-center'>
                                                <Link to="/confirmmail" type="button" className="btn btn-danger m-1">Service Completed</Link>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-dark m-2" type="button" onClick={handleLogout}>Logout</button>
                </div>
            </div>

        </div>

    );
};

export default Customerview