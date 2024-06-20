import mongoose , {Schema} from "mongoose";
import mongooseAggregatePAginate from "mongoose-aggregate-paginate-v2";



const videoSchema = new Schema({

videoFile : {
    type : String,  //cloudinary url
    required : true
},

thumnail : {
    type : String,  //cloudinary url
    required : true
},

title : {
    type : String,  
    required : true
},

description : {
    type : String,  
    required : true
},

duration : {
    type : Number,  
    required : true
},

views: {
    type : String,  
    default: 0
},

isPublished : {
    type: Boolean,
    default : true
},

owner : {
    type : Schema.Types.ObjectId,
    ref : "User"
},












},{timestamps: true})


videoSchema.plugin(mongooseAggregatePAginate)


export const Video = mongoose.model("Video",videoSchema)