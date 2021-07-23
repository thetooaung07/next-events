function handler(req, res) {
  const email = req.body.registerEmail;
  const returnEmail = {
    id: new Date().toISOString(),
    email: email,
  };

 
  res.status(201).json({ message: "Success!", value: returnEmail });
}

export default handler;
