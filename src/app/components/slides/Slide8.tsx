import { Shield, Cpu, Zap, Package } from 'lucide-react';

export function Slide8() {
  const components = [
    {
      category: 'Segurança Elétrica',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      items: [
        { name: 'Disjuntor Tripolar Elgin 100A 3 Polos', qtd: 1, price: 100.00 },
        { name: 'DPS Tripolar 275V 45kA Clamper', qtd: 1, price: 174.90 },
        { name: 'Sensor Corrente não invasivo 100A', qtd: 3, price: 75.00 },
        { name: 'Sensor de tensão', qtd: 3, price: 35.00 },
      ]
    },
    {
      category: 'Cérebro do Sistema',
      icon: Cpu,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { name: 'CLP ARMK ESP32', qtd: 1, price: 250.00 },
      ]
    },
    {
      category: 'Controle de Carga',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      items: [
        { name: 'Fonte 12V 6A', qtd: 1, price: 60.00 },
      ]
    },
    {
      category: 'Instalação',
      icon: Package,
      color: 'from-purple-500 to-pink-500',
      items: [
        { name: 'Trilho Din Ts35 Perfurado 20cm', qtd: 1, price: 19.00 },
        { name: 'Painel Elétrico Cinza', qtd: 1, price: 218.50 },
      ]
    },
  ];

  const totalGeral = 3500.00;

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 md:p-5 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-2 min-h-0">

        {/* Header */}
        <div className="shrink-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Orcamento por Pavimento da Camara</h2>
         
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
                <div className="flex-1 overflow-hidden px-4 pt-2.5 pb-2 flex flex-col justify-between">
                  <div className="space-y-1">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="py-1 border-b border-slate-700/60 last:border-0">
                        <div className="flex-1 min-w-0 pr-2">
                          <span className="text-white text-sm md:text-[15px] font-medium leading-tight">{item.name}</span>
                          <span className="text-slate-400 text-xs ml-1">· {item.qtd}x</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grand Total */}
        <div className="shrink-0 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl px-4 py-2.5 border border-green-400 shadow-xl flex items-center justify-between gap-4">
          <p className="text-green-100 text-base md:text-lg font-medium">Valor Total</p>
          <p className="text-white text-3xl md:text-4xl font-bold leading-none">
            R$ {totalGeral.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>

      </div>
    </div>
  );
}
