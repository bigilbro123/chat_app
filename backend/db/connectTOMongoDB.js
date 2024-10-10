import mongoos from 'mongoose'

const connectToMongoDB = async () => {

    try {
        await mongoos.connect(process.env.MONGO_DB_URL)
        console.log('connected to mongo DB');

    } catch (error) {
        console.log('error', error);

    }
}

export default connectToMongoDB