// routes/carrito.routes.js
const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/Carrito.controller');

// Ruta para agregar un producto al carrito
router.post('/agregar', carritoController.agregarAlCarrito);

// Ruta para obtener los productos en el carrito de un usuario
router.get('/obtener/:userId', carritoController.obtenerCarrito);

// Ruta para eliminar un producto del carrito
router.delete('/eliminar/:userId/:productoId', carritoController.eliminarDelCarrito);

// Ruta para actualizar la cantidad de un producto en el carrito
router.put('/actualizar/:userId', carritoController.actualizarCarrito);

module.exports = router;
