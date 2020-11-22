require('dotenv').config()
const amqp = require('amqplib')
const { MongoClient } = require('mongodb')

const { RABBITMQ_URL, MONGODB_URL } = process.env

const connectToMongoDB = async () => {
    const client = await MongoClient.connect(MONGODB_URL, { useUnifiedTopology: true })
    return client
}

const consumeQueue = async mongoDatabase => {
    const connection = await amqp.connect(RABBITMQ_URL)
    const channel = await connection.createChannel()
    const queue = 'names'

    await connection.createChannel()
    await channel.assertQueue(queue, { durable: true })

    await channel.consume(queue, async msg => {
        const name =  msg.content.toString()
        await saveNameOnDatabase(mongoDatabase, name)
        channel.ack(msg)
    })
}

const saveNameOnDatabase = async (mongoDatabase, name) => {
    const collection = mongoDatabase.collection('name')
    await collection.insertOne({ name })
}

const main = async () => {
    const mongoClient = await connectToMongoDB()
    const mongoDatabase = mongoClient.db('names');
    await consumeQueue(mongoDatabase)
}

main()
