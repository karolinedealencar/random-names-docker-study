require('dotenv').config()

const amqp = require('amqplib');
const { RABBITMQ_URL } = process.env

const consumeQueue = async () => {
    const connection = await amqp.connect(RABBITMQ_URL)
    const channel = await connection.createChannel()
    const queue = 'names';

    await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });

    await channel.consume(queue, msg => {
        const name =  msg.content.toString()
        channel.ack(msg);
    });
}

consumeQueue()
