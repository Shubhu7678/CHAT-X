import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({

    senderId: {
        
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {

        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    message: {

        type: String,
        required: true,
        trim: true,
        maxlength: 1000,
        minLength: 1,
    }
},
    {
        timeStamps: true,
    }
);

const Message = mongoose.model('Message', messageSchema);
export default Message;