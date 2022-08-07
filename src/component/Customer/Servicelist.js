// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



const Servicelist = () => {
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

    useEffect(() => {
        if (!window.localStorage.getItem("loginsecretkey")) {
            navigate('/customerlogin')
        }
    }, [])

    const handleLogout = () => {
        window.localStorage.removeItem('loginsecretkey')
        navigate('/')
    }

    return (
        <div >
            <h1 className='text-center fw-bold mb-2'>Service List </h1>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-secondary m-2" type="button" onClick={handleLogout} >Logout</button>
            </div>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr className='text-center fs-3'>

                                <th>Title</th>
                                <th>Category</th>
                                <th>Duration</th>
                                <th>Booking</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                posts.map((post) => {
                                    return <tr className='fw-bold text-center mt-5'>
                                        <td>{post.title}</td>
                                        <td>{post.category}</td>
                                        <td>{post.duration}</td>

                                        <td>
                                            <div className='text-center'>                                                <Link to="/booking" type="button" className="btn btn-success m-1">Confirm Booking</Link>
                                            </div>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    );
};

export default Servicelist