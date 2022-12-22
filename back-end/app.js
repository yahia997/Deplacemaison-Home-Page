const express = require("express");
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

const products = [
  { _id: 1, name: "cactus", img: "sh-3.jpeg", price: "300", images: ["sh-3-1.jpeg", "sh-3-2.jpeg"], description: "Lace-up ankle boot with reflective details on the upper, logoed technical fabric tongue in tumbled leather, split leather, side technical fabric, semi-transparent PVC. Technical fabric lining." , size: [41, 42, 43, 44, 45, 46], color: ["white", "black", "army", "sand"]},
  { _id: 2, name: "the code", img: "sh-2.jpeg", price: "240", images: ["sh-2-1.jpeg", "sh-2-2.jpeg"], description: "Shoe with tear-off closure characterized by the presence of semi-transparent PVC. Details printed and embroidered in orange or yellow depending on the version in split leather, tumbled leather, semi-transparent PVC and technical fabric lining."  , size: [41, 42, 43, 44, 45, 46], color: ["white", "black", "army", "sand"]},
  { _id: 3, name: "the eye", img: "sh-1.jpeg", price: "240", images: ["sh-3-1.jpeg", "sh-3-2.jpeg"], description: "Classic laced, rigid TPU side lacing to match the upper. Different colour embroidery depending on the colour version chosen. Embroidered logo tongue in tumbled leather at the toe, split leather, technical side fabric, neoprene for the tongue and semi-transparent PVC. Lining in technical fabric. "  , size: [41, 42, 43, 44, 45, 46], color: ["white", "black", "army", "sand"]},
  { _id: 4, name: "Carnera", img: "sh-4.jpeg", price: "240", images: ["sh-4-1.jpeg", "sh-4-2.jpeg", "sh-4-3.jpeg"], description: "Pantafaca sneaker in soft fabric and waterproof technical materials. The fabric and the lateral elastic laces guarantee adherence and adaptability to the fit. Adjustable thanks to the drawstring on the back. Gritty rubber sole."  , size: [41, 42, 43, 44, 45, 46], color: ["white", "black", "army", "sand"]},
  { _id: 5, name: "pantafaca", img: "sh-5.jpeg", price: "300", images: ["sh-3-1.jpeg", "sh-3-2.jpeg"], description: "Trescia sneaker in soft fabric and technical materials. The neoprene sock guarantees adherence and adaptability to the fit. Windproof rear zip opening. Gritty rubber sole."  , size: [41, 42, 43, 44, 45, 46], color: ["white", "black", "army", "sand"]},
  { _id: 6, name: "the eye", img: "sh-6.jpeg", price: "240", images: ["sh-3-1.jpeg", "sh-3-2.jpeg"], description: "Pantafaca sneaker in soft fabric and waterproof technical materials. The fabric and the lateral elastic laces guarantee adherence and adaptability to the fit. Adjustable thanks to the drawstring on the back. Gritty rubber sole."  , size: [41, 42, 43, 44, 45, 46], color: ["white", "black", "army", "sand"]},
  { _id: 7, name: "the code", img: "sh-7.jpeg", price: "240", images: ["sh-7-1.jpeg", "sh-7-2.jpeg", "sh-7-3.jpeg"], description: "Lace-up ankle boot with reflective details on the upper, logoed technical fabric tongue in tumbled leather, split leather, side technical fabric, semi-transparent PVC. Technical fabric lining."  , size: [41, 42, 43, 44, 45, 46], color: ["white", "black", "army", "sand"]},
];

app.get("/products", (req, res) => {
  let toSend = [];

  for (let i = 0; i < products.length; i++) {
    toSend.push({ _id: products[i]._id, name: products[i].name, img: products[i].img, price: products[i].price });
  }

  res.status(200).json(toSend);
});

app.get("/products/:id", (req, res) => {
  res.status(200).json(products[req.params.id-1]);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});