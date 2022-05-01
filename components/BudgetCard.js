
const BudgetCard = ({ budget }) => {
    console.log(budget);
    const budgetCard = {
        color: '#55428F',
        bordeRadius: '50px',
        background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
        boxShadow: '20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff',
        borderLeft: '5px solid #55428F',
        clipPath: 'polygon(20% 0%, 78% 0, 100% 24%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0 0)'
    };
    return (
        <div className='col-md-3'>
            <div style={budgetCard} className='card p-4 m-2'>
                <h4 className="text-dark fs-4 fw-bold mb-2">{budget.name}</h4>
                <hr />
                <h1 className="fs-5 fw-bold mt-3 mb-2"><span className="text-dark fs-5 fw-bold">Budget:</span> $ {budget.budget}</h1>
                <p><span className="text-dark fs-5 fw-bold">Description:</span> {budget.description}</p>
            </div>
        </div>
    );
};

export default BudgetCard;