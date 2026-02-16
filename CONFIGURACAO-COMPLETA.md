# 🚀 GUIA COMPLETO DE CONFIGURAÇÃO E TESTE

## ✅ ALTERAÇÕES FEITAS:
- ❌ Removido TUDO relacionado a "grátis"
- ❌ Removido menção a "garantia"
- ✅ Preço: €39,90 pagamento único
- ✅ Botões: "Comprar Agora"
- ✅ Pagamento via Stripe
- ✅ Acesso imediato após pagamento

---

## 📋 PASSO A PASSO COMPLETO

### **ETAPA 1: PREPARAR ARQUIVOS (5 minutos)**

1. **Baixe TODOS os arquivos:**
   - index.html
   - dashboard.html
   - flashcards.html
   - historias.html
   - preencher-lacunas.html
   - exercicios-database.js

2. **Crie uma pasta no seu computador:**
   ```
   Crie: C:\espanhol-pro (Windows)
   ou: ~/espanhol-pro (Mac/Linux)
   ```

3. **Coloque todos os arquivos na pasta**

---

### **ETAPA 2: TESTAR LOCALMENTE (10 minutos)**

#### **Teste 1: Landing Page**
1. Abra `index.html` no navegador (duplo clique)
2. Verifique:
   - ✅ Preço aparece como €39,90
   - ✅ Botões dizem "Comprar Agora"
   - ✅ NÃO tem menção a "grátis"
   - ✅ NÃO tem menção a "garantia"
   - ✅ Todas as 12 features aparecem
   - ✅ Comparação com concorrentes em €

#### **Teste 2: Dashboard**
1. No index.html, clique em "Entrar"
2. Vai abrir dashboard.html
3. Teste:
   - ✅ Veja os 19 módulos
   - ✅ Clique em um módulo → exercícios funcionam
   - ✅ Aba "Videoaulas" → 32 vídeos organizados
   - ✅ Aba "Listening" → 40 exercícios
   - ✅ Aba "Chat IA" → interface aparece
   - ✅ Filtros por nível funcionam

#### **Teste 3: Exercícios Novos**
1. Abra `preencher-lacunas.html`
2. Verifique:
   - ✅ 60 exercícios aparecem
   - ✅ Filtros por nível funcionam
   - ✅ Selecionar opção funciona
   - ✅ Verificar resposta funciona
   - ✅ Estatísticas atualizam
   - ✅ Dicas funcionam

#### **Teste 4: Flashcards**
1. Abra `flashcards.html`
2. Teste:
   - ✅ Cards aparecem
   - ✅ Clicar vira o card
   - ✅ Botões Difícil/Bom/Fácil funcionam
   - ✅ Próximo card aparece
   - ✅ Estatísticas atualizam

#### **Teste 5: Histórias**
1. Abra `historias.html`
2. Verifique:
   - ✅ 6 histórias aparecem
   - ✅ Filtros por nível funcionam
   - ✅ Abrir história funciona
   - ✅ Passar mouse em palavras → tradução aparece
   - ✅ Responder questões funciona

---

### **ETAPA 3: CONFIGURAR PARA PRODUÇÃO**

#### **A. Configurar Firebase (Backend Grátis)**

**1. Criar projeto:**
- Acesse: https://console.firebase.google.com
- Clique "Adicionar projeto"
- Nome: "espanhol-pro"
- Desabilite Analytics
- Criar

**2. Ativar Authentication:**
- Menu lateral → Authentication
- Começar
- Email/Senha → Ativar
- Salvar

**3. Ativar Firestore:**
- Menu lateral → Firestore Database
- Criar banco de dados
- Modo: Produção
- Localização: europe-west1 (Bélgica)
- Ativar

