import React, { useState } from 'react';
import ConditionalComponent from './components/ConditionalComponent';
import OtherComponent from './components/OtherComponent';

function App() {
    const [showConditional, setShowConditional] = useState(true);

    return (
        <div className="app">
            <h1>Thazar React Conditional Rendering</h1>
            <button onClick={() => setShowConditional(!showConditional)}>
                Toggle Component
            </button>
            {showConditional ? <ConditionalComponent /> : <OtherComponent />}
        </div>
    );
}

export default App;
