import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cards from "./cards";

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
        <div className="flex flex-wrap justify-evenly gap-5">
            {monkeys.map((monkey) => (
                <Link href={`/monkey/${monkey._id}`}><Cards key={monkey._id} title={monkey.title} description={monkey.description} imageUrl={monkey.imageUrl} /></Link>
            ))}
        </div>
    );
};

export default MonkeyList;