**4. Pegar credenciais:**
- Configurações (⚙️) → Configurações do projeto
- Seus apps → Web (</>)
- Registrar app: "EspañolPro Web"
- COPIE o código que aparece:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "espanhol-pro.firebaseapp.com",
  projectId: "espanhol-pro",
  storageBucket: "espanhol-pro.appspot.com",
  messagingSenderId: "123...",
  appId: "1:123..."
};
```

**5. Colar no código:**
- Abra `index.html` no editor
- Procure (Ctrl+F): `firebaseConfig`
- Cole suas credenciais reais
- Salve

---

#### **B. Configurar Stripe (Pagamentos)**

**1. Criar conta:**
- Acesse: https://stripe.com
- Criar conta
- Preencha dados da empresa
- Ative a conta

**2. Criar produto:**
- Dashboard Stripe → Produtos
- Criar produto
- Nome: "EspañolPro - Acesso Completo"
- Descrição: "Acesso vitalício à plataforma"
- Preço: €39,90
- Tipo: Pagamento único
- Salvar

**3. Pegar chaves:**
- Developers → API Keys
- Copie:
  - Publishable key (começa com pk_...)
  - Secret key (começa com sk_...)

**4. Criar link de pagamento:**
- Produtos → EspañolPro
- Criar link de pagamento
- Copie o link gerado

**5. Integrar no site:**
- Abra `index.html`
- Procure função `selectPlan`
- Substitua por:

```javascript
function selectPlan(plan) {
    // Redirecionar para Stripe
    window.location.href = 'SEU_LINK_STRIPE_AQUI';
}
```

---

#### **C. Fazer Deploy (Hospedar Online)**

**Opção 1: Vercel (Recomendado - GRÁTIS)**

1. **Criar conta GitHub:**
   - https://github.com
   - Sign up

2. **Criar repositório:**
   - New repository
   - Nome: espanhol-pro
   - Public
   - Create repository

3. **Fazer upload dos arquivos:**
   - Add file → Upload files
   - Arraste TODOS os arquivos
   - Commit changes

4. **Deploy no Vercel:**
   - Acesse: https://vercel.com
   - Sign up with GitHub
   - New Project
   - Import: espanhol-pro
   - Deploy

5. **Pronto!**
   - Seu site estará em: espanhol-pro.vercel.app
   - SSL (https) automático
   - CDN global

**Opção 2: Netlify (Alternativa)**

1. Acesse: https://netlify.com
2. Arraste a pasta espanhol-pro
3. Deploy
4. Site online em segundos!

---

#### **D. Configurar Chat IA (Opcional)**

**1. Criar conta Anthropic:**
- https://console.anthropic.com
- Sign up
- Adicionar cartão

**2. Adicionar créditos:**
- Settings → Billing
- Add credits: $5 USD

**3. Gerar API Key:**
- API Keys
- Create Key
- Nome: EspanholPro
- COPIAR chave (sk-ant-api03-...)

**4. Adicionar no código:**
- Abra `dashboard.html`
- Procure: `ANTHROPIC_API_KEY`
- Cole sua chave
- Salve

**Custo:**
- ~$0.003 por mensagem
- $5 = ~1.500 mensagens
- Muito barato!

---

### **ETAPA 4: ATIVAR ÁUDIOS**

**1. Abra `dashboard.html`**

**2. Procure a função `playAudio`**

**3. Substitua por:**

```javascript
function playAudio(idx) {
    const exercise = audioExercises[idx];
    
    // Text-to-Speech GRÁTIS
    const utterance = new SpeechSynthesisUtterance(exercise.audioText);
    utterance.lang = 'es-ES';
    utterance.rate = 0.9;
    
    speechSynthesis.speak(utterance);
    
    showAchievement('🔊 Reproduzindo áudio!');
}
```

**4. Salve e teste!**

---

### **ETAPA 5: ADICIONAR VÍDEOS REAIS**

**1. Encontre vídeos no YouTube:**
- Pesquise: "Spanish grammar A2"
- Pesquise: "Learn Spanish B1"
- etc.

**2. Pegue o ID do vídeo:**
- URL: youtube.com/watch?v=**ABC123**
- ID = ABC123

**3. Edite dashboard.html:**
- Procure: `videosData`
- Troque `example1` por `ABC123`
- Repita para todos

**4. Salve e teste!**

---

## 🎯 CHECKLIST FINAL

Antes de lançar, verifique:

### **Funcionalidades:**
- [ ] Landing page carrega
- [ ] Preço €39,90 aparece corretamente
- [ ] Dashboard funciona
- [ ] Exercícios funcionam
- [ ] Flashcards funcionam
- [ ] Histórias funcionam
- [ ] Filtros por nível funcionam
- [ ] Áudios tocam
- [ ] Vídeos carregam

### **Configuração:**
- [ ] Firebase configurado
- [ ] Stripe configurado
- [ ] Site hospedado online
- [ ] Chat IA funcionando (opcional)
- [ ] Domínio próprio (opcional)

### **Conteúdo:**
- [ ] Todos os textos revisados
- [ ] Links de vídeos reais
- [ ] Informações de contato corretas

---

## 💰 CUSTOS MENSAIS

**Começando (0-100 alunos):**
- Firebase: €0
- Vercel: €0
- Stripe: 2,9% + €0,25 por transação
- Chat IA: €0-10
- **TOTAL: ~€10/mês**

**Crescendo (100-500 alunos):**
- Firebase: €0-20
- Vercel: €0
- Stripe: taxas por transação
- Chat IA: €20-50
- **TOTAL: ~€50/mês**

---

## 🚀 LANÇAMENTO

**Estratégia sugerida:**

1. **Fase Beta (1 mês):**
   - Ofereça para 10 amigos/conhecidos
   - Peça feedback honesto
   - Ajuste o que for necessário

2. **Lançamento Suave:**
   - Anuncie em redes sociais
   - Grupos de Facebook de brasileiros na Europa
   - Fóruns de aprendizado de idiomas

3. **Marketing:**
   - Instagram: @espanholpro
   - TikTok: Dicas rápidas de espanhol
   - Facebook Ads: €5-10/dia

---

## 📞 TROUBLESHOOTING

### **Problema: Site não abre**
- Verifique se todos arquivos estão na mesma pasta
- Abra pelo navegador (Chrome/Edge)

### **Problema: Exercícios não funcionam**
- Verifique se exercicios-database.js está na pasta
- Veja console do navegador (F12)

### **Problema: Firebase não conecta**
- Verifique credenciais copiadas corretamente
- Sem espaços extras

### **Problema: Stripe não funciona**
- Confirme se link de pagamento está correto
- Teste com cartão de teste

---

## ✅ VOCÊ ESTÁ PRONTO!

Com tudo configurado, você terá:
✅ Plataforma 100% funcional
✅ Pagamentos funcionando
✅ Hospedagem online
✅ Backend configurado
✅ 307 exercícios ativos

**PRÓXIMO PASSO: VENDER E FATURAR! 💰**

Boa sorte! 🚀
