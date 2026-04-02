import { useState, useEffect } from 'react';
import axios from 'axios';
import AgentCard from '../components/AgentCard';
import { ShieldCheck } from 'lucide-react';

export default function Home() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/agents').then(res => setAgents(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-10">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-soft border border-white">
          <h1 className="text-5xl font-black leading-tight mb-4 text-gray-900">
            Giao dịch viên <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
              Uy tín & Tận tâm
            </span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Hệ thống giao dịch trung gian an toàn tuyệt đối. Mọi GDV đều được xét duyệt danh tính và đóng tiền bảo hiểm.
          </p>
          <div className="space-y-4">
             {['Bảo vệ bởi quỹ bảo hiểm 100%', 'Xác thực danh tính CCCD', 'Hỗ trợ giải quyết tranh chấp 24/7'].map((txt, i) => (
                <div key={i} className="flex items-center gap-3 font-semibold text-gray-700 bg-gray-50 p-3 rounded-2xl">
                  <ShieldCheck className="text-green-500" /> {txt}
                </div>
             ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 space-y-4">
        {agents.map(agent => <AgentCard key={agent.id} agent={agent} />)}
      </div>
    </div>
  );
}
