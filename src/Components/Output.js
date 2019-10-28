import React from 'react';

function Output(props) {
    return (
        <>
            <br/>
            <b>Output:</b>
            <br/>
            <pre>
                {JSON.stringify(props.search, null, 4)}
            </pre>
        </>
    );
}

export default Output;
