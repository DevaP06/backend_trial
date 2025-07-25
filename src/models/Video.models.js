import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoose,{schema} from mongoose;

const videoSchema = new mongoose.Schema(
    {
        videoFile:{
            type: String,
            required: true,

        },
        thumbnail: {
            type: String,
            required: true,
        },
        owner:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description:{
            type: String,
            required: true,
            trim: true,
        },
        duration:{
            type:Number,
            required: true,

        },
        views:{
            type:Number,
            default:0,


        },
        isPublished: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

export const Video = mongoose.model("Video", videoSchema);