import dbConnect from '../../../lib/dbConnect';
import Monkey from '../../../models/Monkey';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const monkeys = await Monkey.find();
      res.status(200).json(monkeys);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch monkeys' });
    }
  // } else {
  //   res.status(405).json({ error: 'Method not allowed' });
  }
  if (req.method === 'POST') {
    try {
      const monkey = new Monkey(req.body);
      await monkey.save();
      res.status(201).json({ message: 'Monkey successfully added'});
    } catch (error) {
      res.status(400).json({ error: 'Failed to add new monkey'});
    }
  }
}