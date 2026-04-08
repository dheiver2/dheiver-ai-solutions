# Página de Mentoria em IA - Guia de Implementação

## O que foi criado

Uma página de vendas otimizada para celular para promover sua mentoria em IA, com credenciais e autoridade do seu currículo.

### Arquivos criados:

**Páginas:**
- `src/pages/Mentoring.tsx` - Página principal de mentoria

**Componentes de Mentoria:**
- `src/components/mentoring/MentoringHero.tsx` - Hero section com foto de destaque
- `src/components/mentoring/MentoringAuthority.tsx` - Credenciais, certificações e impacto
- `src/components/mentoring/MentoringBenefits.tsx` - Benefícios, curriculum e planos de preço
- `src/components/mentoring/MentoringFaq.tsx` - Perguntas frequentes
- `src/components/mentoring/MentoringCta.tsx` - Call-to-action final com depoimentos

### Modificações feitas:

1. **App.tsx**: Adicionado lazy load e rota para a página de mentoria
2. **Navigation.tsx**: Adicionado link de navegação "🚀 Mentoria IA"

## Como acessar

```
Local: http://localhost:5173/#/mentoria
Production: https://seu-dominio.com/#/mentoria
```

## Personalizações recomendadas

### 1. Foto de Destaque
A página atualmente usa `/dheiver-photo.jpg` que já existe no seu projeto. Se quiser usar uma foto diferente:
- Coloque a imagem em `public/images/`
- Atualize o caminho em `src/components/mentoring/MentoringHero.tsx` linha 21

### 2. Números & Credenciais
Atualize os números no `MentoringHero.tsx` se mudar:
- Artigos publicados
- Projetos entregues
- Leitores

### 3. Preços
Edite em `MentoringBenefits.tsx` as opções de investimento:
- Plano Mensal
- Plano Semestral
- Parcelamento

### 4. Links de WhatsApp
Atualize o número `5551989889898` em todos os componentes se mudar o telefone:
```bash
# Buscar todas as ocorrências:
grep -r "5551989889898" src/components/mentoring/
```

### 5. Estrutura do Programa
Customize o curriculum em `MentoringBenefits.tsx`:
- Duração dos meses
- Tópicos específicos
- Projetos

### 6. Depoimentos
Adicione seus próprios depoimentos em `MentoringCta.tsx`:
- Nome do cliente
- Empresa/Posição
- Resultado alcançado

## Recursos implementados

✅ **Mobile-first design** - Otimizado para celular
✅ **Alta conversão** - CTAs estratégicos em múltiplas seções
✅ **Prova de autoridade** - Credenciais extraídas do seu CV
✅ **Depoimentos** - Validação social com testimonials
✅ **FAQ completo** - Respostas às dúvidas comuns
✅ **Preços claros** - Transparência de investimento
✅ **Integração WhatsApp** - Links diretos para contato

## Fluxo de conversão

1. **Hero** - Impacto imediato com foto e proposta de valor
2. **Authority** - Prova de credenciais e experiência
3. **Benefits** - Mostra o valor do programa
4. **FAQ** - Remove objeções
5. **CTA Final** - Múltiplos pontos de conversão para WhatsApp

## Estatísticas para monitorar

- Cliques no "Me Inscrever Agora"
- Cliques no "Agendar Conversa"
- Mensagens recebidas no WhatsApp
- Tempo de permanência na página

## Próximos passos (Opcional)

1. **Analytics** - Adicionar Google Analytics para rastrear conversões
2. **Email capture** - Adicionar form de email para lead magnet
3. **Video** - Adicionar vídeo de apresentação na hero
4. **Integração de calendário** - Adicionar Calendly ou similar
5. **Blog** - Criar artigos sobre IA para SEO

## Suporte

Para alterar cores, fonts ou layout global, edite `tailwind.config.js` e os arquivos CSS relevantes.

---

**Status**: ✅ Pronto para usar
**Última atualização**: 2026-04-08
