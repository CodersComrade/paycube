import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        users: 4000,
        transaction: 2400,
        amt: 2400,
    },
    {
        name: 'February',
        users: 3000,
        transaction: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        users: 2000,
        transaction: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        users: 2780,
        transaction: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        users: 1890,
        transaction: 4800,
        amt: 2181,
    },
    {
        name: 'June',
        users: 2390,
        transaction: 3800,
        amt: 2500,
    },
    {
        name: 'July',
        users: 3490,
        transaction: 4300,
        amt: 2100,
    },
];

export default class Adminareachart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/stacked-area-chart-ix341';

    render() {
        return (
            <ResponsiveContainer width="90%" height="60%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="users" stackId="1" stroke="#8884d8" fill="#55428F" />
                    <Area type="monotone" dataKey="transaction" stackId="1" stroke="#82ca9d" fill="#343030" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
