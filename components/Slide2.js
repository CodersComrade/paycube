import Image from 'next/image';
import Link from "next/link";

const Slide2 = () => {
    return (
        <>
            <div className='container-fluid main-header py-5'>
                <div className='container py-5'>
                    <div className='row g-5'>
                        <div className='col-md-5'>
                            <div className='banner-texts mt-3'>
                                <h1 className='banner-title mb-4 fw-bold'><span className='title-color'>Get Registered and</span> Grab 5000 USD <span className='title-color'>Bonus</span></h1>
                                <p className='text-muted'>What we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us.</p>
                                <p className="author-name fw-bold mt-2">-- Julia Cameron</p>
                                <Link href="/register">
                                    <button className='btn btn-bg mt-4 fw-bold rounded-pill'>Sign Up For Free</button>
                                </Link>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <Image
                                alt="banner"
                                src="/bannerimg2.svg"
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

export default Slide2;