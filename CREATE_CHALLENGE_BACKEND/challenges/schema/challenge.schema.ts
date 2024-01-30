import { Schema } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';


export const ChallengeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'A challenge must have a tag'],
        unique: true,
        trim: true
    },
    picturePath: String,
    location: {
        type: String,
        required: [true, 'A Challenge must have a location']
    },
    Tag: {
        type: String
    },
    isReported: {
        type: Boolean,
        default: false
    },
    isAccepted: {
        type: Boolean,
        default: false
    },
    like:{
        type:Number,
        default: 100
    }

})

