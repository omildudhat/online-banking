const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: { 
    type: String, 
    required: true 
  },
  passwordOmil: { 
    type: String, 
    required: true 
  },
});

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;