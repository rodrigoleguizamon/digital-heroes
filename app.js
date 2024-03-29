// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();
//const router = express.router

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

// Leyendo y parseando (en array) el contenido de heroes.json

const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));

const heroes = require('/heroes.json')

//crear variable home

//const home = require('./data/home.js')
//app.use('/',home)

// Ruta Raíz / ➝ Home
app.get('/', function(req, res){
	res.send(home)
});

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.get('/heroes', function(req, res){
	res.send(heroes);
});

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
app.get('/heroes/:id', function(req,res){
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = req.params.id;
	// Si se encuentra al héroe se envía el nombre y su profesión
	
	let encontroHeroe = heroes.find(function(elem){
		return elem.id == heroe
	})
	if(encontroHeroe){
		res.end('Hola, mi nombre es" ${encontroHeroe.nombre} y soy + profesion')

	}// Si NO se encuentra se envía el mensaje de no encontrado
	else{
		res.end("No se encontro el Heroe")
	}
});

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
app.get('/heroes/:id/bio', function(req,res){
	// Acá lo primero será encontrar al héroe que corresponda
	let heroe = req.params.id;

	// Si NO se encuentra al héroe se envía un mensaje

	// Si se encuentra al héroe:
		// Se pregunta si vino el parámetro Y el valor esperado y se envía la información
		// Si nó vino el parámetro se envía el mensaje de error
	});

// Ruta Créditos
// ¿?

// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
	res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});