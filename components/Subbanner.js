
const Subbanner = () => {
    return (
        <>
            <div className='container-fluid sub-banner'>
                <div className='container mt-5'>
                    <div className='row g-0'>
                        <div className='col-md-4'>
                            <div className="card card1 p-4">
                                <div className="card-body">
                                    <p className="card-text text-muted">It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy. </p>
                                    <h6 className="text-white author-name">--George Lorimer</h6>
                                </div>
                                <img src="/card1.svg" className="card-img-bottom card1-img" alt="..." />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card card2 p-4 rounded-3">
                                <img src="/card2.svg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you. </p>
                                    <h6 className="text-white author-name">--Maya Angelou</h6>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card card1 p-4">
                                <div className="card-body">
                                    <p className="card-text text-muted">I love money. I love everything about it. I bought some pretty good stuff. Got me a $300 pair of socks. Got a fur sink. An electric dog polisher. A gasoline powered turtleneck sweater. And, of course, I bought some dumb stuff, too. </p>
                                    <h6 className="text-white author-name">--Steve Martin</h6>
                                </div>
                                <img src="/card3.svg" className="card-img-bottom card1-img" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Subbanner;