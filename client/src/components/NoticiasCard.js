import { useState } from 'react';
import '../styles/App.css';
import FormDialog from './dialog';

const NoticiasCard = (props) => {
    const [open, setOpen] = useState(false);

    const handleClickCard = () => {
        setOpen(true);
    }

    return (
        <>
            <FormDialog 
                open={open}
                setOpen={setOpen}
                id={props.id}
                titulo={props.titulo}
                descricao={props.descricao}
                listNoticias={props.listNoticias}
                setListNoticias={props.setListNoticias}
            />
            <div className="listcontainer container background" onClick={() => handleClickCard()}>
                <h3 className='background'>{props.titulo}</h3>
                <p className='background'>{props.descricao}</p>
            </div>
        </>
    )
}

export default NoticiasCard