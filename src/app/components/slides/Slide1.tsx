import { Sparkles } from 'lucide-react';

export function Slide1() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563394867331-e687a36112fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5JTIwSW9UfGVufDF8fHx8MTc3Mzk1MDg0OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ambiente publico moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-slate-900/95 to-purple-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-12 text-center overflow-auto">
        <div className="flex items-center gap-3 mb-8">
          <Sparkles className="text-yellow-400" size={48} />
          <div className="h-12 w-1 bg-blue-400"></div>
          <Sparkles className="text-blue-400" size={48} />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Inovação e Inteligência<br />Operacional
        </h1>

        <p className="text-2xl md:text-3xl lg:text-4xl text-blue-300 mb-4">
          O Futuro da Camara Municipal
        </p>

        <div className="mt-8 px-6 md:px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
          <p className="text-lg md:text-2xl text-white">
            Ecossistema de Automação IoT e Gestão Integrada
          </p>
        </div>

        <div className="mt-16 flex gap-8 text-slate-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span>Eficiência Energética</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-400"></div>
            <span>Gestão Inteligente</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span>Futuro Sustentável</span>
          </div>
        </div>
      </div>
    </div>
  );
}
