import { useEffect, useState } from 'react'
import './App.css'

const Card = ({ title }) => {
  const [count, setCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} currently ${hasLiked ? "unliked" : "liked"}!`);
  })

  return (
    <div className='card'>
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "Unlike 💔" : "Like ❤️"}
      </button>
    </div>
  )
}

const App = () => {

  return (
    <div className='card-container'>
      <Card title={"Star Wars"} />
      <Card title={"Squid Game"} />
      <Card title={"Harry Potter"} />
      <Card title={"Stranger Things"} />
    </div>
  )
}

export default App
