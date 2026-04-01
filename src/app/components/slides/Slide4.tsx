import { Lightbulb, Wind, Shield, Cpu, Thermometer, Eye } from 'lucide-react';

export function Slide4() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 md:p-12 overflow-auto">
      <div className="max-w-7xl mx-auto h-full flex flex-col min-h-0">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-5xl font-bold text-white mb-4">Automacao de Ambientes</h2>
          <p className="text-2xl text-blue-300">Hardware IoT Inteligente e Seguro</p>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-8">
          {/* Left - Ambiente Visual */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1690079374922-7f50d5c1a102?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5JTIwSW9UfGVufDF8fHx8MTc3Mzk1MDg0OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ambiente institucional"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center">
              {/* Lightbulb Icon with Pulse */}
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full p-8">
                  <Lightbulb size={80} className="text-white" />
                </div>
              </div>

              {/* AC Icon with Pulse */}
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full p-8">
                  <Wind size={80} className="text-white" />
                </div>
              </div>

              <p className="text-white text-2xl font-bold mt-8">Controle Automatizado</p>
            </div>
          </div>

          {/* Right - Features */}
          <div className="flex flex-col gap-4">
            {/* Sensores */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 border border-purple-400">
              <div className="flex items-center gap-4 mb-3">
                <Eye size={32} className="text-white" />
                <h3 className="text-2xl font-bold text-white">Sensores de Presença</h3>
              </div>
              <p className="text-blue-100 text-lg">
                Detecta automaticamente quando ha pessoas no ambiente, ativando ou desativando os sistemas
              </p>
            </div>

            {/* Temperatura */}
            <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 border border-orange-400">
              <div className="flex items-center gap-4 mb-3">
                <Thermometer size={32} className="text-white" />
                <h3 className="text-2xl font-bold text-white">Controle de Temperatura</h3>
              </div>
              <p className="text-orange-100 text-lg">
                Ajusta o ar-condicionado automaticamente baseado na temperatura ideal
              </p>
            </div>

            {/* Contatores */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 border border-green-400">
              <div className="flex items-center gap-4 mb-3">
                <Cpu size={32} className="text-white" />
                <h3 className="text-2xl font-bold text-white">Acionamento Inteligente</h3>
              </div>
              <p className="text-green-100 text-lg">
                Contatores e relés controlam cargas de até 220V com segurança total
              </p>
            </div>

            {/* Proteção */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-6 border border-slate-500">
              <div className="flex items-center gap-4 mb-3">
                <Shield size={32} className="text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Proteção Elétrica</h3>
              </div>
              <p className="text-slate-300 text-lg">
                DPS, disjuntores e fusíveis garantem segurança máxima da instalação
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
