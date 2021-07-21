// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from "fs";
import path from "path";


function buildFilePath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data
}


function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedBack = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedbackText,
    };

    //store that in the database or in a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");
    const fileData = fs.readFileSync(filePath); // fileData in json
    console.log(typeof fileData);
    const data = JSON.parse(fileData); //JS objs

    data.push(newFeedBack);
    fs.writeFileSync(filePath, JSON.stringify(data)); //convert js Objs to JSON
    res
      .status(201)
      .json({ message: "Successfully stored in File", feedback: newFeedBack });
  } else {
    res.status(200).json({
      message: `This works!!!`,
    });
  }
}

export default handler;
