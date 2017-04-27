import * mongoose from 'mongoose';

export interface IAppMessage extends mongoose.Document {
  name: string;
}

let appMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

export default mongoose.model<IAppMessage>('AppMessage', appMessageSchema);
