// controllers/Carrito.controller.js
const Carrito = require('../models/Carro.model');

exports.agregarAlCarrito = async (req, res) => {
  const { userId, productoId, cantidad } = req.body;

  try {
    let carrito = await Carrito.findOne({ userId });

    if (!carrito) {
      carrito = new Carrito({ userId, items: [], total: 0 });
    }

    const index = carrito.items.findIndex(item => item.productoId.toString() === productoId);

    if (index > -1) {
      carrito.items[index].cantidad += cantidad;
    } else {
      carrito.items.push({ productoId, cantidad });
    }

    carrito.total += cantidad * (await Producto.findById(productoId)).precio;
    await carrito.save();

    res.json(carrito);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar el producto al carrito', error });
  }
};
