import Conversation from "../models/conversation_Model.js";
import Message from "../models/message_model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { receiverId } = req.params;
        const senderId = req.user._id;

        // Check if conversation exists between sender and receiver
        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            },
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        // Save the new message to the database
        // await newMessage.save();

        // Push the message into the conversation's messages array
        conversation.message.push(newMessage._id);

        // Save the updated conversation
        // await conversation.save();

        await Promise.all([conversation.save(), newMessage.save()])

        // Send success response
        res.status(201).json({
            message: 'Message sent successfully'
        });

    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error');
    }
};

export const getMessage = async (req, res) => {
    try {
        const { receiverId } = req.params;
        const senderId = req.user._id;

        // Correct typo: conversation instead of coversation
        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        }).populate('message'); // Ensure 'message' is set as a reference in the schema

        // Check if the conversation exists
        if (!conversation) {
            return res.status(404).json({
                message: 'Conversation not found'
            });
        }
        const conversations = conversation.message

        res.status(200).json(conversations);

    } catch (error) {
        console.log(error);
        res.status(500).json('internal server error');
    }
};
