// const firebase = require('firebase');

const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000' }));

// const cors=require('cors');

// app.use(cors({origin:'http://localhost:3000'}));
var admin = require('firebase-admin');

var serviceAccount = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const PORT=process.env.PORT||8080;

app.get('/', (req, res) => {
  res.send('hello world');
});

//Add waste details-ready
app.post('/api/addWaste', async (req, res) => {
  try {
    const {
      type,
      CollectionPoints,
      RecyclingCenters,
      Tag,
      recyclable,
      weight,
      wstno,
    } = req.body;

    const wasteRef = db.collection('waste').doc(wstno);

    const response = await wasteRef.set({
      type,
      CollectionPoints,
      RecyclingCenters,
      Tag,
      recyclable,
      weight,
      wstno,
    });

    res.status(200).send('Waste added successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

//get details of waste items-ready
app.get('/api/readWaste', async (req, res) => {
  try {
    const userRef = db.collection('waste');
    const response = await userRef.get();
    const responseArr = [];

    response.forEach((doc) => {
      responseArr.push(doc.data());
    });

    res.send(responseArr);
  } catch (err) {
    res.send(err);
  }
});

app.get('/api/read/:id', async (req, res) => {
  try {
    const wasteDocRef = await db.collection('waste').doc(req.params.id);
    const response = await wasteDocRef.get();

    res.send(response.data());
  } catch (err) {
    res.send(err);
  }
});

// read all recyclables
app.get('/api/recyclableWaste', async (req, res) => {
  try {
    const wasteRef = db.collection('waste');
    const snapshot = await wasteRef.where('recyclable', '==', true).get();

    const wasteData = snapshot.docs.map((doc) => doc.data());

    res.status(200).send(wasteData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// read all nonRecyclableWaste
app.get('/api/nonRecyclableWaste', async (req, res) => {
  try {
    const wasteRef = db.collection('waste');
    const snapshot = await wasteRef.where('recyclable', '==', false).get();

    const wasteData = snapshot.docs.map((doc) => doc.data());

    res.status(200).send(wasteData);
  } catch (error) {
    res.status(500).send(error);
  }
});

//update weight of the waste
app.post('/api/updateWaste', async (req, res) => {
  try {
    const id = req.body.id;
    const wgt = req.body.weight;

    const wasteDocRef = await db.collection('waste').doc(id).update({
      weight: wgt,
    });

    res.send(wasteDocRef);
  } catch (err) {
    res.send(err);
  }
});
// delete all recyclables
app.delete('/api/deleteRecyclableWaste', async (req, res) => {
  try {
    const wasteRef = db.collection('waste');
    const snapshot = await wasteRef.where('recyclable', '==', true).get();

    snapshot.forEach((doc) => {
      doc.ref.delete();
    });

    res.status(200).send('Recyclable waste deleted successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

// delete all non recyclables
app.delete('/api/deleteNonRecyclableWaste', async (req, res) => {
  try {
    const wasteRef = db.collection('waste');
    const snapshot = await wasteRef.where('recyclable', '==', false).get();

    snapshot.forEach((doc) => {
      doc.ref.delete();
    });

    res.status(200).send('Recyclable waste deleted successfully');
  } catch (error) {
    res.status(500).send(error);
  }
});

//delete the waste
app.delete('/api/deleteWaste/:id', async (req, res) => {
  try {
    const response = await db.collection('waste').doc(req.params.id).delete();

    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

app.listen(8000, () => console.log(`server is listening to port 8000`));
