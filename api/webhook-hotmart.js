// Webhook Hotmart - Com Email Automático
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
        
        console.log('=== WEBHOOK HOTMART RECEBIDO ===');
        console.log(JSON.stringify(data, null, 2));
        
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
            
            console.log('=== CRIANDO USUÁRIO ===');
            console.log('Email:', email);
            console.log('Nome:', name);
            console.log('Senha:', password);
            
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
            
            console.log('✅ Usuário criado! ID:', firebaseData.localId);
            
            // Enviar email via Resend
            console.log('📧 Enviando email...');
            
            const emailResponse = await fetch('https://api.resend.com/emails', {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer re_YkKSAYb6_CYmDBM4BHqj1DwD57h8rKy7f',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: 'EspañolPro <onboarding@resend.dev>',
                    to: email,
                    subject: '🎓 Seu acesso ao EspañolPro está pronto!',
                    html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FEC601 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .header h1 { color: white; margin: 0; font-size: 32px; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .credentials { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 2px solid #FF6B35; }
        .credential-item { margin: 15px 0; }
        .credential-label { font-weight: bold; color: #666; font-size: 14px; }
        .credential-value { font-size: 18px; color: #FF6B35; font-weight: bold; margin-top: 5px; }
        .button { display: inline-block; background: linear-gradient(135deg, #FF6B35, #FEC601); color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .footer { text-align: center; color: #666; font-size: 14px; margin-top: 30px; }
        .warning { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎓 ESPAÑOLPRO</h1>
        </div>
        <div class="content">
            <h2>Olá, ${name}! 👋</h2>
            <p>Parabéns pela sua compra! Seu acesso à plataforma EspañolPro está ativo.</p>
            
            <div class="credentials">
                <h3 style="margin-top: 0; color: #FF6B35;">🔑 Seus Dados de Acesso:</h3>
                <div class="credential-item">
                    <div class="credential-label">📧 LOGIN (Email):</div>
                    <div class="credential-value">${email}</div>
                </div>
                <div class="credential-item">
                    <div class="credential-label">🔒 SENHA:</div>
                    <div class="credential-value">${password}</div>
                </div>
            </div>
            
            <div class="warning">
                <strong>⚠️ IMPORTANTE:</strong> Guarde esta senha em local seguro! Você pode alterá-la depois no seu perfil.
            </div>
            
            <center>
                <a href="https://espanhol-pro.vercel.app/login.html" class="button">
                    🚀 ACESSAR PLATAFORMA AGORA
                </a>
            </center>
            
            <h3>📚 O que você vai encontrar:</h3>
            <ul>
                <li>✅ 307 exercícios interativos (A2 ao B2)</li>
                <li>✅ 3 simulados DELE completos com certificado</li>
                <li>✅ 32 videoaulas de gramática e cultura</li>
                <li>✅ Chat IA para praticar 24/7</li>
                <li>✅ Dashboard gamificado com XP e conquistas</li>
            </ul>
            
            <h3>🎯 Primeiros Passos:</h3>
            <ol>
                <li>Acesse: <a href="https://espanhol-pro.vercel.app/login.html">https://espanhol-pro.vercel.app/login.html</a></li>
                <li>Faça login com seu email e senha acima</li>
                <li>Complete seu perfil</li>
                <li>Comece pelo nível A2 ou faça o teste de nível</li>
            </ol>
            
            <div class="footer">
                <p><strong>Dúvidas ou problemas?</strong><br>
                Entre em contato: <a href="mailto:eurobrasilconsultoria@gmail.com">eurobrasilconsultoria@gmail.com</a></p>
                <p style="margin-top: 20px; color: #999; font-size: 12px;">
                    Este email foi enviado automaticamente após a confirmação do seu pagamento.<br>
                    © 2026 EspañolPro - Todos os direitos reservados
                </p>
            </div>
        </div>
    </div>
</body>
</html>
                    `
                })
            });
            
            const emailData = await emailResponse.json();
            
            if (emailData.error || !emailData.id) {
                console.error('❌ Erro ao enviar email:', emailData);
                // Não falhar a requisição, mas logar o erro
            } else {
                console.log('✅ Email enviado com sucesso! ID:', emailData.id);
            }
            
            return res.status(200).json({
                success: true,
                message: 'Usuário criado e email enviado',
                userId: firebaseData.localId,
                email: email,
                emailSent: !!emailData.id
            });
        }
        
        return res.status(200).json({ success: true, message: 'Evento ignorado' });
        
    } catch (error) {
        console.error('❌ Erro:', error);
        return res.status(500).json({ error: error.message });
    }
}
