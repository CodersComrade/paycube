import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";
import Image from 'next/image';

import { useEffect, useState } from "react";
import useAuth from "../components/hooks/useAuth";
import { useForm } from "react-hook-form";

const Sendmoney = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const [sendMoneyUsers, setSendMoneyUsers] = useState([]);

    const onSubmit = (data) => {
        data.senderEmail = user.email;

        fetch("https://stormy-fortress-30009.herokuapp.com/sendmoney", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
        alert("Added");
    };

    return (
        <>
            <Mobilenav></Mobilenav>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <Dashboardnav></Dashboardnav>

                        <div className="card border-0 merchant-form p-5 mt-3">
                            <h1 className="merchant-title fw-bold my-4">Give Receiver <span className="merchant-title-color">Information</span></h1>
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-md-5'>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <h6 className="label mb-3">Receiver Number </h6>
                                            <input
                                                {...register("receiverNo")}
                                                required
                                                className="form-control"
                                            />{" "}
                                            <br />
                                            <h6 className="label my-3">Receiver Email </h6>
                                            <input
                                                {...register("receiverEmail")}
                                                required
                                                className="form-control"
                                            />
                                            <br />
                                            <h6 className="label my-3">Amount </h6>
                                            <input
                                                {...register("sendAmount")}
                                                required
                                                className="form-control"
                                            />
                                            <br />
                                            <input type="submit" className="btn-bg fw-bold btn rounded-pill" value="Send" />
                                        </form>
                                    </div>
                                    <div className='col-md-7'>
                                        <div className=''>
                                            <Image
                                                alt="banner"
                                                src="/sendmoney.svg"
                                                layout="responsive"
                                                width={700}
                                                height={475}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sendmoney;