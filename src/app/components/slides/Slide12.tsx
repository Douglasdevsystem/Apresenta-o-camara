import { Smartphone, Building2, Layers, Presentation, Cpu, FileCheck2, CircleDollarSign, CheckCircle2 } from 'lucide-react';

const proposalItems = [
  {
    title: 'Gabinetes',
    quantity: 18,
    unitValue: 2500,
    value: 18 * 2500,
    icon: Smartphone,
    color: 'from-sky-600 to-blue-600',
    border: 'border-sky-400',
    description: '18 gabinetes x R$ 2.500,00',
  },
  {
    title: 'Setores',
    quantity: 15,
    unitValue: 2500,
    value: 15 * 2500,
    icon: Building2,
    color: 'from-emerald-600 to-green-600',
    border: 'border-emerald-400',
    description: '15 setores x R$ 2.500,00',
  },
  {
    title: 'Pavimentos',
    quantity: 3,
    unitValue: 3500,
    value: 3 * 3500,
    icon: Layers,
    color: 'from-amber-600 to-orange-600',
    border: 'border-amber-400',
    description: '3 pavimentos x R$ 3.500,00',
  },
  {
    title: 'Auditorios',
    quantity: 2,
    unitValue: 6500,
    value: 2 * 6500,
    icon: Presentation,
    color: 'from-fuchsia-600 to-pink-600',
    border: 'border-fuchsia-400',
    description: '2 auditorios x R$ 6.500,00',
  },
  {
    title: 'Infraestrutura',
    quantity: 1,
    unitValue: 151460,
    value: 151460,
    icon: Cpu,
    color: 'from-cyan-600 to-indigo-600',
    border: 'border-cyan-400',
    description: 'Valor unico de infraestrutura',
  },
];

const finalTotal = proposalItems.reduce((sum, item) => sum + item.value, 0);

export function Slide12() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-3 min-h-0">
        <div className="shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Proposta e Valor Final</h2>
          <p className="text-base md:text-lg text-blue-300">Composicao completa do investimento</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 flex-1 min-h-0">
          {proposalItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-slate-800/55 backdrop-blur-sm rounded-2xl border border-slate-700 flex flex-col overflow-hidden">
                <div className={`bg-gradient-to-r ${item.color} px-4 py-3 border-b ${item.border}`}>
                  <div className="flex items-center gap-2">
                    <Icon size={22} className="text-white shrink-0" />
                    <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>

                <div className="flex-1 px-4 py-3 flex flex-col justify-between gap-3">
                  <p className="text-slate-200 text-sm md:text-base leading-relaxed">{item.description}</p>
                  <div className="border-t border-slate-600 pt-2">
                    <p className="text-slate-400 text-xs md:text-sm">Valor</p>
                    <p className="text-white text-2xl md:text-3xl font-bold leading-none mt-1">
                      R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="shrink-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl border border-violet-400 p-3 md:p-4 shadow-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-violet-100 text-sm md:text-base font-semibold">Valor Final da Proposta</p>
              <p className="text-white text-3xl md:text-4xl font-bold leading-none mt-1">
                R$ {finalTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <CircleDollarSign size={42} className="text-white/90 shrink-0" />
          </div>

          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-black/20 rounded-lg px-3 py-2 border border-white/15 flex items-center gap-2">
              <FileCheck2 size={16} className="text-violet-100 shrink-0" />
              <span className="text-violet-50 text-xs md:text-sm">Proposta completa</span>
            </div>
            <div className="bg-black/20 rounded-lg px-3 py-2 border border-white/15 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-violet-100 shrink-0" />
              <span className="text-violet-50 text-xs md:text-sm">Implantacao em 4 meses</span>
            </div>
            <div className="bg-black/20 rounded-lg px-3 py-2 border border-white/15 flex items-center gap-2">
              <Smartphone size={16} className="text-violet-100 shrink-0" />
              <span className="text-violet-50 text-xs md:text-sm">Suporte para operacao</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}