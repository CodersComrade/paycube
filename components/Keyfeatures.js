import Image from 'next/image'
import Zoom from 'react-reveal/Zoom';

const Keyfeatures = () => {
    return (
        <>
            <div className="container-fluid mb-5">
                <div className="card mb-3 container my-5 py-5 border-0">
                    <div className="row g-5">
                        <div className="col-md-6">
                            <div className='mt-5'>
                                <Zoom>
                                    <Image
                                        alt="Mountains"
                                        src="/keyfeature.svg"
                                        layout="responsive"
                                        width={700}
                                        height={475}
                                    />
                                </Zoom>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h1 className="merchant-title fs-1 fw-bold mb-3">key <span className="merchant-title-color">Features</span></h1>
                            <p className='text-dark mb-3 fs-6'><span className="merchant-title-color fs-5 fw-bold">PayCube</span> Introduce Awesome and Essential Features for Solving your Unavoidable Digital Financial Potential.</p>
                            <div className="card-body">

                                <div className='row g-3'>
                                    <div className='col-md-6'>
                                        <div className="card mb-3 p-3 feature-boxes border-0">
                                            <div className="row g-0">
                                                <Zoom>
                                                    <div className="col-md-3">
                                                        <img src="/addmoney.svg" className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="card-body">
                                                            <p className="card-text fw-bold text-muted feature-text">Add Money</p>
                                                        </div>
                                                    </div>
                                                </Zoom>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="card mb-3 p-3 feature-boxes border-0">
                                            <div className="row g-0">
                                                <Zoom>
                                                    <div className="col-md-3">
                                                        <img src="/budget.svg" className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="card-body">
                                                            <p className="card-text fw-bold text-muted feature-text">Budget Planner</p>
                                                        </div>
                                                    </div>
                                                </Zoom>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="card mb-3 p-3 feature-boxes border-0">
                                            <div className="row g-0">
                                                <Zoom>
                                                    <div className="col-md-3">
                                                        <img src="/tracker.svg" className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="card-body">
                                                            <p className="card-text fw-bold text-muted feature-text">Expence Tracker</p>
                                                        </div>
                                                    </div>
                                                </Zoom>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="card mb-3 p-3 feature-boxes border-0">
                                            <div className="row g-0">
                                                <Zoom>
                                                    <div className="col-md-3">
                                                        <img src="/exchange.svg" className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="card-body">
                                                            <p className="card-text fw-bold text-muted feature-text">Exchange Rates</p>
                                                        </div>
                                                    </div>
                                                </Zoom>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="card mb-3 p-3 feature-boxes border-0">
                                            <div className="row g-0">
                                                <Zoom>
                                                    <div className="col-md-3">
                                                        <img src="/bemarchant.svg" className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="card-body">
                                                            <p className="card-text fw-bold text-muted feature-text">Be A Merchant</p>
                                                        </div>
                                                    </div>
                                                </Zoom>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="card mb-3 p-3 feature-boxes border-0">
                                            <div className="row g-0">
                                                <Zoom>
                                                    <div className="col-md-3">
                                                        <img src="/analytics.svg" className="img-fluid rounded-start" alt="..." />
                                                    </div>
                                                    <div className="col-md-9">
                                                        <div className="card-body">
                                                            <p className="card-text fw-bold text-muted feature-text">Analytics</p>
                                                        </div>
                                                    </div>
                                                </Zoom>
                                            </div>
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

export default Keyfeatures;