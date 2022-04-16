import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './hooks/useAuth';

const AddMoneyModal = ({ account }) => {
    console.log(account);
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.userId = user.email;
        data.accountId = account.id;
        data.accountName = account.name;
        console.log(data);
        reset();
        axios.post('https://fierce-chamber-90534.herokuapp.com/addedMoney', data).then(res => {
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        });
    };
    return (
        <div className="modal-dialog">
            <div style={{ boxShadow: '1px 1px 4px 0px #55428F' }} className="modal-content">
                <div className="modal-header d-flex justify-content-between align-items-center">
                    <h5 className="modal-title fs-2" id="exampleModalLabel">Add Money</h5>
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                        <img src="/close.png" style={{ maxWidth: '30px' }} alt="" />
                    </button>
                </div>
                <div className="modal-body">
                    <form
                        className="p-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div class="form-floating">
                            <input
                                type="text"
                                class="form-control mb-3 fs-4 fw-bold"
                                id="floatingPassword"
                                placeholder="Source Of This Money"
                                {...register('source', { required: true })}
                            />
                            <label for="floatingPassword">Source Of This Money</label>
                        </div>
                        <div class="form-floating">
                            <input
                                type="text"
                                class="form-control mb-3 fs-4 fw-bold"
                                id="floatingPassword"
                                placeholder="Amount"
                                {...register('amount', { required: true })}
                            />
                            <label for="floatingPassword">Enter Amount</label>
                        </div>
                        <div>
                            <input className="btn btn-bg rounded-3 text-uppercase w-100" type="submit" value='Add Money' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMoneyModal;