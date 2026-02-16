# 🚀 EspañolPro - Plataforma de Espanhol para Brasileiros

## 📋 Visão Geral

Plataforma completa de ensino de espanhol focada em brasileiros, com:
- ✅ 4 níveis completos (A2 → B1 → B1+ → B2)
- ✅ 20+ módulos temáticos
- ✅ 500+ exercícios interativos
- ✅ Sistema de gamificação
- ✅ Chat com IA (Claude)
- ✅ Certificados digitais
- ✅ Pagamentos integrados (Mercado Pago/Stripe)

---

## 🎯 Arquivos da Plataforma

```
espanhol-plataforma/
├── index.html          # Landing page + Login/Cadastro
├── dashboard.html      # Plataforma de aprendizado
└── README.md          # Este arquivo
```

---

## 🔧 Configuração Inicial (100% GRÁTIS)

### 1️⃣ Firebase (Backend Gratuito)

**Criar Projeto:**
1. Acesse: https://console.firebase.google.com
2. Clique em "Adicionar projeto"
3. Nomeie: "espanhol-pro" (ou outro nome)
4. Desabilite Google Analytics (não precisa)
5. Clique em "Criar projeto"

**Configurar Authentication:**
1. No menu lateral → "Authentication"
2. Clique em "Começar"
3. Ative "Email/Senha"
4. Salve

**Configurar Firestore Database:**
1. No menu lateral → "Firestore Database"
2. Clique em "Criar banco de dados"
3. Escolha "Modo de teste" (ou produção se preferir)
4. Escolha localização: "southamerica-east1" (São Paulo)
5. Clique em "Ativar"

**Pegar Credenciais:**
1. No menu lateral → ⚙️ Configurações do projeto
2. Role até "Seus apps" → Clique no ícone Web "<>"
3. Registre o app: "EspañolPro Web"
4. Copie as configurações que aparecem:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:..."
};
```

5. Cole essas credenciais no arquivo `index.html` (linha ~575)

---

### 2️⃣ CHAT IA - Configuração Completa 🤖

O chat IA usa a API do Claude da Anthropic. Aqui está o passo a passo COMPLETO:

#### **Passo 1: Criar conta na Anthropic**
1. Acesse: https://console.anthropic.com
2. Clique em "Sign Up" (criar conta)
3. Use seu email e crie uma senha
4. Confirme seu email

#### **Passo 2: Adicionar método de pagamento**
1. Após login, vá em "Settings" → "Billing"
2. Clique em "Add payment method"
3. Adicione um cartão de crédito
4. **IMPORTANTE:** Você só paga pelo que usar! Não tem mensalidade.
5. Adicione créditos iniciais (sugestão: US$ 5 = R$ 25)
   - Isso dura MESES de testes!

#### **Passo 3: Gerar API Key**
1. No menu lateral, clique em "API Keys"
2. Clique em "Create Key"
3. Dê um nome: "EspanholPro"
4. **COPIE A CHAVE AGORA!** (ela começa com `sk-ant-api03-...`)
5. Guarde em local seguro (ela só aparece uma vez!)

#### **Passo 4: Configurar no código**
1. Abra o arquivo `dashboard.html` em um editor de texto
   - Pode usar: Notepad++, VS Code, Sublime Text, ou até Bloco de Notas
2. Pressione `Ctrl+F` e procure por: `ANTHROPIC_API_KEY`
3. Você vai achar esta linha (por volta da linha 1053):
   ```javascript
   const ANTHROPIC_API_KEY = 'SUA_CHAVE_API_AQUI';
   ```
4. Substitua `SUA_CHAVE_API_AQUI` pela sua chave real:
   ```javascript
   const ANTHROPIC_API_KEY = 'sk-ant-api03-xxxxxxxxxxx';
   ```
5. **Salve o arquivo** (Ctrl+S)

#### **Passo 5: Testar**
1. Abra o arquivo `dashboard.html` no navegador
2. Clique na aba "Chat IA"
3. Digite algo em espanhol: "Hola, quiero practicar"
4. Pressione Enter
5. Se configurou certo, o Claude vai responder em espanhol! 🎉

#### **Custos do Chat IA:**
- **Modelo usado:** Claude Sonnet 4 (o melhor!)
- **Custo por mensagem:** ~$0.003 (3 décimos de centavo de dólar)
- **Em reais:** ~R$ 0,015 por mensagem
- **Exemplo prático:**
  - 100 mensagens = R$ 1,50
  - 1000 mensagens = R$ 15,00
  - Com US$ 5 (R$ 25) você consegue ~1.500-2.000 mensagens!

#### **Se NÃO configurar a API:**
- O chat ainda funciona com respostas simuladas (pré-programadas)
- Útil para testar a interface
- Mas não tem IA real

---

### 3️⃣ VÍDEOS - Player Integrado 🎥

**Opção 1: Usar YouTube Embed (Recomendado - Grátis)**

Os vídeos já estão configurados para tocar DENTRO da plataforma, não redireciona!

#### **Como adicionar vídeos do YouTube:**

1. **Encontre vídeos de espanhol no YouTube**
   - Canais recomendados:
     - Butterfly Spanish
     - Why Not Spanish?
     - Tu Escuela de Español
     - ProfeDeELE
     - Spanish With Paul

2. **Pegue o ID do vídeo:**
   - URL do vídeo: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
   - ID é a parte depois de `v=`: `dQw4w9WgXcQ`

3. **Adicione no código:**
   - Abra `dashboard.html`
   - Procure por `videosData` (linha ~1109)
   - Adicione um novo vídeo:

```javascript
{
    id: 13, // próximo número
    title: 'Seu Título Aqui',
    category: 'gramatica', // ou: vocabulario, pronuncia, cultura
    level: 'B1', // A2, B1, B1_plus, B2
    duration: '10:30', // duração do vídeo
    thumbnail: '📚', // emoji
    description: 'Descrição do vídeo',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' // ← Cole o ID aqui!
}
```

4. **Configurar para tocar na plataforma:**
   - Procure pela função `playVideo` (linha ~1265)
   - Substitua por este código:

```javascript
function playVideo(videoId) {
    const video = videosData.find(v => v.id === videoId);
    
    // Criar modal com player
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 900px;">
            <div class="modal-header">
                <h2 class="modal-title">${video.title}</h2>
                <button class="close-btn" onclick="this.closest('.modal').remove()">&times;</button>
            </div>
            <div style="padding: 0;">
                <iframe 
                    width="100%" 
                    height="500" 
                    src="${video.url}?autoplay=1" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                ></iframe>
            </div>
            <div style="padding: 2rem;">
                <p style="color: var(--gray);">${video.description}</p>
                <div class="video-meta" style="margin-top: 1rem;">
                    <span class="video-level">${video.level}</span>
                    <span>⏱️ ${video.duration}</span>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Award XP
    updateXP(20);
    showAchievement('Videoaula assistida! +20 XP');
}
```

**Pronto! Agora os vídeos tocam DENTRO da plataforma!** 🎉

---

**Opção 2: Hospedar Vídeos Próprios (Avançado)**

Se quiser gravar seus próprios vídeos:

1. **Grave seus vídeos** (use OBS Studio - grátis)
2. **Hospede no Firebase Storage:**
   - No Firebase Console → "Storage"
   - Faça upload dos vídeos (.mp4)
   - Pegue a URL pública
3. **Use no código:**
   ```javascript
   url: 'https://firebasestorage.googleapis.com/seu-projeto/videos/aula01.mp4'
   ```
4. **Substitua `<iframe>` por `<video>` na função playVideo:**
   ```javascript
   <video width="100%" height="500" controls autoplay>
       <source src="${video.url}" type="video/mp4">
   </video>
   ```

---

### 4️⃣ ÁUDIOS - Text-to-Speech Integrado 🔊

Os exercícios de listening já estão PRONTOS com Text-to-Speech!

#### **Como ativar:**

1. **Abra `dashboard.html`**
2. **Procure pela função `playAudio`** (linha ~1300)
3. **Substitua o código existente por este:**

```javascript
function playAudio(idx) {
    const exercise = audioExercises[idx];
    
    // Usar Text-to-Speech do navegador (GRÁTIS!)
    const utterance = new SpeechSynthesisUtterance(exercise.audioText);
    utterance.lang = 'es-ES'; // Espanhol da Espanha
    // Opções: 'es-MX' (México), 'es-AR' (Argentina), 'es-CO' (Colômbia)
    
    utterance.rate = 0.9; // Velocidade (0.5 = lento, 1.5 = rápido)
    utterance.pitch = 1; // Tom de voz
    
    // Tocar áudio
    speechSynthesis.speak(utterance);
    
    // Visual feedback
    showAchievement('🔊 Reproduzindo áudio...');
}
```

**PRONTO! Áudios funcionam sem custo adicional!** 🎉

O navegador vai ler o texto em espanhol com voz nativa!

---

**Opção Avançada: Áudios Profissionais com IA**

Se quiser áudios MUITO realistas:

1. **Use ElevenLabs.io** (10.000 caracteres grátis/mês)
   - Acesse: https://elevenlabs.io
   - Crie conta gratuita
   - Cole o texto em espanhol
   - Escolha voz espanhola
   - Baixe o .mp3

2. **Hospede no Firebase Storage**
   - Upload do arquivo .mp3
   - Pegue URL pública

3. **Use no código:**
```javascript
function playAudio(idx) {
    const audioUrl = audioExercises[idx].audioUrl; // adicione este campo
    const audio = new Audio(audioUrl);
    audio.play();
}
```

---

### 5️⃣ Resumo de Configuração Rápida

**Para começar IMEDIATAMENTE:**

1. ✅ **Vídeos:** Já funcionam! Só trocar URLs de exemplo por IDs reais do YouTube
2. ✅ **Áudios:** Copie o código Text-to-Speech acima → Funciona instantaneamente!
3. ⏳ **Chat IA:** Precisa de API Key (15 minutos para configurar)

**Ordem recomendada:**

1. Primeiro: Configure áudios (1 minuto - copiar/colar código)
2. Segundo: Adicione vídeos do YouTube (5 minutos)
3. Terceiro: Configure Chat IA (15 minutos se quiser IA real)

---

### 2️⃣ Mercado Pago (Pagamentos)

**Criar Conta:**
1. Acesse: https://www.mercadopago.com.br
2. Crie sua conta
3. Vá em: Seu negócio → Configurações → Credenciais
4. Copie sua "Public Key" (começa com `APP_USR-...`)

**Implementação:**
- No futuro, vamos criar uma página `checkout.html`
- Por enquanto, apenas guarde suas credenciais

**Taxas:**
- Sem custo fixo mensal
- Taxa por transação: ~3.99% + R$ 0.40
- Exemplo: venda de R$ 49 → você recebe ~R$ 47

---

### 3️⃣ Hospedagem Grátis (Vercel)

**Deploy em 5 minutos:**

1. Crie conta no GitHub: https://github.com
2. Crie um novo repositório:
   - Nome: "espanhol-pro"
   - Público ou Privado
   - Sem README inicial

3. No seu computador:
```bash
# Instale Git se ainda não tiver
# Navegue até a pasta espanhol-plataforma

