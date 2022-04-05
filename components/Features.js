
const Features = () => {
    return (
        <>
            <div className="container-fluid features-section">
                <h1 className="features-heading fw-bold text-center my-5">Key Features</h1>
                <div className="container-fluid feature-bg my-5">
                    <div className="card mb-3 feature-box container">
                        <div className="row g-0">
                            <div className="col-md-7">
                                <img src="/feature1.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h3 className="card-title text-white feature-title mb-4">Manage Your <span className="feature-title-color">Personal Finance</span></h3>
                                    <p className="card-text text-muted">Personal finance is about meeting personal financial goals, whether it’s having enough for short-term financial needs, planning for retirement, or saving for your child’s college education. It all depends on your income, expenses, living requirements, and individual goals and desires—and coming up with a plan to fulfill those needs within your financial constraints. To make the most of your income and savings, it’s important to become financially literate, so you can distinguish between good and bad advice and make smart decisions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid feature-bg2">
                    <div className="card mb-3 feature-box container my-5">
                        <div className="row g-0">
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h3 className="card-title text-white feature-title mb-4">Set Your <span className="feature-title-color">Budget Plans</span></h3>
                                    <p className="card-text text-muted">Every project boils down to money. If you had a bigger budget, you could probably get more people to do your project more quickly and deliver more. That’s why no project plan is complete until you come up with a budget. But no matter whether your project is big or small, and no matter how many resources and activities are in it, the process for figuring out the bottom line is always the same.</p>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <img src="/feature2.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid feature-bg3 my-5">
                    <div className="card mb-3 feature-box container">
                        <div className="row g-0">
                            <div className="col-md-7">
                                <img src="/feature3.svg" className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-5">
                                <div className="card-body">
                                    <h3 className="card-title text-white feature-title mb-4">Keep Track <span className="feature-title-color">Your Expenditure</span></h3>
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