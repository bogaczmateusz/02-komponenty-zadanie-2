import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [ uuid, setUuid ] = useState('');

    useEffect(() => {
        setUuid(uuidv4());
    }, []);

    const generate = () => {
        setUuid(uuidv4());
    }

    return (
        <div style={{padding: 50, textAlign: 'center'}}>
            <p>Your UUID key is {uuid}</p>
            <button onClick={generate}>Generate</button>
        </div>
    );
}

export default App;
