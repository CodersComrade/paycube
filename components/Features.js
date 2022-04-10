
const Features = () => {
    return (
        <>
            <div className="container-fluid features-section py-5">
                <div className="container-fluid my-5">
                    <div className="card mb-3 feature-box container py-5 border-0">
                        <div className="row g-5">
                            <div className="col-md-7">
                                <img src="/feature1.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h3 className="card-title feature-title mb-5 fw-bold">Manage Your <span className="feature-title-color">Personal Finance</span></h3>
                                    <p className="card-text text-muted">Personal finance is about meeting personal financial goals, whether it’s having enough for short-term financial needs, planning for retirement, or saving for your child’s college education. It all depends on your income, expenses, living requirements, and individual goals and desires—and coming up with a plan to fulfill those needs within your financial constraints. To make the most of your income and savings, it’s important to become financially literate, so you can distinguish between good and bad advice and make smart decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="card mb-3 feature-box container my-5 py-5 border-0">
                        <div className="row g-5">
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h3 className="card-title feature-title mb-5 fw-bold">Hassle Free <span className="feature-title-color">Payment processing System</span></h3>
                                    <p className="card-text text-muted">Making it as easy as possible for your customers to pay is essential for increasing conversions and sales.

                                        This is why your checkout page is critical. It’s the final stop for people shopping on your website. It’s the place where they hand over their credit card information and finally part with their hard-earned cash.

                                        Your checkout page is where window shoppers become paying customers.

                                        It’s easy to slap PayPal on your site and call it a day – but if you’re serious about making it easier for your customers to pay and increasing sales for your business, you will want to have full control over the entire checkout process.</p>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <img src="/feature2.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="card mb-3 feature-box my-5 py-5 container border-0">
                        <div className="row g-5">
                            <div className="col-md-7">
                                <img src="/feature3.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h3 className="card-title feature-title mb-5 fw-bold">Keep Track <span className="feature-title-color">Your Expenditure Easily</span></h3>
                                    <p className="card-text text-muted">It’s easy to make this part of your everyday routine thanks to expense tracker apps that help you manage your money on the go. These apps certainly overlap with budgeting apps, but while the latter provide a big-picture view of your finances, expense tracker apps put more of an emphasis on your spending. These apps usually categorize your expenses and help you get a good idea of your purchasing behavior.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Features;