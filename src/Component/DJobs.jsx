import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Dynamic from './Dynamic';

const DJobs = (props) => {
    const data = useLoaderData()
    const id = useParams()
    let dynamicId = parseFloat(id.jobId)

    const result = data.filter(item => item.id === dynamicId)
    // console.log(result);
    return (
        <div>
            {
                result.map((d => <Dynamic
                    id={id}
                    d={d}
                ></Dynamic>))
            }

        </div>
    );
};

export default DJobs;