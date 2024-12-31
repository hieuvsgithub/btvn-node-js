import express from "express";

const app = express();
app.use(express.json());

let products = [
  {
    id: 1,
    title: "Product 1",
    price: 1000,
  },
  {
    id: 2,
    title: "Product 2",
    price: 2000,
  },
  {
    id: 3,
    title: "Product 3",
    price: 3000,
  },
];

// lấy ra tất cả
app.get("/products", (req, res) => {
  res.send(products);
});
// lấy ra 1
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    res.send({ message: "Product not found" });
  } else {
    res.send(products[productId - 1]);
  }
});

// thêm 1
app.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  console.log(newUser);
  products.push(newUser);

  res.send({
    message: "Them thanh cong",
    products,
  });
});

// update
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  let productUpdate = products.findIndex((product) => product.id === id);

  products[productUpdate] = { ...updatedData };
  res.send(products[productUpdate]);
});

// xoá 1
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  products = products.filter((product) => product.id !== id);
  res.send({
    message: "xoa thanh cong",
    products,
  });
});

app.use((req, res) => {
  res.send("Router not found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
