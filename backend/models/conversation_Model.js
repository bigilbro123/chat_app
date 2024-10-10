import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    message: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message', // Correct model name reference
            default: []
        }
    ]
}, { timestamps: true });

const Conversation = mongoose.model('Conversation', conversationSchema); // Correct spelling of model name
export default Conversation;
