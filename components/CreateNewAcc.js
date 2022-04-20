import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from './hooks/useAuth';

const CreateNewAcc = ({ addAccount }) => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/accounts', data).then(res => {
            if (res.data.insertedId) {
                addAccount();
                alert('added successfully');
                reset();
            }
        });
    };

    return (
        <div className="modal-dialog">
            <div  style={{ boxShadow: '1px 1px 4px 0px #55428F' }} className="modal-content">
                <div className="modal-header d-flex justify-content-between align-items-center">
                    <h5 className="modal-title fs-2" id="exampleModalLabel">Create New Account</h5>
                    <button type="button" className="btn" data-bs-dismiss="modal" aria-label="Close">
                        <img src="/close.png" style={{maxWidth: '30px'}} alt="" />
                    </button>
                </div>
                <div className="modal-body">
                    <form
                        className="p-4"
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <h6 className='fs-3 fw-bold mb-1'>User Email</h6>
                        <input
                            type="text"
                            value={user.email}
                            className="form-control mb-3 fs-4 py-2"
                            {...register('email', { required: true })}
                        />
                        <div class="form-floating">
                            <input
                                type="text"
                                class="form-control mb-3 fs-4 fw-bold"
                                id="floatingPassword"
                                placeholder="Account Name"
                                {...register('name', { required: true })}
                            />
                            <label for="floatingPassword">Enter Account Name</label>
                        </div> 
                        <div>
                        <input className="btn btn-bg rounded-3 text-uppercase w-100" type="submit" value='create' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateNewAcc;