const Contact = require("../models/contact.js");

module.exports.createContact = async (req, res) => {
  const contact = new Contact(req.body);
  
  await contact.save();

  req.flash("success", "Message Sent Successfully!");

  res.status(201).json({
    success: true,
    message: "Contact saved",
  });
};