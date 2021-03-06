import React, { useEffect, useState } from 'react';
import Dashboardnav from "../components/Dashboardnav";
import Sidenav from "../components/Sidenav";
import Mobilenav from "../components/Mobilenav";

const Exchangerates = () => {
    const [rate, setRate] = useState({})
    useEffect(() => {
        fetch('https://v6.exchangerate-api.com/v6/9660d475e33d8d3e24fdbd51/latest/USD')
            .then(res => res.json())
            .then(data => setRate(data))
    }, [])
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
                        <div className='container'>
                            <h1 className="merchant-title fw-bold my-4 ms-3 text-center">Exchange Rates</h1>
                            <h1 className="merchant-title fw-bold my-4 ms-3 text-center"><span className="merchant-title-color">{rate.time_last_update_utc}</span></h1>
                            <h1 className="merchant-title fw-bold my-4 ms-3">Base: <span className="merchant-title-color">1 {rate.base_code}</span></h1>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"># Country</th>
                                        <th scope="col">Exchange Rates</th>
                                        <th scope="col">Currency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Bangladesh</th>
                                        <td>{rate.conversion_rates?.BDT}</td>
                                        <td>BDT</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Canada</th>
                                        <td>{rate.conversion_rates?.CAD}</td>
                                        <td>CAD</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Russia</th>
                                        <td>{rate.conversion_rates?.RUB}</td>
                                        <td>RUB</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Saudi Arabia</th>
                                        <td>{rate.conversion_rates?.SAR}</td>
                                        <td>SAR</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Qatar</th>
                                        <td>{rate.conversion_rates?.QAR}</td>
                                        <td>QAR</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Kuwait</th>
                                        <td>{rate.conversion_rates?.KWD}</td>
                                        <td>KWD</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Bahrain</th>
                                        <td>{rate.conversion_rates?.BHD}</td>
                                        <td>BHD</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Turkey</th>
                                        <td>{rate.conversion_rates?.TRY}</td>
                                        <td>TRY</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Egypt</th>
                                        <td>{rate.conversion_rates?.EGP}</td>
                                        <td>EGP</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Malaysia</th>
                                        <td>{rate.conversion_rates?.MYR}</td>
                                        <td>MYR</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Singapore</th>
                                        <td>{rate.conversion_rates?.SGD}</td>
                                        <td>SGD</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Pakistan</th>
                                        <td>{rate.conversion_rates?.PKR}</td>
                                        <td>PKR</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">India</th>
                                        <td>{rate.conversion_rates?.INR}</td>
                                        <td>INR</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Exchangerates;

// access_key=4a32dbb3512ece74f7ce6a8a73bde85a