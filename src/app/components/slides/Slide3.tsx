import { Cpu, Smartphone, Zap, Network } from 'lucide-react';

export function Slide3() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-slate-900 to-purple-900 p-6 md:p-12 overflow-auto">
      <div className="max-w-7xl mx-auto h-full flex flex-col min-h-0">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">A Solução Proposta</h2>
          <p className="text-2xl text-blue-300">Sistema Integrado de Automação e Gestão Inteligente</p>
        </div>

        {/* Main Diagram */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-5xl">
            {/* Center - Building */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl border-4 border-white/20">
                <Network size={64} className="text-white mx-auto mb-4" />
                <p className="text-2xl font-bold text-white text-center">Camara Municipal Conectada</p>
              </div>
            </div>

            {/* Top Left - Hardware */}
            <div className="absolute top-0 left-0 bg-slate-800 rounded-2xl p-6 border border-blue-500 shadow-xl w-64">
              <Cpu size={40} className="text-blue-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Hardware IoT</h3>
              <p className="text-slate-300 text-sm">Sensores de presença e temperatura</p>
            </div>

            {/* Top Right - App Mobile */}
            <div className="absolute top-0 right-0 bg-slate-800 rounded-2xl p-6 border border-purple-500 shadow-xl w-64">
              <Smartphone size={40} className="text-purple-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">App Mobile</h3>
              <p className="text-slate-300 text-sm">Controle na palma da mão</p>
            </div>

            {/* Bottom Left - Automação */}
            <div className="absolute bottom-0 left-0 bg-slate-800 rounded-2xl p-6 border border-green-500 shadow-xl w-64">
              <Zap size={40} className="text-green-400 mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Automação</h3>
              <p className="text-slate-300 text-sm">Controle inteligente de energia</p>
            </div>

            {/* Bottom Right - Gestão */}
            <div className="absolute bottom-0 right-0 bg-slate-800 rounded-2xl p-6 border border-yellow-500 shadow-xl w-64">
              <svg className="w-10 h-10 text-yellow-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">Painel Gestor</h3>
              <p className="text-slate-300 text-sm">Dados em tempo real</p>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <line x1="32%" y1="20%" x2="45%" y2="45%" stroke="#3b82f6" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
              <line x1="68%" y1="20%" x2="55%" y2="45%" stroke="#a855f7" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
              <line x1="32%" y1="80%" x2="45%" y2="55%" stroke="#22c55e" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
              <line x1="68%" y1="80%" x2="55%" y2="55%" stroke="#eab308" strokeWidth="3" strokeDasharray="5,5" opacity="0.5" />
            </svg>
          </div>
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30">
            <p className="text-blue-300 font-semibold text-center">Integração Total</p>
          </div>
          <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
            <p className="text-purple-300 font-semibold text-center">Controle Centralizado</p>
          </div>
          <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/30">
            <p className="text-green-300 font-semibold text-center">Economia Garantida</p>
          </div>
        </div>
      </div>
    </div>
  );
}
