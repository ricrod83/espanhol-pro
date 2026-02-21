// Teste para verificar se a variável está chegando
export default async function handler(req, res) {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    return res.status(200).json({
        hasKey: !!RESEND_API_KEY,
        keyLength: RESEND_API_KEY ? RESEND_API_KEY.length : 0,
        keyPreview: RESEND_API_KEY ? RESEND_API_KEY.substring(0, 10) + '...' : 'NENHUMA',
        allEnvVars: Object.keys(process.env).filter(k => k.includes('RESEND'))
    });
}
