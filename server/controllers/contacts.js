const Contact = require("../models/Contact");

module.exports.createContact = async (req, res) => {
  const contact = new Contact(req.body);
  
  await contact.save();

  req.flash("success", "Message Sent Successfully!");

  res.status(201).json({
    success: true,
    message: "Contact saved",
  });
};