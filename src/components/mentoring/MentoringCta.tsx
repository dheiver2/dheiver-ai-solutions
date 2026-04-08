import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const MentoringCta = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getNextFirstMonday = () => {
      const now = new Date();
      let target = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      while (target.getDay() !== 1) target.setDate(target.getDate() + 1);
      if (target <= now) {
        target = new Date(now.getFullYear(), now.getMonth() + 2, 1);
        while (target.getDay() !== 1) target.setDate(target.getDate() + 1);
      }
      return target;
    };

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = getNextFirstMonday().getTime();
      const diff = target - now;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-8 bg-white">
      <div className="max-w-xl mx-auto px-5 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-3 leading-tight">
          Sua carreira em IA começa<br />
          <span className="text-amber-700">com uma decisão.</span>
        </h2>

        <p className="text-sm text-stone-700 mb-5 leading-relaxed">
          Daqui 3 meses, você pode estar no mesmo lugar.<br />
          Ou pode estar empregado como Engenheiro de IA JR.
        </p>

        {/* Timer */}
        <div className="bg-stone-950 p-4 mb-5">
          <p className="text-xs text-amber-600 font-bold mb-2">INSCRIÇÕES FECHAM EM:</p>
          <div className="flex justify-center gap-3">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{String(timeLeft.days).padStart(2, '0')}</p>
              <p className="text-xs text-stone-400">DIAS</p>
            </div>
            <span className="text-2xl font-bold text-amber-700">:</span>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{String(timeLeft.hours).padStart(2, '0')}</p>
              <p className="text-xs text-stone-400">HORAS</p>
            </div>
            <span className="text-2xl font-bold text-amber-700">:</span>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{String(timeLeft.minutes).padStart(2, '0')}</p>
              <p className="text-xs text-stone-400">MIN</p>
            </div>
            <span className="text-2xl font-bold text-amber-700">:</span>
            <div className="text-center">
              <p className="text-2xl font-bold text-white">{String(timeLeft.seconds).padStart(2, '0')}</p>
              <p className="text-xs text-stone-400">SEG</p>
            </div>
          </div>
        </div>

        <Button
          size="lg"
          className="w-full bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold h-14 rounded-none transition-colors duration-200 mb-2"
          onClick={() => window.location.href = 'https://wa.me/5551989889898?text=Quero%20me%20inscrever%20na%20mentoria%20em%20IA!'}
        >
          QUERO SER ENGENHEIRO DE IA →
        </Button>

        <p className="text-xs text-stone-600 font-bold mb-5">
          ✓ R$ 578/mês &nbsp;|&nbsp; ✓ 5 vagas &nbsp;|&nbsp; ✓ Garantia 14 dias
        </p>

        {/* Steps */}
        <div className="flex justify-center gap-6 text-xs text-stone-500 font-bold mb-5">
          <div className="flex items-center gap-1.5">
            <span className="bg-amber-700 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">1</span>
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-amber-700 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">2</span>
            <span>Conversa</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="bg-amber-700 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold">3</span>
            <span>Inscrição</span>
          </div>
        </div>

        {/* Contact */}
        <div className="pt-4 border-t border-stone-200">
          <a
            href="https://wa.me/5551989889898"
            className="text-amber-700 font-bold text-sm hover:text-amber-800 transition-colors duration-200"
          >
            (51) 98988-9898
          </a>
          <p className="text-xs text-stone-400 mt-1">Dr. Dheiver Santos • PhD em IA</p>
        </div>
      </div>
    </div>
  );
};

export default MentoringCta;
