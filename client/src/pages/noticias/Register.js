import { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import ListaNoticias from './List';

const Register = () => {
    const [values, setValues] = useState();
    const [listNoticias, setListNoticias] = useState();

    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }));
    }

    const handleClickButton = () => {
        Axios.post("http://localhost:3000/regNoticia", {
            titulo: values.titulo,
            descricao: values.descricao,
        }).then(() => {
            setListNoticias([
                ...listNoticias,
                {
                    titulo: values.titulo,
                    descricao: values.descricao,
                },
            ]);
        });
    };

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
            <ListaNoticias></ListaNoticias>
            <Link to="/">retornar a página inicial</Link>
        </div> 
        
    )
}

export default Register