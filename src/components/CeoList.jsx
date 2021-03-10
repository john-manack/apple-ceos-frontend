import { useEffect, useState } from 'react';

const CeoList = () => {
    const [ceos, setCeos] = useState([]);

    useEffect(() => {
        (async () => {
            const ceoData = await fetch('http://127.0.0.1:3000/ceos').then(response => response.json());
            setCeos(ceoData);
        })();
    },[]); // include the double brackets as the second 'dependency' argument in useEffect to prevent an infinite loop.

    return (
        <>
            {!!ceos.length ? (
                <ul>
                    {ceos.map((ceo, index) => {
                        return <li key={index}>{ceo.name}</li>
                    })}
                </ul>
            ) : (
                <p>Loading CEOs...</p>
            )}
        </>
    );
};

export default CeoList;