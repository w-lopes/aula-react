import React from 'react';
import InputMask from 'react-input-mask';
import handleInputChange from '../Hooks/useSearch';

function Form(props) {
    return (
        <>
            <label>
                ID (Tem só 34 IDs cadastrados...)
                <br/>
                <InputMask mask="999" maskChar={null} onChange={(e) => handleInputChange(e, props)}/>
                {(props.loading) ? <b>Carregando</b> : ''}
            </label>
        </>
    );
}

export default Form;
