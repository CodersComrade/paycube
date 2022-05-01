import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'January',
        Transaction: 4000,
        CashIn: 2400,
        amt: 2400,
    },
    {
        name: 'February',
        Transaction: 3000,
        CashIn: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        Transaction: 2000,
        CashIn: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        Transaction: 2780,
        CashIn: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        Transaction: 1890,
        CashIn: 4800,
        amt: 2181,
    },
    {
        name: 'June',
        Transaction: 2390,
        CashIn: 3800,
        amt: 2500,
    },
    {
        name: 'July',
        Transaction: 3490,
        CashIn: 4300,
        amt: 2100,
    },
];

export default class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi';

    render() {
        return (
            <ResponsiveContainer width="100%" height="60%">
                <LineChart width={500} height={300} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Transaction" stroke="#55428F" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="CashIn" stroke="#343030" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
