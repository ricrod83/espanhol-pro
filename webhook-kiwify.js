// Webhook Kiwify - Versão Simplificada
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    try {
        const data = req.body;
        
        console.log('=== WEBHOOK KIWIFY RECEBIDO ===');
        console.log(JSON.stringify(data, null, 2));
        
        if (data.order_status === 'paid' || data.status === 'paid') {
            const email = data.Customer?.email || data.customer?.email;
            const name = data.Customer?.name || data.customer?.name || 'Aluno';
            
            if (!email) {
                return res.status(400).json({ error: 'Email não encontrado' });
            }
            
            const password = Array(12).fill(0).map(() => 
                'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%'
                    .charAt(Math.floor(Math.random() * 58))
            ).join('');
            
            console.log('=== USUÁRIO A CRIAR ===');
            console.log('Email:', email);
            console.log('Nome:', name);
            console.log('Senha:', password);
            console.log('========================');
            
            const firebaseResponse = await fetch(
                `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCcrFOcj9fEC1U2KG6dFQW2xZ1Hdux_5iY`,
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
            
            const firebaseData = await firebaseResponse.json();
            
            if (firebaseData.error) {
                console.error('Erro Firebase:', firebaseData.error);
                return res.status(500).json({ error: 'Erro ao criar usuário' });
            }
            
            console.log('✅ Usuário criado com sucesso!');
            
            return res.status(200).json({
                success: true,
                userId: firebaseData.localId,
                email: email
            });
        }
        
        return res.status(200).json({ success: true, message: 'Evento ignorado' });
        
    } catch (error) {
        console.error('Erro:', error);
        return res.status(500).json({ error: error.message });
    }
}
