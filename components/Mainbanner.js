import Link from "next/link";

const Mainbanner = () => {
    return (
        <>
            <div className='container-fluid main-header py-5'>
                <div className='container py-5'>
                    <div className='row g-5'>
                        <div className='col-md-6'>
                            <img src="/bannerimg.svg" className='img-fluid mt-4' alt='bannerImage' />
                        </div>
                        <div className='col-md-6'>
                            <div className='banner-texts mt-3'>
                                <h1 className='banner-title mb-4'>Make Your <span className='title-color'>Money Management</span> More <span className='title-color'>Easier</span></h1>
                                <p className='text-muted'>Annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery.</p>
                                <p className="text-white fw-bold">--Charles Dickens</p>
                                <Link href="/register">
                                    <button className='btn btn-bg mt-4 fw-bold rounded-pill'>Sign Up For Free</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Mainbanner;