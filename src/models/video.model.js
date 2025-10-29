import mongoose, {Schema} from "mongoose";
import monggoseaggregatePaginate from "mongoose-aggregate-paginate-v2"; 

const videoSchema = new Schema({
   videoFile: {
      type: String,
      required: [true, 'Video file is required'],
   },
   thumbnail: {
      type: String,
      required: [true, 'Thumbnail is required'],
   }, 
    title: {
      type: String,
      required: [true, 'Title is required'],
      trim: true
   },
   description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true
   },
   duration: {
      type: Number,
      required: [true, 'Duration is required']  
   },
   views: {
      type: Number,
      default: 0
   },
   ispublished: {
      type: Boolean,
      default: true
   },
//    url: {
//       type: String,
//       required: [true, 'Video URL is required'],
//       trim: true
//    },
   owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, 'Owner is required']
   }
}, { timestamps: true });

videoSchema.plugin(monggoseaggregatePaginate);
export const Video = mongoose.model("Video", videoSchema);


