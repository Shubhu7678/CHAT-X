import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({

    members: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            
        }
    ],
    conversation: [
        {
            type: mongoose.Schema.ObjectId,
            ref: "Message",
            default: [],
        }
    ]
},
    {
        timeStamps: true,
    }
);

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;