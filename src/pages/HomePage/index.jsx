import './style.css';
import { useState, useEffect } from "react";
import { Joke } from '../../components/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch("http://localhost:4000/api/jokes");
      const data = await response.json();
      setJokes(data.result);
    };
    fetchJokes();
  }, []);

  if (jokes === null) {
    return <div>Načítám...</div>;
  }

  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke key={joke.name} userAvatar={joke.avatar} userName={joke.name} text={joke.text} likes={joke.likes} dislikes={joke.dislikes}/>
      ))}
    </div>
  );
};
