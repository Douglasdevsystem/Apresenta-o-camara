import { AlertTriangle, TrendingDown, Clock, FileX } from 'lucide-react';

export function Slide2() {
  const problems = [
    {
      icon: TrendingDown,
      title: 'Desperdício de Energia',
      description: 'Ar-condicionado e luzes ligados sem necessidade',
      impact: 'Até 40% de desperdício energético',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Clock,
      title: 'Processos Manuais',
      description: 'Administração lenta e propensa a erros',
      impact: 'Perda de 15h/semana em tarefas repetitivas',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: FileX,
      title: 'Falta de Dados em Tempo Real',
      description: 'Sem visibilidade da ocupacao dos ambientes da Camara',
      impact: 'Decisões baseadas em suposições',
      color: 'from-yellow-500 to-red-500'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-12 overflow-auto">
      <div className="max-w-7xl mx-auto h-full flex flex-col min-h-0">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6 md:mb-12">
          <AlertTriangle className="text-yellow-400" size={32} />
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">O Desafio Atual</h2>
            <p className="text-base md:text-xl text-slate-400 mt-2">Problemas que afetam diretamente o resultado</p>
          </div>
        </div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-slate-600 transition-all hover:scale-105 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6`}>
                  <Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {problem.title}
                </h3>

                <p className="text-lg text-slate-300 mb-4 flex-1">
                  {problem.description}
                </p>

                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400 mb-1">Impacto:</p>
                  <p className="text-base font-semibold text-red-400">
                    {problem.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Warning */}
        <div className="mt-8 bg-red-500/10 border border-red-500/30 rounded-xl p-6 flex items-center gap-4">
          <AlertTriangle className="text-red-400 flex-shrink-0" size={32} />
          <div>
            <p className="text-xl text-red-200 font-semibold">
              Custo invisível: R$ 3.000 - R$ 8.000 por mês em desperdício
            </p>
            <p className="text-slate-400 mt-1">
              Sem controle adequado, os custos operacionais crescem silenciosamente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
