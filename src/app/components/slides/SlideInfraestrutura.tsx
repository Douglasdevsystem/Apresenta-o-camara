import { Cable, Network, Router, Wrench, Building2 } from 'lucide-react';

const teamRoles = ['Eletricista', 'Engenheiro Eletrico', 'Engenheiro Civil', 'Ajudante'];

const infrastructureItems = [
  {
    title: 'Rede e Conectividade',
    icon: Network,
    color: 'from-sky-600 to-cyan-600',
    items: ['Switches gerenciaveis', 'Pontos de rede dedicados', 'Segmentacao por setor', 'Software de monitoramento'],
  },
  {
    title: 'Cabeamento Estruturado',
    icon: Cable,
    color: 'from-emerald-600 to-green-600',
    items: ['Cabos CAT6 e organizacao', 'Canaletas e identificacao', 'Padrao tecnico de instalacao'],
  },
  {
    title: 'Equipamentos de Borda',
    icon: Router,
    color: 'from-amber-600 to-orange-600',
    items: ['Roteadores/APs corporativos', 'Politica de acesso', 'Monitoramento de disponibilidade'],
  },
  {
    title: 'Montagem e Comissionamento',
    icon: Wrench,
    color: 'from-violet-600 to-fuchsia-600',
    items: ['Instalacao fisica', 'Testes funcionais', 'Entrega tecnica operacional'],
  },
];

export function SlideInfraestrutura() {
  const totalInfraestrutura = 151460.00;

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 md:p-5 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-2 min-h-0">
        <div className="shrink-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Orcamento de Infraestrutura</h2>
          <p className="text-base md:text-lg text-slate-400">Base tecnica para implantacao do projeto</p>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-2">
          {infrastructureItems.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 flex flex-col overflow-hidden">
                <div className={`bg-gradient-to-r ${block.color} px-4 py-3 flex items-center gap-2 shrink-0`}>
                  <Icon size={22} className="text-white shrink-0" />
                  <h3 className="text-base md:text-lg font-bold text-white">{block.title}</h3>
                </div>
                <div className="flex-1 px-4 py-3">
                  <ul className="space-y-2">
                    {block.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-white text-sm md:text-[15px] leading-tight border-b border-slate-700/60 pb-2 last:border-0 last:pb-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl px-4 py-2.5 border border-blue-400 shadow-xl">
          <div className="flex items-center justify-between gap-3 mb-2">
            <div className="flex items-center gap-3">
            <Building2 size={20} className="text-white shrink-0" />
            <p className="text-blue-100 text-base md:text-lg font-medium">Infraestrutura preparada para escalabilidade e expansao futura.</p>
            </div>
            <p className="text-white text-lg md:text-2xl font-bold whitespace-nowrap">
              Valor Total: R$ {totalInfraestrutura.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {teamRoles.map((role) => (
              <span
                key={role}
                className="text-white text-xs md:text-sm font-semibold bg-black/20 border border-white/20 rounded-full px-3 py-1"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}