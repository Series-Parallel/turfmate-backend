const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    turf: { type: mongoose.Schema.Types.ObjectId, ref: 'Turf' },
    sport: String,
    date: Date,
    slots: [String], // e.g., ['8-9', '9-10']
    status: { type: String, enum: ['booked', 'cancelled'], default: 'booked' },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Booking', bookingSchema);
  