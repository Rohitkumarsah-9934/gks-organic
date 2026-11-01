import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Name zaroori hai'], trim: true, maxlength: 80 },
    email: {
      type: String,
      required: [true, 'Email zaroori hai'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Valid email daaliye'],
    },
    phone: { type: String, trim: true, maxlength: 20 },
    message: { type: String, required: [true, 'Message zaroori hai'], trim: true, maxlength: 1000 },
  },
  { timestamps: true }
);

export default mongoose.model('Contact', contactSchema);
