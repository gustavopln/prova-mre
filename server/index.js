const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
    host: "mysql",
    user: "root",
    password: "yourpassword",
    database: "prova",
    port: 3307,
});

app.use(cors());
app.use(express.json()); /*Transformamos em json para poder visualizar no frontend*/

/**************************************/
/*End Point para cadastrar as noticias*/
/**************************************/
app.post("/regNoticia", (req, res) => {
    const { titulo, descricao } = req.body;

    let sql = "INSERT INTO tb_noticia (titulo, descricao) VALUES ( ?, ? )";

    db.query(sql, [titulo, descricao], (err, result) =>{
        if(err) console.log(err)
        else res.send(result);
    })
});

/***********************************/
/*End Point para listar as noticias*/
/***********************************/
app.get("/getNoticias", (req, res) => {
    let sql = "SELECT * FROM tb_noticia ORDER BY id";

    db.query(sql, (err, result) =>{
        if(err) console.log(err)
        else res.send(result);
    })
});

/***********************************/
/*End Point para editar as noticias*/
/***********************************/
app.put("/editNoticia", (req, res) => {
    const { id, titulo, descricao} = req.body;

    let sql = "UPDATE tb_noticia SET titulo = ?, descricao = ? WHERE id = ?";

    db.query(sql, [titulo, descricao, id], (err, result) =>{
        if(err) console.log(err)
        else res.send(result);
    })
})

/************************************/
/*End Point para excluir as noticias*/
/************************************/
app.delete("/deleteNoticia/:id", (req, res) => {
    const { id } = req.params;
    console.log('Id: ' + id)
    let sql = "DELETE FROM tb_noticia WHERE id = ?";

    db.query(sql, [id], (err, result) =>{
        if(err) console.log(err)
        else res.send(result);
    })
})


app.listen(3001, () => {
    console.log("Rodando servidor");
});