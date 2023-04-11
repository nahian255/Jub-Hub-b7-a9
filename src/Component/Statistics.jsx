import React from 'react';

// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';


// const data = [
//     {
//         name: 'ASS -1',
//         uv: 57,
//         // pv: 2400,
//         // amt: 2400,
//     },
//     {
//         name: 'ASS -2',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'ASS -3',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'ASS -4',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'ASS -5',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'ASS -6',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'ASS -7',
//         uv: 3490,
//         // // pv: 4300,
//         // // amt: 2100,
//     },
// ];

const data = [
    {
        name: '1',
        uv: 60,
        // pv: 800,
        // amt: 400,
    },
    {
        name: '2',
        uv: 30,
        pv: 967,
        amt: 1506,
    },
    {
        name: '3',
        uv: 60,
        pv: 1098,
        amt: 989,
    },
    {
        name: '4',
        uv: 55,
        pv: 1200,
        amt: 1228,
    },
    {
        name: '5',
        uv: 60,
        pv: 1108,
        amt: 1100,
    },
    {
        name: '6',
        uv: 60,
        pv: 680,
        amt: 1700,
    },
    {
        name: '7',
        uv: 60,
        pv: 680,
        amt: 1700,
    }
];


const Statistics = () => {
    return (
        <div>
            <h1>Show a SameDataComposedChart with Assignment marks.</h1>

            <ComposedChart
                width={600}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>


            {/* 
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
            </AreaChart> */}

        </div>
    );
};

export default Statistics;