import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Shield, Cpu, Zap, Package, TrendingUp } from 'lucide-react';

const costData = [
  { name: 'Segurança Elétrica', value: 28, color: '#ef4444' },
  { name: 'Automação IoT', value: 26, color: '#3b82f6' },
  { name: 'Controle de Carga', value: 31, color: '#22c55e' },
  { name: 'Instalação', value: 15, color: '#a855f7' },
];

export function Slide10() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-3 min-h-0">

        {/* Header */}
        <div className="shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Estrutura de Custos</h2>
          <p className="text-base md:text-lg text-blue-300">Análise Estratégica do Investimento</p>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-3">
          {/* Left - Donut Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-slate-700 flex flex-col items-center justify-center min-h-0">
            <h3 className="text-sm md:text-base font-bold text-white mb-2 text-center">
              Distribuição Percentual do Investimento
            </h3>
            <div className="flex-1 w-full min-h-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costData}
                    cx="50%"
                    cy="50%"
                    innerRadius="35%"
                    outerRadius="60%"
                    paddingAngle={5}
                    dataKey="value"
                    label={({ value }) => `${value}%`}
                    labelLine={false}
                  >
                    {costData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #3b82f6', borderRadius: '8px' }}
                    formatter={(value: any) => `${value}%`}
                  />
                  <Legend
                    iconType="square"
                    iconSize={12}
                    formatter={(value) => <span style={{ color: '#cbd5e1', fontSize: '13px' }}>{value}</span>}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right - Justifications */}
          <div className="flex flex-col gap-2 min-h-0">
            {[
              { gradient: 'from-red-600 to-orange-600', border: 'border-red-400', Icon: Shield,
                title: 'Segurança Elétrica (28%)', color: 'text-red-100',
                text: <><strong>Prioridade máxima:</strong> DPS Clamper e Disjuntores Elgin protegem contra surtos e sobrecargas.</> },
              { gradient: 'from-blue-600 to-cyan-600', border: 'border-blue-400', Icon: Cpu,
                title: 'Automação IoT (26%)', color: 'text-blue-100',
                text: <><strong>Coração do sistema:</strong> ESP32 e sensores inteligentes para detecção de presença e monitoramento automatizado.</> },
              { gradient: 'from-green-600 to-emerald-600', border: 'border-green-400', Icon: Zap,
                title: 'Controle de Carga (31%)', color: 'text-green-100',
                text: <><strong>Maior percentual:</strong> Contatores e relés de alta qualidade para cargas pesadas com confiabilidade.</> },
              { gradient: 'from-purple-600 to-pink-600', border: 'border-purple-400', Icon: Package,
                title: 'Instalação (15%)', color: 'text-purple-100',
                text: <><strong>Fundação sólida:</strong> Quadros DIN, cabos e terminais profissionais para instalação limpa e durável.</> },
            ].map(({ gradient, border, Icon, title, color, text }, idx) => (
              <div key={idx} className={`bg-gradient-to-r ${gradient} rounded-xl px-4 py-2.5 border ${border} flex-1`}>
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={18} className="text-white flex-shrink-0" />
                  <h3 className="text-sm md:text-base font-bold text-white">{title}</h3>
                </div>
                <p className={`text-xs md:text-sm ${color} leading-snug`}>{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Insight */}
        <div className="shrink-0 bg-blue-500/10 border border-blue-500/30 rounded-xl px-4 py-2.5 flex items-center gap-3">
          <TrendingUp size={18} className="text-blue-400 flex-shrink-0" />
          <p className="text-blue-200 text-xs md:text-sm">
            <strong>Estratégia inteligente:</strong> 85% do investimento focado em segurança, automação e controle confiável.
            Priorizamos qualidade sobre economia de curto prazo.
          </p>
        </div>

      </div>
    </div>
  );
}
