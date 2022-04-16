import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        USD: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'February',
        USD: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'March',
        USD: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'April',
        USD: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        USD: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'June',
        USD: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'July',
        USD: 3490,
        pv: 4300,
        amt: 2100,
    },
];

export default class Areachart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

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
                    <Area type="monotone" dataKey="USD" stroke="#55428F" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}
