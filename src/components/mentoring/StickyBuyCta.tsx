import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import {
  MENTORING_INSTALLMENTS,
  MENTORING_MONTHLY_PRICE,
  MENTORING_TOTAL_PRICE,
  startMentoringCheckout,
} from './mentoringConfig';

const SCROLL_THRESHOLD = 500;

const StickyBuyCta = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const compute = () => {
      const y = window.scrollY;
      const scrolledEnough = y > SCROLL_THRESHOLD;
      const pricingEl = document.getElementById('mentoring-pricing');
      let pricingInView = false;
      if (pricingEl) {
        const rect = pricingEl.getBoundingClientRect();
        pricingInView = rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
      }
      setVisible(scrolledEnough && !pricingInView);
    };

    compute();
    window.addEventListener('scroll', compute, { passive: true });
    window.addEventListener('resize', compute);

    return () => {
      window.removeEventListener('scroll', compute);
      window.removeEventListener('resize', compute);
    };
  }, []);

  const handleClick = () => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: 'sticky_buy_cta',
        value: MENTORING_TOTAL_PRICE,
        currency: 'BRL',
      });
    }
    void startMentoringCheckout();
  };

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-all duration-300 md:inset-x-auto md:bottom-6 md:right-6 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div
        className="pointer-events-auto border-t border-amber-500/20 bg-[#07090F]/95 backdrop-blur md:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="mx-auto flex max-w-md items-center justify-between gap-3 px-3 py-2.5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-400/80">
              Mentoria IA - 3 meses
            </p>
            <p className="text-sm font-bold text-white">
              {MENTORING_INSTALLMENTS}x R$ {MENTORING_MONTHLY_PRICE}
            </p>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2.5 text-xs font-bold text-black shadow-lg shadow-amber-500/20 active:scale-[0.98]"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Compre aqui
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={handleClick}
        className="pointer-events-auto hidden items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-bold text-black shadow-2xl shadow-amber-500/30 transition hover:scale-[1.02] hover:shadow-amber-500/50 md:inline-flex"
      >
        <ShoppingCart className="h-4 w-4" />
        <span>
          Compre aqui &middot; {MENTORING_INSTALLMENTS}x R$ {MENTORING_MONTHLY_PRICE}
        </span>
      </button>
    </div>
  );
};

export default StickyBuyCta;
