// pages/monkey/[id].js
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ThreeScene from "../threeScene";
import Link from "next/link";

export default function MonkeyDetail() {
    const router = useRouter();
    const { id } = router.query; //Get the id of the monkey from the URL
    const [monkey, setMonkey] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3001/api/monkeys/${id}`)
                .then((response) => response.json())
                .then((data) => setMonkey(data));
        }
    }, [id]);

    const handleDelete = async () => {
        //Add a confirmation message before deleting
        const confirmed = window.confirm("ARE YOU SURE ABOUT THAT ?");
        if (!confirmed) {
            return; // If not, stop the function
        }

        const res = await fetch(`/api/monkeys/${id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            router.push("/");
        } else {
            alert("Failed to delete the Monkey bruh");
        }
    };

    if (!monkey) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <ThreeScene />
        <Header />
            <div className="flex flex-col items-center text-center mx-auto justify-between p-5 h-96 w-72 box-border border-2 rounded-md shadow-xl border-gray-400 bg-gray-100 overflow-hidden mt-10">
                <img src={monkey.imageUrl} alt={monkey.title} className="rounded-md h-40 w-40 m-5 object-cover" />
                <h1>{monkey.title}</h1>
                <p>{monkey.description}</p>
            </div>
            <div className="flex justify-center gap-5 mt-10">
                <Link href={`/monkey/edit/${id}`} className="border-2 rounded-md shadow-xl border-blue-600 bg-blue-300 p-2">
                    Modify Gif
                </Link>
                <button onClick={handleDelete} className="border-2 rounded-md shadow-xl border-red-600 bg-red-300 p-2">
                    Delete Gif
                </button>
            </div>
            <p className="font-extrabold text-2xl text-center mt-12 text-red-700">
                LES DESCRIPTIONS C'EST BIEN MAIS FAUT UNE LIMITE DE CARRACTERES POUR LES TITRES ET LA DESC AUSSI PUREE DE POMME DE TERRE
                <img src="https://c.tenor.com/v2K_Ff6JYzkAAAAd/tenor.gif" alt="" className="h-80 w-80 mx-auto" />
            </p>
        <Footer />
        </>
    );
}
