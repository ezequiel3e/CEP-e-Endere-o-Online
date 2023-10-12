import { useState } from "react";
import api from "./serve/api";

function Pratico() {

    const [input, setInput] = useState('')
    const [cep, setCep] = useState({})


    async function handleSearch() {

        if (input === '') {
            alert("preencha algum cep!")
            return

        }
        try {
            const response = await api.get(`${input}/json`);
            console.log(response)
            setCep(response.date)
            setInput("")
            preventDefault()

        } catch {
            alert("Ops erro ao buscar")
            setInput("")
        }

    }


    return (
        <div className="container">

            <h1 className="title">Buscar Cep</h1>

            <div className="containerInput">

                <input type="text" placeholder="Digite seu cep..."

                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button className="buttonSearch" onClick={handleSearch}>

                    Click
                </button>
            </div>


            {Object.keys(cep).length > 0 && (
                <main className="main">
                    <h2>CEP: {cep.cep}</h2>

                    <span>{cep.logradouro}</span>

                    <span>Complemento:{cep.complemento}</span>


                    <span>{cep.bairro}</span>

                    <span>{cep.localidade} - {cep.uf}</span>
                </main>

            )}


        </div>


    )

}


export default Pratico;