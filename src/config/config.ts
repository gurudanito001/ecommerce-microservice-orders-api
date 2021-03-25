import * as dotenv from 'dotenv';
dotenv.config();

export default {
  APP: process.env.APP || 'development',
  ATLAS_URI: 'mongodb+srv://nwokocha95:nwokocha95@cluster0.fbrwv.mongodb.net/EcommerceApplicationOrders?retryWrites=true&w=majority',
  PORT: process.env.PORT || '8080',
};
