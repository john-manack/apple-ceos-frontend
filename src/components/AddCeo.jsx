import { useState } from 'react';

const AddCeo = ({handleReload}) => {
    const [ceoName, setCeoName] = useState('');
    const [ceoYear, setCeoYear] = useState('');

    const _handleNameChange = e => {
        setCeoName(e.target.value);
    };

    const _handleYearChange = e => {
        setCeoYear(e.target.value);
    };

    const _handleSubmit = async (e) => {
        e.preventDefault();
        const submitResponse = await fetch('http://127.0.0.1:3000/ceos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // below are what the API is expecting to receive ('ceo_name' and 'ceo_year' match the post route exactly); ceoName and ceoYear are pulled from the component
            body: JSON.stringify({
                ceo_name: ceoName,
                ceo_year: ceoYear,
            }),
        }).then((response) => response); 
        console.log('the submit response is ', submitResponse);
        setCeoName('');
        setCeoYear('');

        if (submitResponse.status === 200) {
            handleReload(true);
        }
    };
    
    return (
        <>
            <form onSubmit={_handleSubmit}>
                <label>CEO Name
                    <input type="text" name="ceo_name" value={ceoName} onChange={_handleNameChange}></input>
                </label>
                <label>CEO Year
                    <input type="text" name="ceo_year" value={ceoYear} onChange={_handleYearChange}></input>
                </label>
                <button type="submit">Add CEO</button>
            </form>
        </>
    )
}

export default AddCeo;