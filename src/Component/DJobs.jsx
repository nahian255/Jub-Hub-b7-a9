import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Dynamic from './Dynamic';

const DJobs = () => {
    const id = useParams()
    let dynamicId = parseFloat(id.jobId)
    console.log(dynamicId);

    const [file, setFile] = useState([])
    const [found, setFound] = useState([])
    console.log(file);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Porgramming-Hero-web-course/b7a9-career-hub-nahian255/main/public/new.json?token=GHSAT0AAAAAAB5DPPAPAT3RRWX5HPYTPIL4ZBUGQUA')
            .then(res => res.json())
            .then(data => setFile(data))
    }, [])

    const result = file.filter(item => item.id === dynamicId)
    console.log(result);
    return (
        <div>

            {
                result.map((d => <Dynamic
                    id={id}
                    d={d}></Dynamic>))
            }
            {/* {
                file.find(list => d.id === id)
            } */}
        </div>
    );
};

export default DJobs;