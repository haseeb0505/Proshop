// import Mongoose from "Mongoose";
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import users from "./data/users.js";
import products from "./data/products.js";
import User from './models/userModel.js';
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDb from './config/db.js'

dotenv.config
connectDb()


const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany()
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id
        const sampleProduct = products.map(product => {
            return {
                ...product, user: adminUser
            }

        })
        await Product.insertMany(sampleProduct);
        console.log("Data imported")
        process.exit()
    } catch (error) {
        console.log("ERROR", error)
        process.exit(1)
    }


}
const dataDestroyed = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany()

        console.log("Data destroyed")
        process.exit()
    } catch (error) {
        console.log("ERROR", error)
        process.exit(1)
    }


}
if (process.argv[2] === '-d') {
    dataDestroyed();


} else {
    importData();
}