import React from 'react';
import { Instagram, Linkedin, MessageCircle } from 'lucide-react'; // Alterado WhatsApp para MessageCircle

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-gray-300 font-playfair text-2xl font-bold mb-4">
                Dr. Dheiver Santos
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Consultoria especializada em Inteligência Artificial avançada, 
                oferecendo soluções inovadoras para os desafios mais complexos 
                do mundo corporativo.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/dheiver-santos/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors group"
                  aria-label="LinkedIn - Dr. Dheiver Santos"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/santos.dheiver/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors group"
                  aria-label="Instagram - @santos.dheiver"
                >
                  <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/5551989889898?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços%20de%20IA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors group"
                  aria-label="WhatsApp - (51) 98988-9898"
                >
                  <MessageCircle size={20} className="group-hover:scale-110 transition-transform" /> {/* Alterado WhatsApp para MessageCircle */}
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gold-400">Serviços</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/services" className="hover:text-white transition-colors">Machine Learning</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Visão Computacional</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Processamento NLP</a></li>
                <li><a href="/services" className="hover:text-white transition-colors">Estratégia de IA</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gold-400">Contato</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="mailto:dheiver.santos@gmail.com" className="hover:text-white transition-colors">
                    dheiver.santos@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/5551989889898" className="hover:text-white transition-colors">
                    (51) 98988-9898
                  </a>
                </li>
                <li className="text-gray-400">Porto Alegre, RS</li>
                <li className="text-gray-400">Atendimento Nacional</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dr. Dheiver Santos. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
