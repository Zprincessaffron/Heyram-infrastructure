import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
    howDidYouHear: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
