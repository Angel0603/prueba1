import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors"


import authRoutes from './routes/auth.routes.js';
import taskRoutes from "./routes/task.routes.js";
import categoriaRoutes from "./routes/categoria.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import empleadosRoutes from './routes/empleados.routes.js'

const app = express();

const deviceTokenRoutes = require('./routes/deviceToken.routes');
const notificationRoutes = require('./routes/notification.routes');
const carritoRoutes = require('./routes/carrito.routes'); 

app.get("/", (req, res) => {
    res.send("<h1>Hola Mundo desde Express!</h1>");
});


app.set('trust proxy', true);

app.use(cors({
  origin: ['https://www.robopits.online', 'https://robopits.online'],
  credentials: true
}));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())

app.use("/api",authRoutes);
app.use("/api", empleadosRoutes)
app.use("/api",taskRoutes);
app.use("/api", categoriaRoutes);
app.use("/api", productoRoutes);

//APIs para notificaciones del Wear OS
app.use('/api', notificationRoutes);
app.use('/api', deviceTokenRoutes);

//Carrito
app.use('/api/carrito', carritoRoutes); // Usar las rutas del carrito bajo el prefijo /api/carrito

export default app;
