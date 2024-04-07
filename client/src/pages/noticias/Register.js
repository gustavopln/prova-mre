import { useState } from 'react'
import { Link } from 'react-router-dom';
//import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButton = () => {
        console.log(values)
    }

    return (        
        <div className="register-container background">
            <h1 className="register-title background">Cadastro de Notícias</h1>
            <form className="background">
                <input 
                    type="text"
                    name="titulo"
                    id='titulo'
                    placeholder="Título da Notícia"
                    className="register-input background"
                    onChange={handleChangeValues}
                />
                <textarea           
                    name="descricao"
                    rows={3}
                    cols={40}
                    id='descricao'
                    placeholder="Descrição da Notícia"
                    className="register-input background"
                    onChange={handleChangeValues}
                />
                <button 
                    className="register-button"
                    onClick={() => {
                    handleClickButton()
                }}>Cadastrar</button>
            </form>
            <Link to="/">retornar a página inicial</Link>
        </div>
    )
}

export default Register