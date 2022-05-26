const mongoose =require( 'mongoose');

const deviceSchema = new mongoose.Schema(
  {
    token: { type: String, required: true },

    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const Device = mongoose.model('Device', deviceSchema);

module.exports = Device; 