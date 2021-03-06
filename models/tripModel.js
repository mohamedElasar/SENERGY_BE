const mongoose =require( 'mongoose');

const tripSchema = new mongoose.Schema(
  {
    driverName: { type: String, required: true },
    phone: { type: String, required: true},
    carNumber: { type: String, required: true },
    passengers: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    startTime: { type: String, required: true },
    eArrivalTime: { type: String, required: true },
    startday: { type: String, required: true },
    eArrivalday: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },


    tirepressure: { type: Boolean, default: false },
    wear: { type: Boolean, default: false },
    walldamage: { type: Boolean, default: false },
    dust: { type: Boolean, default: false },
    wheel: { type: Boolean, default: false },
    spare: { type: Boolean, default: false },
    jack: { type: Boolean, default: false },
    roadside: { type: Boolean, default: false },
    flash: { type: Boolean, default: false },
    engine: { type: Boolean, default: false },
    brake: { type: Boolean, default: false },
    gear: { type: Boolean, default: false },
    clutch: { type: Boolean, default: false },
    washer: { type: Boolean, default: false },
    radiator: { type: Boolean, default: false },
    battery: { type: Boolean, default: false },
    terminals: { type: Boolean, default: false },
    belts: { type: Boolean, default: false },
    fans: { type: Boolean, default: false },
    ac: { type: Boolean, default: false },
    rubber: { type: Boolean, default: false },
    leakage: { type: Boolean, default: false },
    driver: { type: Boolean, default: false },
    vehicle: { type: Boolean, default: false },
    passes: { type: Boolean, default: false },
    fuel: { type: Boolean, default: false },
    scaba: { type: Boolean, default: false },
    extinguishers: { type: Boolean, default: false },
    first: { type: Boolean, default: false },
    seat: { type: Boolean, default: false },
    drinking: { type: Boolean, default: false },
    head: { type: Boolean, default: false },
    back: { type: Boolean, default: false },
    side: { type: Boolean, default: false },
    interior: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    brakelights: { type: Boolean, default: false },
    turn: { type: Boolean, default: false },
    reverse: { type: Boolean, default: false },
    windscreen: { type: Boolean, default: false },
    air: { type: Boolean, default: false },
    couplings: { type: Boolean, default: false },
    winch: { type: Boolean, default: false },
    horn: { type: Boolean, default: false },
    secured: { type: Boolean, default: false },
    clean: { type: Boolean, default: false },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },

    notes:{type:String, default:''},

    isApproved: { type: Boolean, default: false },
    isApprovedAt:  { type: Date, default:'' },
    isClosed: { type: Boolean, default: false },
    isClosedAt:  { type: Date, default:'' },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip; 