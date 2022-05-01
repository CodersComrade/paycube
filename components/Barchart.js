import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'January',
        education: 4000,
        food: 2400,
        shopping: 2400,
    },
    {
        name: 'February',
        education: 3000,
        food: 1398,
        shopping: 2210,
    },
    {
        name: 'March',
        education: 2000,
        food: 9800,
        shopping: 2290,
    },
    {
        name: 'April',
        education: 2780,
        food: 3908,
        shopping: 2000,
    },
    {
        name: 'May',
        education: 1890,
        food: 4800,
        shopping: 2181,
    },
    {
        name: 'June',
        education: 2390,
        food: 3800,
        shopping: 2500,
    },
    {
        name: 'July',
        education: 3490,
        food: 4300,
        shopping: 2100,
    },
];

export default class Barchart extends PureComponent {
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
                    <Bar dataKey="food" stackId="a" fill="#8884d8" />
                    <Bar dataKey="shopping" stackId="a" fill="#82ca9d" />
                    <Bar dataKey="education" fill="#ffc658" />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}