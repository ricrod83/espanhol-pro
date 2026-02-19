// Webhook Hotmart - Criação Automática de Usuários
import fetch from 'node-fetch';

// Configuração Firebase Admin (Serverless)
const FIREBASE_API_KEY = "AIzaSyCcrFOcj9fEC1U2KG6dFQW2xZ1Hdux_5iY";
const FIREBASE_PROJECT_ID = "espanholpro-ef8bd";

// Função para gerar senha aleatória
function generatePassword(length = 12) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Função para criar usuário no Firebase
async function createFirebaseUser(email, password) {
    try {
        const response = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        );
        
        const data = await response.json();
        
        if (data.error) {
            console.error('Erro ao criar usuário:', data.error);
            return null;
        }
        
        return data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        return null;
    }
}

// Função para enviar email (usando SendGrid ou outro serviço)
async function sendWelcomeEmail(email, password, name) {
    // Por enquanto, vamos apenas logar
    // Você pode integrar com SendGrid, Resend, ou outro serviço depois
    console.log('EMAIL A ENVIAR:');
    console.log('Para:', email);
    console.log('Nome:', name);
    console.log('Senha:', password);
    console.log('---');
    
    // TODO: Integrar com serviço de email
    // Exemplo com SendGrid:
    // await fetch('https://api.sendgrid.com/v3/mail/send', { ... });
    
    return true;
}

// Handler principal do webhook
export default async function handler(req, res) {
    // Aceitar apenas POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const data = req.body;
        
        console.log('Webhook recebido:', JSON.stringify(data, null, 2));
        
        // Verificar se é uma compra aprovada
        if (data.event === 'PURCHASE_APPROVED' || data.status === 'approved') {
            const email = data.buyer?.email || data.data?.buyer?.email;
            const name = data.buyer?.name || data.data?.buyer?.name || 'Aluno';
            
            if (!email) {
                console.error('Email não encontrado no webhook');
                return res.status(400).json({ error: 'Email não encontrado' });
            }
            
            console.log(`Processando compra para: ${email}`);
            
            // Gerar senha aleatória
            const password = generatePassword();
            
            // Criar usuário no Firebase
            const firebaseUser = await createFirebaseUser(email, password);
            
            if (!firebaseUser) {
                console.error('Falha ao criar usuário no Firebase');
                return res.status(500).json({ error: 'Falha ao criar usuário' });
            }
            
            console.log('Usuário criado com sucesso no Firebase:', firebaseUser.localId);
            
            // Enviar email de boas-vindas
            await sendWelcomeEmail(email, password, name);
            
            // Responder sucesso
            return res.status(200).json({
                success: true,
                message: 'Usuário criado com sucesso',
                userId: firebaseUser.localId,
                email: email
            });
        }
        
        // Evento não é compra aprovada
        return res.status(200).json({
            success: true,
            message: 'Evento ignorado (não é compra aprovada)'
        });
        
    } catch (error) {
        console.error('Erro no webhook:', error);
        return res.status(500).json({
            error: 'Erro interno no servidor',
            message: error.message
        });
    }
}
