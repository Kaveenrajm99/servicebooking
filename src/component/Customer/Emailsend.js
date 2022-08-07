import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Emailsend = () => {
    const form = useRef();
    const navigate = useNavigate();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ifz8wnu', 'template_vac1emb', form.current, 'oSPWabxh6SYj_Vvi1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Thanks for Booking Our Service")
        navigate('/servicelist');
        e.target.reset();
    };

    return (

        <div className='m-5'>
            <h1>Please Conform Your Email</h1>
            <form ref={form} onSubmit={sendEmail}>

                <div className="box">
                    <input type="text" className="form-control boxs" name="user_name" placeholder="Name" required />
                </div>
                <div className="box">
                    <input type="email" className="form-control boxs" name="user_email" placeholder="email" required />
                </div>
                <div className=" box fw-bold">
                    <input type="submit" className="form-control btn btn-warning boxs" value="Submit" />
                </div>
            </form>
        </div>
    );
};


export default Emailsend