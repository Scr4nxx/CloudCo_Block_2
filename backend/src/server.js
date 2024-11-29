const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 2000;

// Middleware
app.use(cors());
app.use(express.json());

// Daten-Speicher (entweder als Array oder JSON-Datei)
const dataFilePath = './data.json';

// Hilfsfunktion zum Laden der Daten aus der Datei
const loadData = () => {
  if (fs.existsSync(dataFilePath)) {
    return JSON.parse(fs.readFileSync(dataFilePath));
  }
  return [];
};

// Hilfsfunktion zum Speichern der Daten in der Datei
const saveData = (data) => {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// GET /data: Liefert alle gespeicherten Objekte
app.get('/data', (req, res) => {
  const data = loadData();
  res.json(data);
});

// POST /data: Fügt einen neuen Eintrag hinzu
app.post('/data', (req, res) => {
  const data = loadData();
  const newEntry = { id: Date.now().toString(), ...req.body, completed: false };
  data.push(newEntry);
  saveData(data);
  res.status(201).json(newEntry);
});

// PUT /data/:id: Aktualisiert einen Eintrag
app.put('/data/:id', (req, res) => {
  const data = loadData();
  const index = data.findIndex((item) => item.id === req.params.id);
  if (index !== -1) {
    data[index] = { ...data[index], ...req.body };
    saveData(data);
    res.json(data[index]);
  } else {
    res.status(404).json({ error: 'Eintrag nicht gefunden' });
  }
});

// DELETE /data/:id: Löscht einen Eintrag
app.delete('/data/:id', (req, res) => {
  const data = loadData();
  const updatedData = data.filter((item) => item.id !== req.params.id);
  if (updatedData.length !== data.length) {
    saveData(updatedData);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Eintrag nicht gefunden' });
  }
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
