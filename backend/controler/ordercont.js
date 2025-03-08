const Order = require("../model/Order");

// Save order after payment
exports.saveOrder = async (req, res) => {
    try {
        let { uid, rid, items, totalAmount } = req.body;
        let newOrder = new Order({
            uid,
            rid,
            items,
            totalAmount,
            paymentStatus: "Completed"
        });

        await newOrder.save();
        res.json({ success: true, message: "Order saved successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error saving order", error });
    }
};

// Get orders for a restaurant owner
exports.getOrders = async (req, res) => {
    try {
        let { rid } = req.query;
        let orders = await Order.find({ rid });
        res.json({ success: true, orders });
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching orders", error });
    }
};
