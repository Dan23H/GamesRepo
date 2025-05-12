'use client'
import { useEffect, useState } from 'react'
import api from './utils/api'
import GameCard from './components/GameCard'
import Link from 'next/link'


export default function Home() {
  const [games, setGames] = useState<Array<{
    _id: string
    title: string
    description: string
    image: string
    link: string
    owner: { username: string }
  }>>([])
  

  useEffect(() => {
    api.get('/posts').then(res => setGames(res.data))
  }, [])

  return (
    <div>
      <h1>Catálogo de Juegos</h1>
      {games.map(game => <GameCard key={game._id} game={game} />)}
      <Link href="/new">Subir un juego</Link>
    </div>
  )
}
