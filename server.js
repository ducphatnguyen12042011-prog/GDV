const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/agents', async (req, res) => {
  const agents = await prisma.agent.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(agents);
});

app.get('/api/agents/:id', async (req, res) => {
  const agent = await prisma.agent.findUnique({ where: { id: parseInt(req.params.id) } });
  res.json(agent);
});

app.post('/api/agents', async (req, res) => {
  try {
    const data = req.body;
    const agent = await prisma.agent.create({
      data: {
        ...data,
        insurance: parseInt(data.insurance),
        joinDate: data.joinDate || new Date().toLocaleDateString('vi-VN')
      }
    });
    res.json(agent);
  } catch (e) {
    res.status(400).json({ error: "Lỗi thêm GDV" });
  }
});

app.delete('/api/agents/:id', async (req, res) => {
  await prisma.agent.delete({ where: { id: parseInt(req.params.id) } });
  res.json({ success: true });
});

app.listen(5000, () => console.log('✅ Backend chạy tại http://localhost:5000'));
