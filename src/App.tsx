import { useEffect, useState } from 'react';

export function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        (async () => {
            try {
                const response = await window.executeSQL('SELECT * FROM grupo');
                console.log('SQL Response:', response);
                alert(response.data[0].Descricao);
            } catch (error) {
                console.log('Error executing SQL:', error);
            }
        })();
    }, []);

    return <div>
        Hello, React! ⚛️
        <button onClick={() => setCounter(counter + 1)}>Click counter {counter}</button>
    </div>;
}
