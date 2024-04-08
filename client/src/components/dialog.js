import React, { useState } from "react";
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,    
} from "@material-ui/core";

import Axios from "axios";

import '../styles/App.css';

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({    
    id: props.id,
    titulo: props.titulo,
    descricao: props.descricao,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditNoticia = () => {
    Axios.put("http://localhost:3001/editNoticia", {
      id: editValues.id,
      titulo: editValues.titulo,
      descricao: editValues.descricao,      
    }).then(() => {
      props.setListNoticias(
        props.listNoticias.map((value) => {
          return value.id === editValues.id
            ? {
                id: editValues.id,
                titulo: editValues.titulo,
                descricao: editValues.descricao,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteNoticia = () => {
    Axios.delete(`http://localhost:3001/deleteNoticia/${editValues.id}`).then(() => {
      props.setListNoticias(
        props.listNoticias.filter((value) => {
          return value.id !== editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="titulo"
            label="Título"
            defaultValue={props.titulo}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="descricao"
            label="Descrição"
            defaultValue={props.descricao}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />          
        </DialogContent>        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>           
          <Button onClick={() => handleDeleteNoticia(props.id)} color="primary">
            Excluir
          </Button>
          <Button onClick={() => handleEditNoticia(props.id)} color="primary">
            Salvar
          </Button>
        </DialogActions> 
      </Dialog>
    </>    
  );
}