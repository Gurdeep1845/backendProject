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

// Let's say you have a list of 100 videos, and you want to see 10 videos at a time, like pages in a book. With the mongoose-aggregate-paginate-v2 plugin, you can easily get the first 10 videos, then the next 10, and so on, until you've seen all 100 videos.

// Here's a simple example:

// First Page (Videos 1-10):

// Video.aggregatePaginate(aggregateQuery, { page: 1, limit: 10 })


export const Video = mongoose.model("Video",videoSchema)