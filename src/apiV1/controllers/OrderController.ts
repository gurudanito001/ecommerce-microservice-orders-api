import { Request, Response } from 'express';
import OrderServices from '../services/OrderServices';
import Helpers from '../../helpers/messageHelpers';

const MessageHelpers = new Helpers();

export default class OrderController {

    public findAll = async (req: Request, res: Response): Promise<any> => {
        try {
            const orders = await OrderServices.listOrders();
            if (!orders) {
                return res.status(404).send(
                    MessageHelpers.errorResponse("Orders Not Found")
                );
            }

            res.status(200).send(
                MessageHelpers.successResponse("Orders request was successful", orders)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };

    public findOne = async (req: Request, res: Response): Promise<any> => {
        try {
            const order = await OrderServices.findOneOrder(req.params.id);
            if (!order) {
                return res.status(404).send(
                    MessageHelpers.errorResponse("Order Not Found")
                );
            }

            res.status(200).send(
                MessageHelpers.successResponse("Order request was successful", order)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };

    public create = async (req: Request, res: Response): Promise<any> => {
        const {customerId, productId, orderRequestDate, orderDeliveryDate } = req.body ;
        try {
            const orderData = { customerId, productId, orderRequestDate, orderDeliveryDate }
            console.log(orderData)
            const order = await OrderServices.createOrder(orderData);
            if (!order) {
                console.log(order)
                return res.status(400).send(
                    MessageHelpers.errorResponse("Error Creating Order")
                );
            }

            res.status(200).send(
                MessageHelpers.successResponse("Order Created Successfully", order)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };

    public update = async (req: Request, res: Response): Promise<any> => {
        const { customerId, productId, orderRequestDate, orderDeliveryDate } = req.body;
        try {
            const orderData = { customerId, productId, orderRequestDate, orderDeliveryDate }
            const updatedOrder = await OrderServices.updateOrder( req.params.id, orderData)
                
            if (!updatedOrder) {
                return res.status(404).send(
                    MessageHelpers.errorResponse("Order Not Found")
                );
            }
            res.status(200).send(
                MessageHelpers.successResponse("Order Updated Successfully", updatedOrder)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };

    public delete = async (req: Request, res: Response): Promise<any> => {
        try {
            const order = await OrderServices.deleteOrder(req.params.id);

            if (!order) {
                return res.status(404).send(
                    MessageHelpers.errorResponse("Order Not Found")
                );
            }
            res.status(200).send(
                MessageHelpers.successResponse("Order deleted Successfull", order)
            );
        } catch (err) {
            res.status(500).send(
                MessageHelpers.errorResponse(err.toString())
            );
        }
    };
}



