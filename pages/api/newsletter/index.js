import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.registerEmail;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const client = await MongoClient.connect(
      "mongodb+srv://thetooaung:thetooaung@cluster0.uclkr.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("newsletter").insertOne({ email: userEmail });
    client.close();

    console.log(userEmail);
    res.status(201).json({ message: "Success!" });
  }
}

export default handler;
