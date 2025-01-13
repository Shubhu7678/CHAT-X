import  Message  from '../models/Message.js'
import Conversation from '../models/Conversation.js'

export const sendMessage = async(req, res) => { 

    try {
       
        const { receiverId } = req.params;
        const senderId = req.user._id;
        const { message } = req.body;

        const conversationExist = await Conversation.findOne(
            {
                members : {$all : [senderId, receiverId]}
            }
        )

        if (!conversationExist) { 

            const newConversation = await Conversation.create({

                members: [senderId, receiverId]
            })
        }

        const newMessage = await Message.create({

            senderId,
            receiverId,
            message
        });


        if (newMessage) { 

            const conversationUpdate = await Conversation.findOneAndUpdate(
                {
                    members : {$all : [senderId , receiverId]}
                },
                {
                    $push : {conversation : newMessage._id}
                }
            )
        }
          
        return res.status(201).json({

            success: true,
            message: "Message sent successfully",
            data: newMessage,
        });
        
        

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const getMessages = async (req, res) => { 

    try {

        const { receiverId } = req.params;
        const  senderId  = req.user._id;
         
        const messages = await Conversation.findOne(
            {
                members: { $all: [senderId, receiverId] }
            }
        ).populate('conversation');

        return res.status(200).json({

            success: true,
            message: "Messages fetched successfully",
            data: messages
        });

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: "Internal Server Error",
            error: error.message
        })
    }
}