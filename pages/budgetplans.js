import Sidenav from "../components/Sidenav";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import BudgetCard from "../components/BudgetCard";

const Budgetplans = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [budget, setBudget] = useState([]);

    useEffect(() => {
        fetch('https://fierce-chamber-90534.herokuapp.com/getBudget')
            .then(res => res.json())
            .then(data => setBudget(data))
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://fierce-chamber-90534.herokuapp.com/budget', data).then(res => {
            if (res.data.insertedId) {
                handleClose();
                alert('added successfully');
                reset();
            }
        });
    };
    return (
        <>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <div className="row">
                            {
                                budget.map(data => <BudgetCard key={data._id} budget={data}></BudgetCard>)
                            }
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <button className='btn btn-danger px-4 py-2 text-capitalize rounded-pill mx-auto my-3' onClick={handleShow}> Make New Budget</button>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header>
                                <Modal.Title>Add New Budget</Modal.Title>
                            </Modal.Header>
                            <form
                                className="p-4"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <input
                                    style={{
                                        border: '2px solid #55428F',
                                        borderRadius: '5px',
                                        padding: '10px',
                                    }}
                                    className="mt-2 me-1"
                                    placeholder="budget name"
                                    {...register('name', { required: true })}
                                />
                                <input
                                    style={{
                                        border: '2px solid #55428F',
                                        borderRadius: '5px',
                                        padding: '10px',
                                    }}
                                    className="mt-2"
                                    placeholder="max budget"
                                    {...register('budget', { required: true })}
                                />
                                <textarea
                                    style={{
                                        border: '2px solid #55428F',
                                        borderRadius: '5px',
                                        padding: '10px',
                                    }}
                                    className="mt-2 w-100"
                                    placeholder="write why you create this budget"
                                    {...register('description', { required: true })}
                                />

                                <input className="btn btn-bg w-50 mx-auto " type="submit" value='create' />
                            </form>
                        </Modal>


                    </div>
                </div>
            </div>
        </>
    );
};

export default Budgetplans;