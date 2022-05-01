import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        users: 4000,
        transaction: 2400,
        CashIn: 2400,
    },
    {
        name: 'February',
        users: 3000,
        transaction: 1398,
        CashIn: 2210,
    },
    {
        name: 'March',
        users: 2000,
        transaction: 9800,
        CashIn: 2290,
    },
    {
        name: 'April',
        users: 2780,
        transaction: 3908,
        CashIn: 2000,
    },
    {
        name: 'May',
        users: 1890,
        transaction: 4800,
        CashIn: 2181,
    },
    {
        name: 'June',
        users: 2390,
        transaction: 3800,
        CashIn: 2500,
    },
    {
        name: 'July',
        users: 3490,
        transaction: 4300,
        CashIn: 2100,
    },
];

export default class Adminbarchart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/mixed-bar-chart-q4hgc';

    render() {
        return (
            <ResponsiveContainer width="100%" height="60%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="transaction" stackId="a" fill="#8884d8" />
                    <Bar dataKey="CashIn" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="users" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}