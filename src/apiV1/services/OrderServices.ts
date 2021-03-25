import Order from '../models/Order';

function OrderServices() {
    return {
        listOrders: () => Order.find(),
        findOneOrder: (id) => Order.findById( id ),
        createOrder: data => new Order(data).save(),
        updateOrder: (orderId, data) => Order.findByIdAndUpdate(orderId, data, {new: true}),
        deleteOrder: id => Order.findByIdAndRemove(id)
    };
}

export default OrderServices()