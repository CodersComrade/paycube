
const BudgetCard = ({ budget }) => {
    console.log(budget);
    const budgetCard = {
        color: '#55428F',
        bordeRadius: '50px',
        background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
        boxShadow: '20px 20px 60px #d9d9d9,-20px -20px 60px #ffffff'
    };
    return (
        <div className='col-md-3'>
            <div style={budgetCard} className='card p-4 m-2'>
                <h4>{budget.name}</h4>
                <h1>$ {budget.budget}</h1>
                <p>{budget.description}</p>
            </div>
        </div>
    );
};

export default BudgetCard;