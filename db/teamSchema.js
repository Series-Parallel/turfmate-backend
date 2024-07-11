const teamSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    sport: String,
    location: String,
    teamSize: Number,
    positionsFilled: Number,
    positionsEmpty: Number,
    requiredLevel: { type: String, enum: ['noob', 'mid', 'pro', 'any'] },
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model('Team', teamSchema);
  