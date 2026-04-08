import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const MentoringHero = () => {
  // Timer para próxima turma (primeira segunda do próximo mês)
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getNextFirstMonday = () => {
      const now = new Date();
      let target = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      while (target.getDay() !== 1) {
        target.setDate(target.getDate() + 1);
      }
      if (target <= now) {
        target = new Date(now.getFullYear(), now.getMonth() + 2, 1);
        while (target.getDay() !== 1) {
          target.setDate(target.getDate() + 1);
        }
      }
      return target;
    };

    const targetTime = getNextFirstMonday().getTime();

    const updateTimer = () => {
      const diff = Math.max(0, targetTime - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white pt-6 pb-6">
      <div className="max-w-xl mx-auto px-5">
        {/* Foto */}
        <div className="flex justify-center mb-5">
          <div className="w-40 h-52 md:w-48 md:h-60 overflow-hidden">
            <img
              src="/dheiver-photo.png"
              alt="Dr. Dheiver Santos"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline com DOR */}
        <div className="text-center">
          <p className="text-sm font-bold text-amber-800 mb-3">
            ⚠️ 3.000+ VAGAS DE IA ABERTAS SÓ ESTE MÊS NO BRASIL
          </p>

          <h1 className="text-3xl md:text-5xl font-bold text-black mb-2 leading-tight">
            Torne-se <span className="text-amber-800">Engenheiro de IA JR</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            em apenas 3 meses
          </h2>

          <p className="text-sm text-stone-800 mb-5 leading-relaxed">
            Mesmo que você <strong>nunca tenha trabalhado com IA.</strong><br />
            Mentoria 1-on-1 com PhD que já entregou 150+ projetos<br />
            para Santander, Grupo Fleury e Petrobras.
          </p>

          {/* Timer de Escassez */}
          <div className="bg-stone-950 p-4 mb-5">
            <p className="text-xs text-amber-600 font-bold mb-2">🔥 PRÓXIMA TURMA FECHA EM:</p>
            <div className="flex justify-center gap-3">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</p>
                <p className="text-xs text-stone-300">HORAS</p>
              </div>
              <span className="text-2xl font-bold text-amber-500">:</span>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</p>
                <p className="text-xs text-stone-300">MIN</p>
              </div>
              <span className="text-2xl font-bold text-amber-500">:</span>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</p>
                <p className="text-xs text-stone-300">SEG</p>
              </div>
            </div>
            <p className="text-xs text-stone-300 mt-2">Apenas <span className="text-amber-600 font-bold">3 vagas restantes</span></p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-5 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-800">100+</p>
              <p className="text-xs text-stone-800 font-bold">ARTIGOS</p>
            </div>
            <div className="border-x border-stone-300">
              <p className="text-2xl md:text-3xl font-bold text-amber-800">150+</p>
              <p className="text-xs text-stone-800 font-bold">PROJETOS</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-amber-800">40K+</p>
              <p className="text-xs text-stone-800 font-bold">LEITORES</p>
            </div>
          </div>

          {/* CTA Emocional */}
          <Button
            size="lg"
            className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold h-12 rounded-none transition-colors duration-200 mb-2"
            onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20mudar%20minha%20carreira%20com%20a%20mentoria%20em%20IA!'}
          >
            QUERO SER ENGENHEIRO DE IA →
          </Button>

          <p className="text-xs text-stone-800 font-bold">
            ✓ 8+ Mentees/mês &nbsp;|&nbsp; ✓ Garantia 14 dias &nbsp;|&nbsp; ✓ R$ 578/mês
          </p>
        </div>
      </div>
    </div>
  );
};

export default MentoringHero;
