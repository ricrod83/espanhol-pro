// Webhook Hotmart - Versão Simplificada
export default async function handler(req, res) {
    // Configurar CORS
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
        
        console.log('=== WEBHOOK HOTMART RECEBIDO ===');
        console.log(JSON.stringify(data, null, 2));
        
        // Verificar se é compra aprovada
        if (data.event === 'PURCHASE_APPROVED' || data.status === 'approved') {
            const email = data.buyer?.email || data.data?.buyer?.email;
            const name = data.buyer?.name || data.data?.buyer?.name || 'Aluno';
            
            if (!email) {
                console.error('Email não encontrado');
                return res.status(400).json({ error: 'Email não encontrado' });
            }
            
            // Gerar senha aleatória
            const password = Array(12).fill(0).map(() => 
                'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%'
                    .charAt(Math.floor(Math.random() * 58))
            ).join('');
            
            console.log('=== USUÁRIO A CRIAR ===');
            console.log('Email:', email);
            console.log('Nome:', name);
            console.log('Senha:', password);
            console.log('========================');
            
            // Criar usuário no Firebase
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
            console.log('ID:', firebaseData.localId);
            
            return res.status(200).json({
                success: true,
                message: 'Usuário criado',
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
