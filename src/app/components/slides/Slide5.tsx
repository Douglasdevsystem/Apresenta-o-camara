import { Smartphone, CheckSquare, Calendar, Bell, Users } from 'lucide-react';

export function Slide5() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 p-4 md:p-8 lg:p-10 overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col min-h-0">
        {/* Header */}
        <div className="mb-4 md:mb-5 lg:mb-6 shrink-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3">Aplicativo do Servidor e Gestor</h2>
          <p className="text-lg md:text-xl text-purple-300">Tudo na palma da mão</p>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left - Phone Mockup */}
          <div className="hidden lg:flex justify-center items-center min-h-0">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-[min(26vw,320px)] h-[min(62vh,560px)] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-800 rounded-b-3xl z-20"></div>

                {/* Screen */}
                <div className="relative h-full bg-gradient-to-br from-blue-600 to-purple-600 p-6 overflow-auto">
                  <img
                    src="https://images.unsplash.com/photo-1644143153646-f36282dfb953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2JpbGUlMjBhcHAlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzczOTUwODUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="App Dashboard"
                    className="w-full h-full object-cover rounded-2xl opacity-40"
                  />

                  {/* App Header */}
                  <div className="absolute top-12 left-4 right-4">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20">
                      <p className="text-white text-sm">Bem-vindo(a),</p>
                      <p className="text-white font-bold text-lg">Gestor Operacional</p>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30 flex items-center gap-3">
                      <div className="w-9 h-9 bg-green-500 rounded-lg flex items-center justify-center">
                        <CheckSquare size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Chamada Digital</p>
                        <p className="text-white/70 text-xs">Plenario Principal • Sessao ativa</p>
                      </div>
                    </div>

                    <div className="bg-white/20 backdrop-blur-md rounded-xl p-3 border border-white/30 flex items-center gap-3">
                      <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Calendar size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">Reservar Ambiente</p>
                        <p className="text-white/70 text-xs">Lab. Informática disponível</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-purple-500/30 rounded-[3rem] blur-3xl -z-10"></div>
            </div>
          </div>

          {/* Right - Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4 h-full min-h-0 content-start lg:content-center">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-green-500/30 hover:border-green-500 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                  <CheckSquare size={24} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Chamada Digital</h3>
              </div>
              <p className="text-slate-300 text-base md:text-lg leading-snug">
                Presenca registrada automaticamente via acesso aos ambientes. Sem papel, sem erros.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-blue-500/30 hover:border-blue-500 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center shrink-0">
                  <Calendar size={24} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Reserva de Ambientes</h3>
              </div>
              <p className="text-slate-300 text-base md:text-lg leading-snug">
                Reserve laboratórios, auditórios e recursos pelo celular em segundos.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-purple-500/30 hover:border-purple-500 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shrink-0">
                  <Bell size={24} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Notificações Push</h3>
              </div>
              <p className="text-slate-300 text-base md:text-lg leading-snug">
                Avisos instantâneos de eventos, mudanças de horário e comunicados importantes.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 md:p-5 border border-orange-500/30 hover:border-orange-500 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shrink-0">
                  <Users size={24} className="text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Perfis Integrados</h3>
              </div>
              <p className="text-slate-300 text-base md:text-lg leading-snug">
                Servidores, vereadores e gestores com interfaces personalizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
