import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    opened: { type: String, default: 'no' }, 

});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
