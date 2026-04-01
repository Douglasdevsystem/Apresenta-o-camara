import { Shield, Cpu, Zap, Package } from 'lucide-react';

export function Slide7() {
  const components = [
    {
      category: 'Segurança Elétrica',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      items: [
        { name: 'Disjuntor Tripolar Elgin 80A 3 Polos' },
        { name: 'DPS Tripolar 275V 45kA Clamper' },
      ]
    },
    {
      category: 'Cérebro do Sistema',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'CLP ARMK ESP32' },
      ]
    },
    {
      category: 'Controle de Carga',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Fonte 12V 6A' },
        { name: 'Contator Bipolar 10A Exatron' },
        { name: 'Contator Tripolar 65A Sibratec' },
      ]
    },
    {
      category: 'Instalação',
      icon: Package,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Trilho Din Ts35 Perfurado 20cm' },
        { name: 'Painel Elétrico Cinza' },
        { name: 'Fio 6mm Cabo Flexível Rolo 30m' },
      ]
    },
  ];

  const totalGeral = 2500.00;

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 md:p-5 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-2 min-h-0">

        {/* Header */}
        <div className="shrink-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Orçamento Detalhado</h2>
          <p className="text-base md:text-lg text-slate-400">Kit Completo — 18 Gabinetes + 15 Setores</p>
        </div>

        {/* Cards grid — flex-1 + min-h-0 constrains height so cards split space equally */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-2">
          {components.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 flex flex-col overflow-hidden">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.color} px-4 py-3 flex items-center gap-2 shrink-0`}>
                  <Icon size={22} className="text-white shrink-0" />
                  <h3 className="text-base md:text-lg font-bold text-white">{category.category}</h3>
                </div>
                {/* Items — flex-1 so they fill, overflow-hidden clips excess */}
                <div className="flex-1 overflow-hidden px-4 pt-2.5 pb-2">
                  <div className="space-y-1">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="py-1 border-b border-slate-700/60 last:border-0">
                        <span className="text-white text-sm md:text-[15px] font-medium leading-tight">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grand Total */}
        <div className="shrink-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl px-4 py-2.5 border border-blue-400 shadow-xl flex items-center justify-between gap-4">
          <p className="text-blue-100 text-base md:text-lg font-medium">Total — 18 Gabinetes + 15 Setores</p>
          <p className="text-white text-3xl md:text-4xl font-bold leading-none">R$ {totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
        </div>

      </div>
    </div>
  );
}
