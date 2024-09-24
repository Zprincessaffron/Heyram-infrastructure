import Contact from '../models/contactModel.js';

// Create a new contact entry (POST)
export const createContact = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: ' data saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact data', error });
    }
};

// Get all contact entries (GET)
export const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving contact data', error });
    }
};

// Delete a contact entry by ID (DELETE)
export const deleteContact = async (req, res) => {
    const { id } = req.params; // Extract the contact ID from the request parameters

    try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.status(200).json({ message: ' data deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting contact data', error });
    }
};


// Update opened status of an contactus notification

export const updatequeryNotification = async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
  
    try {
      // Update the opened field to "yes"
      const updatednotification = await Contact.findByIdAndUpdate(
        id,
        { opened: "yes" }, // Update opened field
        { new: true } // Return the updated document
      );
  
      if (!updatednotification) {
        return res.status(404).json({ message: 'queries not found' });
      }
  
      res.status(200).json({ message: 'query notification opened'});
    } catch (error) {
      res.status(400).json({ message: 'Error updating  notification', error });
    }
  };
