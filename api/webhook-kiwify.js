// Webhook Kiwify - Criação Automática de Usuários
import fetch from 'node-fetch';

const FIREBASE_API_KEY = "AIzaSyCcrFOcj9fEC1U2KG6dFQW2xZ1Hdux_5iY";

function generatePassword(length = 12) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

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
        return data.error ? null : data;
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const data = req.body;
        console.log('Webhook Kiwify recebido:', JSON.stringify(data, null, 2));
        
        // Kiwify envia no formato diferente da Hotmart
        if (data.order_status === 'paid' || data.status === 'paid') {
            const email = data.Customer?.email || data.customer?.email;
            const name = data.Customer?.name || data.customer?.name || 'Aluno';
            
            if (!email) {
                return res.status(400).json({ error: 'Email não encontrado' });
            }
            
            const password = generatePassword();
            const firebaseUser = await createFirebaseUser(email, password);
            
            if (!firebaseUser) {
                return res.status(500).json({ error: 'Falha ao criar usuário' });
            }
            
            console.log('Usuário criado:', firebaseUser.localId);
            console.log('Email:', email, 'Senha:', password);
            
            return res.status(200).json({
                success: true,
                userId: firebaseUser.localId,
                email: email
            });
        }
        
        return res.status(200).json({ success: true, message: 'Evento ignorado' });
        
    } catch (error) {
        console.error('Erro:', error);
        return res.status(500).json({ error: error.message });
    }
}
