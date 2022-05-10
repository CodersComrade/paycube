import Image from 'next/image';
import React, { useRef, useEffect, useState } from 'react';
import useAuth from "./hooks/useAuth";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [currentUsers, setCurrentUsers] = useState([]);
    const { user } = useAuth();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aeb3phu', 'template_pwc3do9', form.current, 'BGN-b0-Ss3hsJtxSr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    useEffect(() => {
        fetch("https://stormy-fortress-30009.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setCurrentUsers(data));
    }, []);

    return (
        <>
            <div className='card border-0 merchant-form p-5 mt-3'>
                <h1 className="merchant-title fw-bold my-4">Feel Free <span className="merchant-title-color">To Contact</span></h1>
                <div className='container'>
                    <div className='row'>
                        {currentUsers.map(
                            (currentUser) =>

                                user.email == currentUser.email && (
                                    <div className='col-md-6'>
                                        <form className="row g-3" ref={form} onSubmit={sendEmail}>
                                            <div className="col-md-12">
                                                <h6 className="label my-3">Your Name</h6>
                                                <input type="text" className="form-control" id="inputName4" name="user_name" value={currentUser.userName} />
                                            </div>
                                            <div className="col-md-12">
                                                <h6 className="label my-3">Your Email</h6>
                                                <input type="text" className="form-control" id="inputEmail4" name="user_email" value={currentUser.email} />
                                            </div>
                                            <div className="col-md-12">
                                                <h6 className="label my-3">Your Feedback</h6>
                                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="message"></textarea>
                                            </div>
                                            <div className="col-12">
                                                <input type="submit" className="btn btn-bg rounded-pill" value="Send" />
                                            </div>
                                        </form>
                                    </div>
                                )
                        )}
                        <div className='col-md-6'>
                            <div className=''>
                                <Image
                                    alt="banner"
                                    src="/contact.svg"
                                    layout="responsive"
                                    width={700}
                                    height={475}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;