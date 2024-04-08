import { useState, useEffect } from "react";
import Axios from "axios";
import NoticiasCard from "../../components/NoticiasCard";

import '../../styles/App.css';

const List = () => {

    const [listNoticias, setListNoticias] = useState();

    useEffect(() => {
        Axios.get("http://localhost:3333/getNoticias").then((response) => {            
            setListNoticias(response.data);
        })
    }, []);

    return (
        <div className="noticias-card">
            {typeof listNoticias !== "undefined" && listNoticias.map((item) => {
                return <NoticiasCard
                            key={item.id} 
                            id={item.id}
                            titulo={item.titulo}
                            descricao={item.descricao}
                            listNoticias={listNoticias}
                            setListNoticias={setListNoticias}
                        />
            })}
        </div>
    )
}

export default List