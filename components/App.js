
const App = () => {
    return (
        <>
            <div className="container-fluid app-section">
                <div className="container app-bg py-5">
                    <div className="row">
                        <div className="col-md-8">
                            <button className='btn btn-lg btn-app fw-bold'>Download Now</button>
                        </div>
                        <div className="col-md-4">
                            <div className="app-img-bg">
                                <img src="/app.png" className="img-fluid app-img" alt="app" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;