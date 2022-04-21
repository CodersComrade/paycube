import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AccHeader from '../../components/AccHeader';
import Dashboardnav from '../../components/Dashboardnav';
import HighLightDetails from '../../components/HighLightDetails';
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
    const [addExp, setAddExp] = useState(false);
    const [addedMoney, setAddedMoney] = useState([])
    const [addedExp, setAddedExp] = useState([])

    const isAddNewMoney = (d) => {
        setAddNew(d);
    }
    const isAddNewExp = (d) => {
        setAddExp(d);
    }
    
    useEffect(() => {
        if (user.email) {
            fetch(`http://localhost:5000/account/${pageNum}`)
                .then(res => res.json())
                .then(data => data.map(d => setAccount(d)))
        }
    }, [user]);


    useEffect(() => {
        if (account._id) {
            fetch(`http://localhost:5000/getAddedMoney/${account._id}`)
                .then(res => res.json())
                .then(data => setAddedMoney(data.reverse()))
        }
    }, [account,addNew,addExp]);

    useEffect(() => {
        if (account._id) {
            fetch(`http://localhost:5000/getExp/${account._id}`)
                .then(res => res.json())
                .then(data => setAddedExp(data.reverse()))
        }
    }, [account,addNew,addExp]);
    
    let totalBlnc = 0;
    addedMoney.map(data => totalBlnc = totalBlnc + parseInt(data.amount))
    let expBlnc = 0;
    addedExp.map(data => expBlnc = expBlnc + parseInt(data.amount))
    let ablBlnc = totalBlnc > expBlnc ? totalBlnc - expBlnc : 0;

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
                        <AccHeader
                            isAddNewMoney={isAddNewMoney}
                            isAddNewExp={isAddNewExp}
                            account={account}
                        >
                        </AccHeader>
                        <HighLightDetails
                            totalBlnc={totalBlnc}
                            expBlnc={expBlnc}
                            ablBlnc={ablBlnc}
                        >
                        </HighLightDetails>
                        <ShowDetails addedMoney={addedMoney} addedExp={addedExp}></ShowDetails>
                    </div>
                </div>
            </div>
        </>
    );
};

export default accNo;