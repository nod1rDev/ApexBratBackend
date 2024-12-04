const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const videoRoutes = require("./src/routes/videoRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();

// CORS konfiguratsiyasi
app.use(cors());

// JSON va URL-encoded ma'lumotlarni o'qish
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 'uploads' papkasini tekshirish va yaratish
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log(`'uploads' papkasi yaratildi: ${uploadDir}`);
}

// 'uploads' papkasini statik papka sifatida ulash
app.use("/uploads", express.static(uploadDir));

// MongoDB ulanishi
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB ulanishi muvaffaqiyatli"))
  .catch((err) => console.error("MongoDB ulanishida xatolik:", err));

// API yo'nalishlarini qo'shish
app.use("/api/videos", videoRoutes);
app.use("/api/users", userRoutes);

// Serverni ishga tushurish
app.listen(process.env.PORT, () => {
  console.log(`Server http://localhost:${process.env.PORT} da ishlayapti`);
});
