import mongoose from "mongoose";

const connectDb = async () => {

    try {
        var con = mongoose.connect("mongodb://localhost:27017/proshop", {
            useUnifiedTopology: true,
            useNewUrlParser: true,

        })
        console.log(`mongo connected: ${con.connection}`)
    } catch (error) {
        console.log(`ERROR:${error.message}`)
        process.exit(1)
    }

}



export default connectDb