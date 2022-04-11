import Image from "next/image";

const App = () => {
    return (
        <>
            <div className="container-fluid app-section py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-md-4">
                            <div className="card p-5 fcard1 border-0">
                                <Image
                                    alt="secure"
                                    src="/secure.svg"
                                    layout="responsive"
                                    width={600}
                                    height={475}
                                />
                                <div className="card-body">
                                    <p className="card-text secure-title fw-bold fs-1"><span className="secure-text">100%</span> Secure</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-5 fcard1 border-0">
                                <Image
                                    alt="rating"
                                    src="/rating.svg"
                                    layout="responsive"
                                    width={600}
                                    height={475}
                                />
                                <div className="card-body">
                                    <p className="card-text secure-title fw-bold fs-1"><span className="secure-text">4.5</span> Ratings</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-5 fcard2 border-0">
                                <Image
                                    alt="app"
                                    src="/app.png"
                                    layout="responsive"
                                    width={600}
                                    height={475}
                                />
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