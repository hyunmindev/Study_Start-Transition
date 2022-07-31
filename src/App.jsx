import { useState, useTransition } from 'react';

function App() {
  const [state, setState] = useState('');
  const [isPending, startTransition] = useTransition();

  const updateState = ({ target: { value } }) => {
    startTransition(() => {
      setState(value);
    });
  };

  return (
    <>
      <input onInput={updateState} />
      {isPending && <div>Loading...</div>}
      {!isPending && [...Array(10_000)].map((el, index) => (
        <div key={index}>
          {state}
        </div>
      ))}
    </>
  );
}

export default App;
