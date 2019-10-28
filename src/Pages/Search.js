import React, { useState } from 'react';
import Form from '../Components/Form';
import Output from '../Components/Output';

function Search() {

    const [search, setSearch] = useState({});
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Form setSearch={setSearch} loading={loading} setLoading={setLoading} />
            <br/>
            <Output search={search} />
        </>
    );
}

export default Search;
