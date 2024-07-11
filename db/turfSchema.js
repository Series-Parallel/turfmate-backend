const turfSchema = new mongoose.Schema({
    name: String,
    image: String,
    location: String,
    description: String,
    sports: [String],
    prices: {
      football: Number,
      cricket: Number,
      // add other sports as needed
    },
    openingTime: String,
    closingTime: String,
    offers: [String] // current offers
  });
  
  module.exports = mongoose.model('Turf', turfSchema);
  