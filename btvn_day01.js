import express from "express";

const app = express();
app.use(express.json());
const uri = "http://localhost:3000";

// lấy ra tất cả
app.get("/products", (req, res) => {
  fetch(`${url}/products`)
    .then((res) => res.json())
    .then((data) => {
      res.send({ message: "Hoàn tất lấy tất cả sản phẩm", product: data });
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: "Lấy toàn bộ sản phẩm thất bại" });
    });
});
// lấy ra 1
app.get("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  fetch(`${url}/products`)
    .then((res) => res.json())
    .then((data) => {
      res.send({ message: `sp id: ${productId}`, product: data });
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: "Product not found" });
    });
});

// thêm 1
app.post("/products", (req, res) => {
  const newProduct = req.body;
  fetch(`${uri}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((res) => res.json())
    .then((data) => {
      res.status(201).send({ message: "Them thanh cong", product: data });
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: "Them that bai" });
    });
});

// update
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;
  fetch(`${uri}/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  })
    .then((res) => res.json())
    .then((data) => {
      res.status(201).send({ message: "cap nhat thanh cong", product: data });
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: "cap nhat that bai" });
    });
});

// xoá 1
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  fetch(`${uri}/products/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      res.status(201).send({ message: "xoa thanh cong" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ message: "xoa that bai" });
    });
});

app.use((req, res) => {
  res.send("Router not found");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
