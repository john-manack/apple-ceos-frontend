import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CeoDetails = () => {
    const { ceo_slug } = useParams();
    const [ceo, setCeo] = useState([]);
    
    useEffect(() => {
        (async () => {
            const ceoData = await fetch(`http://127.0.0.1:3000/ceos/${ceo_slug}`).then(response => response.json());
            setCeo(ceoData);
        })();
    },[ceo_slug]);

    return (
        <p>{ceo.name} was CEO of Apple in {ceo.year}.</p>
    )
}

export default CeoDetails;