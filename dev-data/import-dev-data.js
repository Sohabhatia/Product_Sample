const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Product = require('./../Model/productModel');
const User = require('./../Model/userModel')


dotenv.config({ path: './config.env' });

//set by node.js, express automatically sets env to development
const DB = 'mongodb+srv://soha:<password>@cluster0.x7ygr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'.replace(
  '<password>',
  'tampa$123'
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successful DB connection!');
  });

const products = JSON.parse(fs.readFileSync(`${__dirname}/assignmentdb_product.json`, `utf-8`));
const users = JSON.parse(fs.readFileSync(`${__dirname}/assignmentdb_users.json`, `utf-8`));

//IMPORT DATA INTON DATABASE

const importData1 = async () => {
  try {
    await Product.create(products);
    console.log('Successfully added data to db!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const importData2 = async () => {
    try {
      await User.create(users);
      console.log('Successfully added data to db!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };



if (process.argv[2] === '--import') {
  importData1();
  importData2();
} 
