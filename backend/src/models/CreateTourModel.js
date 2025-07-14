import mongoose from "mongoose";
import { TIMESTAMP } from "mysql/lib/protocol/constants/types";

const tournamentSchema=new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    description:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    startTime:Date,
    endTime:Date,
    rounds:[{

        roundNumber:Number,
        problems:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Problem'
            }
        ]
    }],
    participants:[
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
             status: { type: String, enum: ['active', 'eliminated', 'winner'], default: 'active' }
        }
    ],
    maxParticipants:{
        type:Number,
        required:true,
        default:8
    },

    winner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:null
    },


    
},
{timestamps:true});


export default mongoose.model("Tournament", tournamentSchema);
