import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AgentCard({ agent }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-[2rem] p-5 shadow-soft transition-all"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={agent.avatar} alt="avatar" className="w-16 h-16 rounded-full border-2 border-primary/20 object-cover" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-extrabold text-gray-900">{agent.name}</h3>
              <ShieldCheck className="text-green-500 w-5 h-5" />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-gray-100 text-[10px] px-2.5 py-1 rounded-md font-bold text-gray-500 uppercase tracking-wider">{agent.game}</span>
            </div>
            <p className="text-green-600 font-bold text-sm mt-1 flex items-center gap-1">
              Bảo hiểm: {agent.insurance.toLocaleString()} đ
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-3">
          <span className="bg-amber-100 text-amber-600 text-xs font-black px-3 py-1.5 rounded-full">
            GDV#{agent.gdvId}
          </span>
          <Link to={`/gdv/${agent.id}`} className="flex items-center gap-1 text-sm font-bold text-gray-400 hover:text-primary transition-colors">
            CHI TIẾT <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
