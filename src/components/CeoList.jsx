import { useEffect, useState } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import CeoDetails from './CeoDetails';

const CeoList = ({reload}) => {
    const [ceos, setCeos] = useState([]);
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const ceoData = await fetch('http://127.0.0.1:3000/ceos').then(response => response.json());
            setCeos(ceoData);
        })();
    },[reload]); // include the double brackets as the second 'dependency' argument in useEffect to prevent an infinite loop.

    return (
        <>
            {!!ceos.length ? (
                <>
                    <Route exact path='/'>
                        <ul>
                            {ceos.map((ceo, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/ceo/${ceo.slug}`}>{ceo.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </Route>
                    <Route path='/ceo/:ceo_slug'>
                        <CeoDetails ceos={ceos}/>
                        <button type='button' onClick={() => history.goBack()}>Go Back</button>
                    </Route>
                </>
            ) : (
                <p>Loading CEOs...</p>
            )}
        </>
    );
};

export default CeoList;