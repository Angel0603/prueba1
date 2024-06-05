// model/Carro.model.js
const mongoose = require('mongoose');

const CarritoSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    productoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Producto',
      required: true
    },
    cantidad: {
      type: Number,
      required: true,
      min: 1,
      default: 1
    }
  }],
  total: {
    type: Number,
    required: true,
    default: 0
  }
});

const Carrito = mongoose.model('Carrito', CarritoSchema);
module.exports = Carrito;
