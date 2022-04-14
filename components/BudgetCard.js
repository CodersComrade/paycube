
const BudgetCard = ({ budget }) => {
    console.log(budget);
    const budgetCard = {
        color: 'red',
        borderRight: '3px solid #ed3030',
        borderRadius: '20px',
        background: 'linear-gradient(145deg, #09111b, #0b1420)'
    };
    return (
        <div className='col-md-3'>
            <div style={budgetCard} className='p-4 m-2'>
                <h4>{budget.name}</h4>
                <h1>$ {budget.budget}</h1>
                <div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default BudgetCard;