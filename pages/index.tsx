import { useState } from 'react';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Count />
    </div>
  )
}

function Count() {
  const [Count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {Count} times</p>
      <button onClick={() => setCount(Count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Home;