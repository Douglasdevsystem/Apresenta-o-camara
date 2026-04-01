import { CalendarClock, ClipboardCheck, Wrench, Rocket, CheckCircle2 } from 'lucide-react';

const timeline = [
  {
    phase: 'Parte 1',
    period: 'Mes 1',
    title: 'Planejamento e Levantamento',
    icon: CalendarClock,
    gradient: 'from-amber-600 to-orange-600',
    border: 'border-amber-400',
    points: [
      'Reuniao de alinhamento com presidencia e equipe tecnica',
      'Mapeamento de gabinetes, setores e quadro eletrico',
      'Definição do escopo final de implantação',
    ],
  },
  {
    phase: 'Parte 2',
    period: 'Mes 2',
    title: 'Preparação de Infraestrutura',
    icon: Wrench,
    gradient: 'from-blue-600 to-cyan-600',
    border: 'border-blue-400',
    points: [
      'Organização dos painéis e trilhos DIN',
      'Adequação elétrica e passagem de cabeamento',
      'Testes elétricos de segurança por circuito',
    ],
  },
  {
    phase: 'Parte 3',
    period: 'Mes 3',
    title: 'Configuracao e Pre-Comissionamento',
    icon: ClipboardCheck,
    gradient: 'from-emerald-600 to-green-600',
    border: 'border-emerald-400',
    points: [
      'Programação do CLP ARMK ESP32',
      'Configuracao das logicas de acionamento',
      'Validacao de cenarios de uso por ambiente',
    ],
  },
  {
    phase: 'Parte 4',
    period: 'Mes 4',
    title: 'Instalacao Final de Equipamentos e Sensores',
    icon: Rocket,
    gradient: 'from-violet-600 to-fuchsia-600',
    border: 'border-violet-400',
    points: [
      'Instalacao final dos equipamentos com sensores',
      'Integracao em campo e testes de funcionamento',
      'Treinamento da equipe e entrada em operacao',
    ],
  },
];

export function Slide11() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-4 md:p-6 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col gap-3 min-h-0">
        <div className="shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">Tempo de Implantacao</h2>
          <p className="text-base md:text-lg text-indigo-300">Trilha de implementacao em 4 meses</p>
        </div>

        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
          {timeline.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="bg-slate-800/55 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden flex flex-col"
              >
                <div className={`bg-gradient-to-r ${item.gradient} px-4 py-3 border-b ${item.border}`}>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Icon size={20} className="text-white shrink-0" />
                      <p className="text-white text-sm md:text-base font-bold leading-tight">{item.phase}</p>
                    </div>
                    <span className="text-white/90 text-xs md:text-sm font-semibold bg-black/20 px-2 py-0.5 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-white text-base md:text-lg font-semibold mt-1 leading-tight">{item.title}</h3>
                </div>

                <div className="px-4 py-3 flex-1 min-h-0">
                  <ul className="space-y-2">
                    {item.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                        <span className="text-slate-200 text-sm md:text-[15px] leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}