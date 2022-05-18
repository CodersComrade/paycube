
const Processpayment = () => {
    return (
        <>
            <div className="container">
                <div className='card border-0 merchant-form p-5 my-3'>
                    <img src="/processpayment.svg" className="img-fluid" alt="edit" />
                    <h1 className="merchant-title fw-bold my-4 text-center">Provide Necessary <span className="merchant-title-color">Information</span></h1>
                    <div className='container'>
                        <form>
                            <h6 className="label mb-3">Your Number </h6>
                            <input
                                required
                                className="form-control"
                            />{" "}
                            <br />
                            <h6 className="label my-3">Your Email </h6>
                            <input
                                required
                                className="form-control"
                            />
                            <br />
                            <h6 className="label my-3">Amount </h6>
                            <input
                                required
                                className="form-control"
                            />
                            <br />
                            {/* <input type="submit" className="btn-bg fw-bold btn rounded-pill" value="Send" /> */}

                            <button type="submit" className="btn-bg fw-bold btn rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Pay
                            </button>
                        </form>
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title fs-4 fw-bold" id="exampleModalLabel">Confirm Payment</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div>
                                    <form>
                                        <div className="modal-body">
                                            <h6 className="label my-3">Receiver Number </h6>
                                            <input
                                                required
                                                className="form-control"
                                            />
                                            <br />
                                            <h6 className="label my-3">Receiver Email </h6>
                                            <input
                                                required
                                                className="form-control"
                                            />
                                            <br />
                                            <h6 className="label my-3">Amount </h6>
                                            <input
                                                required
                                                className="form-control"
                                            />
                                            <br />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-outline btn-bg fw-bold rounded-pill" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn-bg fw-bold btn rounded-pill">Confirm</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Processpayment;