
const Editprofileform = () => {
    return (
        <>
            <div className='card border-0 merchant-form p-5 mt-3'>
                <img src="/edit.svg" className="img-fluid" alt="edit" />
                <h1 className="merchant-title fw-bold my-4 text-center">Provide Necessary <span className="merchant-title-color">Information</span></h1>
                <div className='container'>
                    <form>
                        <h6 className="label my-3">Upload Profile Picture </h6>
                        <input
                            accept="image/*"
                            multiple
                            type="file"
                            className="form-control"
                        />
                        <br />
                        <h6 className="label my-3">NID Number </h6>
                        <input
                            required
                            type="number"
                            className="form-control"
                        />
                        <br />
                        <h6 className="label my-3">Date of Birth </h6>
                        <input
                            required
                            type="number"
                            className="form-control"
                            placeholder="01 / 01 / 2000"
                        />
                        <br />
                        <h6 className="label my-3">Permanent Address </h6>
                        <input
                            required
                            type="text"
                            className="form-control"
                        />
                        <br />
                        <h6 className="label my-3">Present Address </h6>
                        <input
                            required
                            type="text"
                            className="form-control"
                        />
                        <br />
                        <h6 className="label my-3">Bank Name </h6>
                        <input
                            required
                            type="text"
                            className="form-control"
                        />
                        <br />
                        <h6 className="label my-3">Branch Name </h6>
                        <input
                            required
                            type="text"
                            className="form-control"
                        />
                        <br />
                        <h6 className="label my-3">A/C No </h6>
                        <input
                            required
                            type="text"
                            className="form-control"
                        />
                        <br />
                        <input type="submit" className="btn-bg fw-bold btn rounded-pill" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Editprofileform;