const express = require("express");
const app = express();

app.use(express.json());

const jadwal = {
  senin: [
    { waktu: "08.00-09.30", mapel: "Matematika" },
    { waktu: "09.30-11.00", mapel: "Bahasa Indonesia" }
  ],
  selasa: [
    { waktu: "08.00-09.30", mapel: "IPA" },
    { waktu: "09.30-11.00", mapel: "Bahasa Inggris" }
  ],
  rabu: [
    { waktu: "08.00-09.30", mapel: "IPS" },
    { waktu: "09.30-11.00", mapel: "PKN" }
  ],
  kamis: [
    { waktu: "08.00-09.30", mapel: "Seni Budaya" },
    { waktu: "09.30-11.00", mapel: "Matematika" }
  ],
  jumat: [
    { waktu: "08.00-09.30", mapel: "Agama" },
    { waktu: "09.30-11.00", mapel: "Olahraga" }
  ]
};

app.post("/", (req, res) => {
  const hari = req.body.queryResult.parameters.hari;

  if (!jadwal[hari]) {
    return res.json({
      fulfillmentText: "Maaf, jadwal untuk hari tersebut tidak ditemukan."
    });
  }

  let responseText = `Jadwal hari ${hari}:\n`;

  jadwal[hari].forEach(item => {
    responseText += `${item.waktu} - ${item.mapel}\n`;
  });

  res.json({
    fulfillmentText: responseText
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server berjalan di port " + PORT);
});
