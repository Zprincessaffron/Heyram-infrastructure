import Client from '../models/clientModel.js';

// Create a new client entry (POST)
export const createClient = async (req, res) => {
    const { name, email, phone, service, message, howDidYouHear } = req.body;

    try {
        const newClient = new Client({ name, email, phone, service, message, howDidYouHear });
        await newClient.save();
        res.status(201).json({ message: 'Client data saved successfully', client: newClient });
    } catch (error) {
        res.status(500).json({ message: 'Error saving client data', error });
    }
};

// Get all client entries (GET)
export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving client data', error });
    }
};
// delete/:id 
export const deleteClient = async (req, res) => {
    const { id } = req.params; 

    try {
        const deletedClient = await Client.findByIdAndDelete(id);
        if (!deletedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client data deleted successfully', client: deletedClient });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting client data', error });
    }
};