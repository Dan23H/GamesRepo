export default function GameCard({ game }) {
    return (
      <div>
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <img src={game.image} width="300" />
        <p><a href={game.link} target="_blank">Comprar</a></p>
        <small>Publicado por: {game.owner?.username}</small>
      </div>
    );
  }
  