import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AccHeader from '../../components/AccHeader';
import Dashboardnav from '../../components/Dashboardnav';
import useAuth from '../../components/hooks/useAuth';
import Mobilenav from '../../components/Mobilenav';
import ShowDetails from '../../components/ShowDetails';
import Sidenav from '../../components/Sidenav';

const accNo = () => {
    const router = useRouter();
    const pageNum = router.query.accNo;
    const { user } = useAuth();
    const [account, setAccount] = useState([]);
    const [addNew, setAddNew] = useState(false);

    const isAddNew = () => {
        setAddNew(true);
    }
    
    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/account/${pageNum}`)
                .then(res => res.json())
                .then(data => data.map(d => setAccount(d)))
        }
    }, [user]);

    return (
        <>
            <Mobilenav></Mobilenav>
            <div className="container-fluid dashboard">
                <div className="row g-0">
                    <div className="col-md-2">
                        <Sidenav></Sidenav>
                    </div>
                    <div className="col-md-10 dashboard">
                        <Dashboardnav></Dashboardnav>
                        <AccHeader isAddNew={isAddNew} account={account}></AccHeader>
                        <ShowDetails addNew={addNew} account={account}></ShowDetails>
                    </div>
                </div>
            </div>
        </>
    );
};

export default accNo;