import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";

export default function Home() {
    const [message, setMessage] = useState("Loading...");
    const [monkey, setMonkey] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/home")
            .then((response) => response.json())
            .then((data) => {
                setMessage(data.message);
                setMonkey(data.monkey);
            });
    }, []);

    return (
        <main>
            <div>{message}</div>
            <div>
                {monkey.map((monkey, index) => (
                    <div key={index}>{monkey}</div>
                ))}
            </div>
            <h1>TUTUTUTUTUTU</h1>;
        </main>
    );
}
