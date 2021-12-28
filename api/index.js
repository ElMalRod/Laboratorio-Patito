const express = require('express');
const { sendFile } = require('express/lib/response');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const path = require('path');
const bcryptjs = require('bcryptjs');
const port = process.env.PORT || 5000

const session = require('express-session');

const mysqlhost = process.env.MYSQLHOST || "mysql_server";
const mysqluser = process.env.MYSQLUSER || "PatitoDB";
const mysqlpass = process.env.MYSQLPASS || "Clinic@PatitoDB1";
const mysqldb = process.env.MYSQLDB || "patitos_db";

app.use(session({
    secret: 'some-salt',
    resave: true,
    saveUninitialized: true
}));

//paquete
const mysql = require('mysql2');
const { NULL } = require('mysql/lib/protocol/constants/types');
//conexión
const con = mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass,
    database: mysqldb
});
//prueba
con.connect(function (err) {
    if (err) throw err;
    console.log("Conectdo correctamente a la base de datos :D");
});


app.use(express.static('views'));
app.use('/css', express.static(__dirname + 'views/css'));
app.use('/js', express.static(__dirname + 'views/js'));




app.get('/', (req, res) => {

    console.log("Reubicados en: " + path.join(__dirname, '../views/index.html'));
    res.status(201).sendFile(path.join(__dirname, '../views/index.html'));

});

app.get('/formulario', (req, res) => {

    console.log("Reubicados en: " + path.join(__dirname, '../views/Formulario.html'));
    res.status(201).sendFile(path.join(__dirname, '../views/Formulario.html'));

});

app.get('/paciente', (req, res) => {

    console.log("Reubicados en: " + path.join(__dirname, '../views/paciente.html'));
    res.status(201).sendFile(path.join(__dirname, '../views/paciente.html'));

});
app.post('/paciente', async (req, res) => {

    const cui = req.body.CUI;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const sexo = req.body.sexo;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const telefono = req.body.telefono;
    const tipo_sangre = req.body.tipo_sangre;
    con.query('INSERT INTO Paciente (CUI, nombre, apellido, sexo, fecha_nacimiento, telefono, tipo_sangre) VALUES (?,?,?,?,?,?,?)', [cui, nombre, apellido, sexo, fecha_nacimiento, telefono, tipo_sangre], async (error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Se ha ingresado el paciente");
            res.render('index');
        }
    })
});

app.get('/examen', (req, res) => {

    console.log("Reubicados en: " + path.join(__dirname, '../views/examen.html'));
    res.status(201).sendFile(path.join(__dirname, '../views/examen.html'));

});

app.post('/examen', async (req, res) => {

    const nombre = req.body.nombre;
    const costo = req.body.costo;
    con.query('INSERT INTO Tipo_Examen (nombre,costo) VALUES (?,?)', [nombre, costo], async (error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Se ha ingresado el nuevo examen");
            res.render('index');
        }
    })
});

app.get('/registro', (req, res) => {

    console.log("Reubicados en: " + path.join(__dirname, '../views/registro.html'));
    res.status(201).sendFile(path.join(__dirname, '../views/registro.html'));

});
app.post('/registro', async (req, res) => {

    const dpi = req.body.dpi;
    const codigo = req.body.codigo;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    const password = req.body.password;
    con.query('INSERT INTO Trabajador (codigo, nombre, apellido, dpi, telefono, password, Tipo_Trabajador) VALUES (?,?,?,?,?,?,?)', [NULL, nombre, apellido, dpi, telefono, password, codigo], async (error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log("Se ha ingresado el trabajador");
            res.render('index');
        }
    })
});

app.get('/login', (req, res) => {

    console.log("Reubicados en: " + path.join(__dirname, '../views/Login.html'));
    res.status(201).sendFile(path.join(__dirname, '../views/Login.html'));

});


app.listen(port, () => console.log('> Server is up and running on port : ' + port));