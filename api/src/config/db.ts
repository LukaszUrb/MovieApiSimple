import { ConnectionOptions } from "mongoose";

export const {
    MONGO_URI = "mongodb://127.0.0.1:27017/MovieApiLocalDB"
} = process.env;

export const MONGO_OPTIONS: ConnectionOptions = {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}; 