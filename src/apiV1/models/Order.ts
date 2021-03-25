import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    customerId: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true,
    },
    orderRequestDate: {
      type: Date,
       required: true
    },
    orderDeliveryDate:{
        type: Date,
        required: true
    }
  },
  
  {
    timestamps: true,
    useNestedStrict: true
  }
);

export default mongoose.model("Order", OrderSchema);
