import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
    howDidYouHear: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    opened: { type: String, default: 'no' }, 

});

const Client = mongoose.model('Client', clientSchema);

export default Client;
