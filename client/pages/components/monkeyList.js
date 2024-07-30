import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cards from "./cards";
import ToggleButton from "./toggleButton";

const MonkeyList = () => {
    const [monkeys, setMonkeys] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMonkeys = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/monkeys/");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setMonkeys(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMonkeys();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="flex flex-wrap justify-evenly xs:justify-center gap-8 xs:gap-3">
            {monkeys.map((monkey) => (
                <Link href={`/monkey/${monkey._id}`}>
                    <Cards key={monkey._id} title={monkey.title} description={monkey.description} imageUrl={monkey.imageUrl} />
                </Link>
            ))}
        </div>
    );
};

export default MonkeyList;

//! Il faut modifier le lien ici, c'est à cause de lui que toute notre cards ici deviennent un lien. Donc impossible de cliquer sur le toggle button
//! Il faut que la cards soit le wrapper et qu'uniquement la description,l'image et le titre soient dans un "a" ou un link...
