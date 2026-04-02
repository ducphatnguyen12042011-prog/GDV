import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, ShieldCheck, Facebook, PhoneCall } from 'lucide-react';

export default function AgentDetail() {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/agents/${id}`).then(res => setAgent(res.data));
  }, [id]);

  if (!agent) return <div className="text-center mt-20 font-bold">Đang tải...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <Link to="/" className="inline-flex items-center gap-2 font-bold text-gray-500 hover:text-black mb-6">
        <ArrowLeft size={20} /> Quay lại danh sách
      </Link>
      
      <div className="bg-white rounded-[2.5rem] shadow-soft overflow-hidden border border-gray-100 relative">
        <div className="h-32 bg-gradient-to-r from-primary/40 to-orange-300/40 absolute top-0 w-full"></div>
        
        <div className="p-10 relative z-10 flex flex-col items-center mt-10">
          <img src={agent.avatar} className="w-28 h-28 rounded-full border-4 border-white shadow-lg object-cover mb-4" />
          <h2 className="text-3xl font-black text-gray-900 flex items-center gap-2">
            {agent.name} <ShieldCheck className="text-green-500" size={28} />
          </h2>
          <div className="flex gap-2 mt-3">
            <span className="bg-amber-100 text-amber-700 px-4 py-1.5 rounded-full font-bold text-sm">GDV#{agent.gdvId}</span>
            <span className="bg-gray-100 text-gray-600 px-4 py-1.5 rounded-full font-bold text-sm">{agent.game}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 px-10 pb-10">
          <div className="bg-gray-50 p-6 rounded-3xl text-center border border-gray-100">
            <p className="text-gray-500 font-semibold mb-1">Tiền Bảo Hiểm</p>
            <p className="text-2xl font-black text-green-600">{agent.insurance.toLocaleString()} VNĐ</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-3xl text-center border border-gray-100">
            <p className="text-gray-500 font-semibold mb-1">Ngày Tham Gia</p>
            <p className="text-xl font-bold text-gray-800">{agent.joinDate}</p>
          </div>
        </div>

        <div className="px-10 pb-10 space-y-4">
          <h3 className="font-bold text-xl">Thông tin liên hệ</h3>
          <a href={agent.fbLink} target="_blank" className="flex items-center gap-4 bg-blue-50 p-4 rounded-2xl text-blue-600 font-bold hover:bg-blue-100 transition">
            <Facebook /> {agent.fbLink || "Chưa cập nhật"}
          </a>
          <a href={`tel:${agent.zalo}`} className="flex items-center gap-4 bg-sky-50 p-4 rounded-2xl text-sky-600 font-bold hover:bg-sky-100 transition">
            <PhoneCall /> {agent.zalo || "Chưa cập nhật Zalo"}
          </a>
        </div>
      </div>
    </div>
  );
}
