// pages/monkey/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MonkeyDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [monkey, setMonkey] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/api/monkeys/${id}`)
                .then(response => response.json())
                .then(data => setMonkey(data));
        }
    }, [id]);

    if (!monkey) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{monkey.title}</h1>
            <img src={monkey.imageUrl} alt={monkey.title} />
            <p>{monkey.description}</p>
        </div>
    );
}