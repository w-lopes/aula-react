import React from 'react';

function Output({search}) {
    return (
        <>
            <br/>
            <b>Output:</b>
            <br/>
            <pre>
                {JSON.stringify(search, null, 4)}
            </pre>
        </>
    );
}

export default Output;
