import Image from 'next/image';
import Link from "next/link";
import Zoom from 'react-reveal/Zoom';

const Slide3 = () => {
    return (
        <>
            <div className='container-fluid main-header py-5'>
                <div className='container py-5'>
                    <div className='row g-5'>
                        <div className='col-md-5'>
                            <div className='banner-texts mt-3'>
                                <h1 className='banner-title mb-4 fw-bold'><span className='title-color'>Accurately Maintain </span> Your Digital Personal <span className='title-color'>Finance</span></h1>
                                <p className='text-muted'>Financial peace isn't the acquisition of stuff. It's learning to live on less than you make, so you can give money back and have money to invest. You can't win until you do this.</p>
                                <p className="author-name fw-bold mt-2">-- Dave Ramsey</p>
                                <Link href="/register">
                                    <button className='btn btn-bg mt-4 fw-bold rounded-pill'>Sign Up For Free</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <Zoom>
                                <Image
                                    alt="banner"
                                    src="/bannerimg3.svg"
                                    layout="responsive"
                                    width={700}
                                    height={475}
                                />
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slide3;