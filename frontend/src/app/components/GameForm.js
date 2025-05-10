import { useState } from 'react';
import axios from 'axios';

export default function GameForm() {
  const [form, setForm] = useState({
    title: '', description: '', image: '', link: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/posts', {
      ...form,
      ownerId: '6634f90f0fc1d541ac9a1f15', // ID ficticio de usuario
      role: 'user'
    });
    alert('Publicado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Título" onChange={handleChange} required />
      <textarea name="description" placeholder="Descripción" onChange={handleChange} required />
      <input name="image" placeholder="URL Imagen" onChange={handleChange} required />
      <input name="link" placeholder="Link tienda" onChange={handleChange} required />
      <button type="submit">Publicar</button>
    </form>
  );
}