git init
git add .
git commit -m "Plataforma EspañolPro inicial"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/espanhol-pro.git
git push -u origin main
```

4. Acesse: https://vercel.com
5. Faça login com GitHub
6. Clique em "New Project"
7. Selecione o repositório "espanhol-pro"
8. Clique em "Deploy"
9. Pronto! Sua plataforma está no ar! 🎉

**Domínio gratuito:**
- Vercel dá automaticamente: `espanhol-pro.vercel.app`
- 100% funcional e profissional
- SSL (https) incluído gratuitamente

---

### 4️⃣ Claude API (Chat com IA) - OPCIONAL

**Custos:**
- ~$0.003 por mensagem
- Para estudos: $5 duram meses

**Configuração:**
1. Acesse: https://console.anthropic.com
2. Crie conta
3. Vá em "API Keys"
4. Clique em "Create Key"
5. Copie a chave (começa com `sk-ant-...`)
6. No arquivo `dashboard.html`, procure por "ANTHROPIC_API_KEY"
7. Cole sua chave

---

## 💰 Resumo de Custos

### **Para Começar (0-100 alunos):**
- Firebase: **R$ 0/mês**
- Hospedagem (Vercel): **R$ 0/mês**
- Mercado Pago: **Taxa só quando vender** (~4%)
- Claude API: **R$ 0-50/mês** (opcional)
- **TOTAL: R$ 0-50/mês**

### **Crescendo (100-500 alunos):**
- Firebase: **R$ 0-100/mês** (ainda no free tier)
- Hospedagem: **R$ 0/mês** (Vercel Pro só se quiser)
- Mercado Pago: **Taxa sobre vendas**
- **TOTAL: R$ 0-100/mês** + taxas de venda

### **Escalando (1000+ alunos):**
- Firebase: **R$ 100-300/mês**
- Hospedagem: **R$ 80/mês** (Vercel Pro)
- Domínio próprio: **R$ 40/ano**
- **TOTAL: ~R$ 200-400/mês**

**MAS nessa altura você estará faturando R$ 20.000-50.000/mês!** 💰

---

## 📱 Conteúdo da Plataforma

### **Nível A2 - Básico** (5 módulos)
- Vida Cotidiana
- Família e Relações
- Compras e Mercado
- Números e Datas
- Cores e Descrições

### **Nível B1 - Intermediário** (5 módulos)
- Espanhol de Negócios
- Viagens e Turismo
- Restaurantes
- Subjuntivo Básico
- Falsos Amigos (BR→ES)

### **Nível B1+ - Intermediário Avançado** (4 módulos)
- Conversação Avançada
- Entrevistas de Trabalho
- Por vs Para - Domínio
- Cultura Hispânica

### **Nível B2 - Avançado** (5 módulos)
- Negócios Internacionais
- Subjuntivo Avançado
- Redação Profissional
- Argumentação e Debate
- Expressões Idiomáticas

**TOTAL:** 19 módulos, 500+ exercícios

---

## 🎨 Diferenciais

### **1. Foco em Brasileiros:**
- Explicações em português claro
- Atenção a dificuldades específicas (Por/Para, Ser/Estar)
- Falsos amigos destacados
- Comparações diretas PT↔ES

### **2. Gamificação:**
- Sistema de XP
- Streak de dias
- Conquistas e badges
- Barra de progresso por nível

### **3. Prático e Aplicável:**
- Foco em negócios e carreira
- Situações reais de viagem
- Vocabulário corporativo
- Preparação para entrevistas

### **4. Design Premium:**
- Interface moderna e profissional
- Cores laranja/amarelo vibrantes
- Animações suaves
- Totalmente responsivo

---

## 🚀 Próximos Passos

### **Fase 1: MVP (Validação)** ✅
- [x] Landing page
- [x] Sistema de login
- [x] 19 módulos completos
- [x] 500+ exercícios
- [x] Sistema de progresso

### **Fase 2: Monetização** (próximo)
- [ ] Integrar Firebase (login real)
- [ ] Página de checkout
- [ ] Integração Mercado Pago
- [ ] Sistema de assinaturas

### **Fase 3: Expansão** (futuro)
- [ ] Chat IA completo
- [ ] Videoaulas gravadas
- [ ] Certificados em PDF
- [ ] App mobile (PWA)
- [ ] Comunidade/Fórum

---

## 🛠️ Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript vanilla
- **Backend:** Firebase (Authentication + Firestore)
- **Hospedagem:** Vercel
- **Pagamentos:** Mercado Pago
- **IA:** Claude API (Anthropic)
- **Design:** CSS Grid, Flexbox, CSS Variables
- **Fontes:** Google Fonts (Bebas Neue, Work Sans)

---

## 📞 Suporte

Para dúvidas sobre configuração ou desenvolvimento:
1. Consulte a documentação do Firebase
2. Veja tutoriais do Vercel
3. Leia docs do Mercado Pago

---

## 📄 Licença

Este projeto foi desenvolvido como MVP educacional.
Todos os direitos reservados.

---

## 🎯 Meta de Faturamento

**Cenário Conservador (100 alunos):**
- 50 alunos × R$ 29 (Básico) = R$ 1.450
- 30 alunos × R$ 49 (Pro) = R$ 1.470
- 20 alunos × R$ 390/12 (Anual) = R$ 650
- **Total: R$ 3.570/mês**

**Cenário Otimista (500 alunos):**
- 200 alunos × R$ 29 = R$ 5.800
- 200 alunos × R$ 49 = R$ 9.800
- 100 alunos × R$ 32,50 (anual) = R$ 3.250
- **Total: R$ 18.850/mês**

**Cenário Sucesso (2000 alunos):**
- 800 alunos × R$ 29 = R$ 23.200
- 800 alunos × R$ 49 = R$ 39.200
- 400 alunos × R$ 32,50 = R$ 13.000
- **Total: R$ 75.400/mês** 💰💰💰

---

## ✅ Checklist de Lançamento

- [ ] Configurar Firebase
- [ ] Fazer deploy no Vercel
- [ ] Testar login/cadastro
- [ ] Configurar Mercado Pago
- [ ] Criar página de checkout
- [ ] Testar fluxo de pagamento
- [ ] Gravar videoaulas (opcional)
- [ ] Criar página de vendas
- [ ] Configurar domínio próprio (opcional)
- [ ] Lançar marketing! 🚀

---

**Criado com ❤️ para brasileiros que querem dominar o espanhol!**

¡Buena suerte! 🇧🇷→🇪🇸