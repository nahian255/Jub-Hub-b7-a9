import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
;

const Dynamic = () => {

    // const [dynamicItem, setDynamicItem] = useState([]);
    // console.log(dynamicItem);
    // useEffect(() => {
    //     fetch('new.json')
    //         .then(res => res.json())
    //         .then(data => setDynamicItem(data))
    // }, []);

    const d = useLoaderData()
    console.log(d);
    return (
        <div>
            <h1>hi and fucckf</h1>
        </div>
    );
};

export default Dynamic;