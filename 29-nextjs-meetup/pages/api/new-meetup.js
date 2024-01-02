import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const uri = process.env.MONGODB_URI;

  if (req.method === 'POST') {
    console.log('entered');
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect(uri);
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
