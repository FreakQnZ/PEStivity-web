const  MongoClient  = require('mongodb').MongoClient;
const express = require('express');
const app = express();
const cors = require('cors')
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  let db = client.db(dbName);
  console.log("Connected to DB")
  let collection = db.collection("highScores");
  console.log("connected to highscores db");

  let findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult)

  app.use(express.json())
  app.use(cors())

  app.get('/', (req,res) => {
    res.json(findResult)
  })

  app.post("/", async (req, res) => {
    const msg = req.body.obj
    console.log(msg)
    let db = client.db(dbName);
    const filter = {name : msg.name}
    const update = {$set : {highScore : msg.score}}
    let collection = db.collection("highScores");
    const result = await collection.updateOne(filter, update)
    console.log(result)
    findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult)
  
    app.get('/', (req,res) => {
      res.json(findResult)
    })
  })



  app.listen(3000, () => {console.log("connected to port 3000")})
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log('still running'));


