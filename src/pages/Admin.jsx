import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [agents, setAgents] = useState([]);
  const [form, setForm] = useState({});

  const fetchAgents = () => axios.get('http://localhost:5000/api/agents').then(res => setAgents(res.data));
  useEffect(() => { fetchAgents(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/agents', form);
    fetchAgents(); setForm({});
  };

  const xoa = async (id) => {
    if(confirm('Xóa nhé?')) { await axios.delete(`http://localhost:5000/api/agents/${id}`); fetchAgents(); }
  }

  return (
    <div className="mt-10 bg-white p-10 rounded-[2.5rem] shadow-soft border border-gray-100 max-w-4xl mx-auto">
      <h2 className="text-3xl font-black mb-8 text-gray-800">Quản Trị Hệ Thống</h2>
      
      <form onSubmit={submit} className="grid grid-cols-2 gap-4 mb-10 bg-gray-50 p-6 rounded-3xl">
        <input className="border p-3 rounded-xl focus:ring-2 outline-none" placeholder="Mã (VD: 103)" onChange={e => setForm({...form, gdvId: e.target.value})} required/>
        <input className="border p-3 rounded-xl focus:ring-2 outline-none" placeholder="Tên" onChange={e => setForm({...form, name: e.target.value})} required/>
        <input className="border p-3 rounded-xl focus:ring-2 outline-none" placeholder="Game" onChange={e => setForm({...form, game: e.target.value})} required/>
        <input className="border p-3 rounded-xl focus:ring-2 outline-none" placeholder="Bảo hiểm (VNĐ)" type="number" onChange={e => setForm({...form, insurance: e.target.value})} required/>
        <input className="border p-3 rounded-xl focus:ring-2 outline-none" placeholder="Link Facebook" onChange={e => setForm({...form, fbLink: e.target.value})}/>
        <input className="border p-3 rounded-xl focus:ring-2 outline-none" placeholder="Số Zalo" onChange={e => setForm({...form, zalo: e.target.value})}/>
        <button className="col-span-2 bg-dark text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition">THÊM GDV MỚI</button>
      </form>

      <div className="space-y-3">
        {agents.map(a => (
          <div key={a.id} className="flex justify-between items-center p-4 border rounded-2xl bg-white">
            <div className="font-bold">#{a.gdvId} - {a.name} ({a.game})</div>
            <button onClick={() => xoa(a.id)} className="text-red-500 font-bold bg-red-50 px-4 py-2 rounded-xl">Xóa</button>
          </div>
        ))}
      </div>
    </div>
  );
}
