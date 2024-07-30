import React, { useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = { email, password };

        fetch("http://localhost:3001/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((err) => {
                        throw new Error(err.message);
                    });
                }
                return response.json();
            })
            .then((data) => {
                setMessage(data.message);
                setError(null);
                //Stocker le token JWT dans le localStorage ou le state
                localStorage.setItem("token", data.token);
            })
            .catch((error) => {
                setError(error.toString());
                setMessage("");
            });
    };
    return (
        <div className="flex flex-col items-center bg-[#276B4D] mx-96 mt-12 mb-24 p-8 gap-5 text-white font-poppins">
            <h1>Se connecter</h1>
            {message && <p style={{ color: "green" }}>{message}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label>Email:</label>
                    <input className="text-blue-500" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label>Mot de passe:</label>
                    <input
                        className="text-blue-500"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="p-2 bg-white rounded-md my-5 text-[#276B4D]">
                    LOGIN
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
