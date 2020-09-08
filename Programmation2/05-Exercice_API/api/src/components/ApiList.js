import React, { useState, useEffect } from "react";

function ApiList() {
    const [donnesRecues, setDonneeRecues] = useState([]);

    useEffect(() => {
        getCharacter();
    });

    async function getCharacter() {
        try {
            const response = await fetch("https://rick-and-morty-graphql.p.rapidapi.com/");
            const reponseApi = await response.json();
            setDonneeRecues(reponseApi);
            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ul>
            {donnesRecues && donnesRecues.map((item, i) => (
                <li key={i}>{item.name}</li>
            ))}
        </ul>

    );
}

export default ApiList;