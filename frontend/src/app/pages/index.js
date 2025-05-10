import { useEffect, useState } from 'react';
import GameCard from '../components/GameCard';
import axios from 'axios';

export default function Home() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/posts')
      .then(res => setGames(res.data));
  }, []);

  return (
    <div>
      <h1>Catálogo de Juegos</h1>
      {games.map(game => <GameCard key={game._id} game={game} />)}
    </div>
  );
}
