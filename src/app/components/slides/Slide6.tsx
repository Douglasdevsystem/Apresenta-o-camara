import { BarChart3, DollarSign, MapPin, TrendingUp, Zap, Users } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const energyData = [
  { day: 'Seg', consumo: 450 },
  { day: 'Ter', consumo: 480 },
  { day: 'Qua', consumo: 420 },
  { day: 'Qui', consumo: 490 },
  { day: 'Sex', consumo: 460 },
];

const occupancyData = [
  { ambiente: 'Gab-01', ocupacao: 85 },
  { ambiente: 'Gab-02', ocupacao: 92 },
  { ambiente: 'Plenario', ocupacao: 78 },
  { ambiente: 'Auditorio', ocupacao: 65 },
];

export function Slide6() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 md:p-12 overflow-auto">
      <div className="max-w-7xl mx-auto h-full flex flex-col min-h-0">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-5xl font-bold text-white mb-4">Painel Administrativo</h2>
          <p className="text-2xl text-blue-300">Gestão Inteligente com Dados em Tempo Real</p>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-6">
          {/* Top Stats */}
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 border border-blue-400 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <Zap size={32} className="text-white" />
              <span className="text-white/70 text-sm">Hoje</span>
            </div>
            <p className="text-white text-4xl font-bold mb-1">432 kWh</p>
            <p className="text-blue-100 text-sm">Consumo Energético</p>
            <div className="mt-2 flex items-center gap-2">
              <TrendingUp size={16} className="text-green-300" />
              <span className="text-green-300 text-sm font-semibold">-18% vs ontem</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 border border-green-400 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <DollarSign size={32} className="text-white" />
              <span className="text-white/70 text-sm">Mês</span>
            </div>
            <p className="text-white text-4xl font-bold mb-1">R$ 3.240</p>
            <p className="text-green-100 text-sm">Economia Gerada</p>
            <div className="mt-2 flex items-center gap-2">
              <TrendingUp size={16} className="text-green-300" />
              <span className="text-green-300 text-sm font-semibold">32% de redução</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 border border-purple-400 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <Users size={32} className="text-white" />
              <span className="text-white/70 text-sm">Agora</span>
            </div>
            <p className="text-white text-4xl font-bold mb-1">847</p>
            <p className="text-purple-100 text-sm">Pessoas no Predio Publico</p>
            <div className="mt-2 flex items-center gap-2">
              <MapPin size={16} className="text-purple-200" />
              <span className="text-purple-200 text-sm font-semibold">12 ambientes ativos</span>
            </div>
          </div>

          {/* Energy Chart */}
          <div className="col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 size={24} className="text-blue-400" />
              <h3 className="text-xl font-bold text-white">Consumo Semanal (kWh)</h3>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #3b82f6', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="consumo" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Occupancy Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <MapPin size={24} className="text-purple-400" />
              <h3 className="text-xl font-bold text-white">Taxa de Ocupacao</h3>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="ambiente" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #a855f7', borderRadius: '8px' }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="ocupacao" fill="#a855f7" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Features */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 flex items-center gap-3">
              <Zap size={24} className="text-blue-400" />
              <div>
                <p className="text-white font-semibold">Monitoramento em Tempo Real</p>
                <p className="text-slate-400 text-sm">Visualize consumo por setor</p>
              </div>
            </div>

            <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 flex items-center gap-3">
              <DollarSign size={24} className="text-green-400" />
              <div>
                <p className="text-white font-semibold">Gestão Financeira Integrada</p>
                <p className="text-slate-400 text-sm">Controle de custos operacionais</p>
              </div>
            </div>

            <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 flex items-center gap-3">
              <MapPin size={24} className="text-purple-400" />
              <div>
                <p className="text-white font-semibold">Mapa de Calor</p>
                <p className="text-slate-400 text-sm">Ocupacao da Camara visualizada</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
