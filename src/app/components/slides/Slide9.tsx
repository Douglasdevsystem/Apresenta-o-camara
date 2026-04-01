import { TrendingUp, DollarSign, Calendar, CheckCircle2, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line, ComposedChart } from 'recharts';

const roiData = [
  { month: 'Atual', semAutomacao: 10000, comAutomacao: 10000, economia: 0 },
  { month: 'Mês 1', semAutomacao: 10000, comAutomacao: 8800, economia: 1200 },
  { month: 'Mês 3', semAutomacao: 10000, comAutomacao: 8800, economia: 1200 },
  { month: 'Mês 6', semAutomacao: 10000, comAutomacao: 8800, economia: 1200 },
  { month: 'Mês 10', semAutomacao: 10000, comAutomacao: 8800, economia: 1200 },
  { month: 'Mês 12', semAutomacao: 10000, comAutomacao: 8800, economia: 1200 },
];

export function Slide9() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-green-900 via-slate-900 to-blue-900 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-3 min-h-0">

        {/* Header */}
        <div className="shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Retorno sobre Investimento</h2>
          <p className="text-base md:text-lg text-green-300">O projeto se paga sozinho</p>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-3 gap-3">
          {/* Left - Key Metrics */}
          <div className="flex flex-col gap-2 min-h-0">
            {/* Economia Mensal */}
            <div className="flex-1 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl p-3 border border-green-400 shadow-xl flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <TrendingUp size={20} className="text-white" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white">Economia Mensal</h3>
              </div>
              <p className="text-white text-3xl md:text-4xl font-bold leading-none">10–15%</p>
              <p className="text-green-100 text-xs md:text-sm">Redução na conta de luz</p>
              <div className="pt-2 border-t border-white/20">
                <p className="text-white text-lg md:text-xl font-semibold leading-none">R$ 1.200/mês</p>
                <p className="text-green-200 text-xs">Economia média estimada</p>
              </div>
            </div>

            {/* Payback */}
            <div className="flex-1 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-3 border border-blue-400 shadow-xl flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <Calendar size={20} className="text-white" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white">Payback</h3>
              </div>
              <p className="text-white text-3xl md:text-4xl font-bold leading-none">10 meses</p>
              <p className="text-blue-100 text-xs md:text-sm">Tempo para retorno total</p>
              <div className="pt-2 border-t border-white/20">
                <p className="text-white text-sm md:text-base">Investimento: R$ 30.000</p>
                <p className="text-blue-200 text-xs">Recuperado em menos de 1 ano</p>
              </div>
            </div>

            {/* Economia 3 anos */}
            <div className="flex-1 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-3 border border-purple-400 shadow-xl flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                  <DollarSign size={20} className="text-white" />
                </div>
                <h3 className="text-sm md:text-base font-bold text-white">Economia em 3 anos</h3>
              </div>
              <p className="text-white text-3xl md:text-4xl font-bold leading-none">R$ 43k</p>
              <p className="text-purple-100 text-xs md:text-sm">Valor economizado total</p>
              <div className="pt-2 border-t border-white/20">
                <p className="text-white text-sm md:text-base">ROI: +43%</p>
                <p className="text-purple-200 text-xs">Retorno significativo</p>
              </div>
            </div>
          </div>

          {/* Right - Chart (col-span-2) */}
          <div className="col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 flex flex-col min-h-0">
            <h3 className="text-base md:text-lg font-bold text-white mb-2 shrink-0">
              Comparativo: Antes vs. Depois da Automação
            </h3>

            <div className="flex-1 min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={roiData} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#9ca3af" tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #3b82f6', borderRadius: '8px' }}
                    formatter={(value: any) => `R$ ${value}`}
                  />
                  <Bar dataKey="semAutomacao" fill="#ef4444" name="Sem Automação" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="comAutomacao" fill="#22c55e" name="Com Automação" radius={[6, 6, 0, 0]} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3 shrink-0">
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-red-500 rounded shrink-0"></div>
                  <p className="text-white text-sm font-semibold">Sem Automação</p>
                </div>
                <p className="text-red-300 text-xl font-bold leading-none">R$ 10.000/mês</p>
                <p className="text-slate-400 text-xs">Sem automação</p>
              </div>
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-green-500 rounded shrink-0"></div>
                  <p className="text-white text-sm font-semibold">Com Automação</p>
                </div>
                <p className="text-green-300 text-xl font-bold leading-none">R$ 8.800/mês</p>
                <p className="text-slate-400 text-xs">Economia de ~12%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Benefits */}
        <div className="shrink-0 grid grid-cols-3 gap-3">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl px-3 py-2 border border-slate-700 flex items-center gap-2">
            <CheckCircle2 size={18} className="text-green-400 shrink-0" />
            <div>
              <p className="text-white text-xs md:text-sm font-semibold leading-tight">Redução de Manutenção</p>
              <p className="text-slate-400 text-[11px]">Menos desgaste em equipamentos</p>
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl px-3 py-2 border border-slate-700 flex items-center gap-2">
            <Zap size={18} className="text-yellow-400 shrink-0" />
            <div>
              <p className="text-white text-xs md:text-sm font-semibold leading-tight">Vida Útil Prolongada</p>
              <p className="text-slate-400 text-[11px]">Ar-condicionado dura 40% mais</p>
            </div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl px-3 py-2 border border-slate-700 flex items-center gap-2">
            <TrendingUp size={18} className="text-blue-400 shrink-0" />
            <div>
              <p className="text-white text-xs md:text-sm font-semibold leading-tight">Sustentabilidade</p>
              <p className="text-slate-400 text-[11px]">Redução de 35% na pegada de carbono</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
