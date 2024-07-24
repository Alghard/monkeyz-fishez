// pages/monkey/edit/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function EditMonkey() {
  const router = useRouter();
  const { id } = router.query;
  const [monkey, setMonkey] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/monkeys/${id}`)
        .then(response => response.json())
        .then(data => {
          setMonkey(data);
          setFormData({
            title: data.title,
            description: data.description,
            imageUrl: data.imageUrl
          });
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/monkeys/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (response.ok) {
      router.push(`/monkey/${id}`);
    } else {
      alert('Failed to update the monkey');
    }
  };

  if (!monkey) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Modifier Monkey</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
