import React from 'react';
import InputMask from 'react-input-mask';
import useSearch from '../Hooks/useSearch';


function Form({loading, setLoading, setSearch}) {
    const handleInputChange = useSearch(setLoading, setSearch);
    return (
        <>
            <label>
                ID (Tem só 34 IDs cadastrados...)
                <br/>
                <InputMask mask="999" maskChar={null} onChange={(e) => handleInputChange(e.target.value)}/>
                {(loading) ? <b>Carregando</b> : ''}
            </label>
        </>
    );
}

export default Form;
