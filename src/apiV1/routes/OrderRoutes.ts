import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const Order: Router = Router();
const controller = new OrderController();

// Retrieve all Orders
Order.get('/', controller.findAll);

// Retrieve a Specific Order
Order.get('/:id', controller.findOne);

// Create a Specific Order
Order.post('/add', controller.create);

// Update an Order with Id
Order.put('/update/:id', controller.update);

// Delete an Order with Id
Order.delete('/delete/:id', controller.delete);


export default Order;
