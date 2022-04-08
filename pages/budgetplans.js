import Sidenav from "../components/Sidenav";

const Budgetplans = () => {
    return (
        <>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard bg-dark">
                        <div className="container p-5">
                            <div className="row g-5">
                                <div className="col-md-12">
                                    <div className="add-new">
                                        <button className="btn btn-bg fw-bold rounded-pill">Add New plan</button>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bank-card">
                                        <img src="https://selecthealth.org/-/media/selecthealth/blogs/post/2020/03/healthy_food_healthy_diet_blog_lg.ashx" className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fs-3 fw-bold text-muted mb-4">Food</p>
                                            <p className="card-title text-white fs-5">Budget: <span className="info-color fw-bold">$ 200</span></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bank-bg">
                                                <button className="btn btn-bg fw-bold rounded-pill mt-3">Delete</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bank-card">
                                        <img src="https://www.fingerlakes1.com/wp-content/uploads/2022/02/blurred-grocery-aisle-food-stamps-1543145.jpg" className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fs-3 fw-bold text-muted mb-4">Shopping</p>
                                            <p className="card-title text-white fs-5">Budget: <span className="info-color fw-bold">$ 300</span></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bank-bg">
                                                <button className="btn btn-bg fw-bold rounded-pill mt-3">Delete</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card bank-card">
                                        <img src="https://thumbs.dreamstime.com/b/children-field-sunny-summer-morning-happy-smiling-brother-sister-collects-bouquet-wildflowers-family-89543634.jpg" className="card-img-top img-fluid" alt="..." />
                                        <div className="card-body">
                                            <p className="card-title fs-3 fw-bold text-muted mb-4">Kid</p>
                                            <p className="card-title text-white fs-5">Budget: <span className="info-color fw-bold">$ 400</span></p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item bank-bg">
                                                <button className="btn btn-bg fw-bold rounded-pill mt-3">Delete</button>
                                            </li>
                                        </ul>
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

export default Budgetplans;