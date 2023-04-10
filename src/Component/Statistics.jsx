import React from 'react';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'ASS -1',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'ASS -2',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'ASS -3',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'ASS -4',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'ASS -5',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'ASS -6',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'ASS -7',
        uv: 3490,
        // // pv: 4300,
        // // amt: 2100,
    },
];

const Statistics = () => {
    return (
        <div>
            <h1>Show a AreaChart with Assignment marks.</h1>


            <AreaChart
                width={500}
                height={360}
                data={data}
            // margin={{
            //     top: 5,
            //     right: 0,
            //     left: 0,
            //     bottom: 5,
            // }}
            >
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>

        </div>
    );
};

export default Statistics;