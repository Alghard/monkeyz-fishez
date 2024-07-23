// pages/monkey/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function MonkeyDetail() {
    const router = useRouter();
    const { id } = router.query; //Get the id of the monkey from the URL
    const [monkey, setMonkey] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/api/monkeys/${id}`)
                .then(response => response.json())
                .then(data => setMonkey(data));
        }
    }, [id]);

    const handleModify = async () => {
        const res = await fetch(`/api/monkeys/${id}`, {
            method: 'PUT',
        })
    }

    const handleDelete = async () => {

        //Add a confirmation message before deleting
        const confirmed = window.confirm("ARE YOU SURE ABOUT THAT ?")
        if (!confirmed) {
            return; // If not, stop the function
        }

        const res = await fetch(`/api/monkeys/${id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            router.push('/');
        } else {
            alert('Failed to delete the Monkey bruh')
        }
    };

    if (!monkey) {
        return <div>Loading...</div>;
    };

    return (
        <>
        <div>
            <h1>{monkey.title}</h1>
            <img src={monkey.imageUrl} alt={monkey.title} />
            <p>{monkey.description}</p>
        </div>
        <p>I NEED 2 BUTTONS, ONE TO MODIFY THE MONKEY, AND THE OTHER TO DELETE IT</p>
        <div>
            <button onClick={handleDelete}>CECI EST UN BOUTON POUR DELETE LE MONKEY</button>
        </div>
        </>
    );
}