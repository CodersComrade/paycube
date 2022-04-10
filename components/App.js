
const App = () => {
    return (
        <>
            <div className="container-fluid app-section py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="card p-5 fcard1 border-0">
                                <img src="/secure.svg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <p className="card-text secure-title fw-bold fs-1"><span className="secure-text">100%</span> Secure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-5 fcard1 border-0">
                                <img src="/rating.svg" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <p className="card-text secure-title fw-bold fs-1"><span className="secure-text">4.5</span> Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-5 fcard2 border-0">
                                <img src="/app.png" className="card-img-top img-fluid" alt="..." />
                                <div className="card-body">
                                    <button className='btn app-btn mt-2 fw-bold rounded-pill'>Download Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;