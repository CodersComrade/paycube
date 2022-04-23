import Image from 'next/image';
import Link from "next/link";

const Slide1 = () => {
    return (
        <>
            <div className='container-fluid main-header py-5'>
                <div className='container py-5'>
                    <div className='row g-5'>
                        <div className='col-md-5'>
                            <div className='banner-texts mt-3'>
                                <h1 className='banner-title mb-4 fw-bold'>Make Your <span className='title-color'>Money Management</span> More <span className='title-color'>Easier</span></h1>
                                <p className='text-muted'>Annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery.</p>
                                <p className="author-name fw-bold mt-2">-- Charles Dickens</p>
                                <Link href="/register">
                                    <button className='btn btn-bg mt-4 fw-bold rounded-pill'>Sign Up For Free</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <Image
                                alt="banner"
                                src="/bannerimg.svg"
                                layout="responsive"
                                width={700}
                                height={475}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide1;