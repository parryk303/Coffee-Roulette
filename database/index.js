const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/coffee-roulette';
// const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://kyle:1XbajRXflDZiFR2x@mvpcluster.kba0n.mongodb.net/mvpCluster?retryWrites=true&w=majority'

try {
  // Connect to the MongoDB cluster
  mongoose.connect (
    mongoURI,
    { useNewUrlParser: true, useUnifiedTopology: true,  useFindAndModify: false, useCreateIndex: true, },
    () => console.log('==================== Mongoose Connected ====================')
  );
} catch (e) {
  console.log("could not connect");
}

const drinkSchema = new mongoose.Schema({
  index: Number,
  name: String,
  ratio: String,
  cup: String,
  description: String,
  image: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Drinks = mongoose.model('Drinks', drinkSchema);
const Users = mongoose.model('Users', userSchema);

const cb = (err, results) => {
  if (err) {
    cb(err, null);
  }
  cb(null, results);
};

const selectAll = (cb) => {
  Drinks.find(cb);
};

const selectDrink = (index, cb) => {
  Drinks.find(index, cb);
};

const registerUser = (data, cb) => {
  Users.create({
    name: data.name,
    email: data.email,
    password: data.password
  })
};

  module.exports = {
  Drinks,
  Users,
  selectAll,
  selectDrink,
  registerUser,
};
