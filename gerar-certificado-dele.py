#!/usr/bin/env python3
"""
Gerador de Certificados DELE
Uso: python3 gerar-certificado-dele.py <nome> <nivel> <pontuacao>
Exemplo: python3 gerar-certificado-dele.py "Ricardo Silva" "B1" "75"
"""
import sys
from datetime import datetime
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib import colors
from reportlab.lib.units import cm
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph

def gerar_certificado(nome, nivel, pontuacao, filename="certificado-dele.pdf"):
    # Configuração da página em paisagem
    c = canvas.Canvas(filename, pagesize=landscape(A4))
    width, height = landscape(A4)
    
    # Borda decorativa
    c.setStrokeColor(colors.HexColor('#FF6B35'))
    c.setLineWidth(3)
    c.rect(1*cm, 1*cm, width-2*cm, height-2*cm)
    
    c.setLineWidth(1)
    c.rect(1.5*cm, 1.5*cm, width-3*cm, height-3*cm)
    
    # Logo/Título
    c.setFont("Helvetica-Bold", 32)
    c.setFillColor(colors.HexColor('#FF6B35'))
    c.drawCentredString(width/2, height-3*cm, "ESPAÑOLPRO")
    
    # Certificado
    c.setFont("Helvetica", 20)
    c.setFillColor(colors.black)
    c.drawCentredString(width/2, height-5*cm, "CERTIFICADO DE APTIDÃO")
    
    # Texto principal
    c.setFont("Helvetica", 14)
    c.drawCentredString(width/2, height-7*cm, "Certificamos que")
    
    # Nome do aluno
    c.setFont("Helvetica-Bold", 24)
    c.setFillColor(colors.HexColor('#F7931E'))
    c.drawCentredString(width/2, height-8.5*cm, nome.upper())
    
    # Detalhes
    c.setFont("Helvetica", 14)
    c.setFillColor(colors.black)
    c.drawCentredString(width/2, height-10*cm, f"completou com êxito o Simulado DELE Nível {nivel}")
    c.drawCentredString(width/2, height-11.5*cm, f"obtendo a pontuação de {pontuacao}/100 pontos")
    
    # Resultado
    c.setFont("Helvetica-Bold", 28)
    c.setFillColor(colors.HexColor('#4CAF50'))
    c.drawCentredString(width/2, height-13.5*cm, "RESULTADO: APTO ✓")
    
    # Data
    c.setFont("Helvetica", 12)
    c.setFillColor(colors.black)
    data_atual = datetime.now().strftime("%d de %B de %Y")
    meses = {
        'January': 'janeiro', 'February': 'fevereiro', 'March': 'março',
        'April': 'abril', 'May': 'maio', 'June': 'junho',
        'July': 'julho', 'August': 'agosto', 'September': 'setembro',
        'October': 'outubro', 'November': 'novembro', 'December': 'dezembro'
    }
    for eng, pt in meses.items():
        data_atual = data_atual.replace(eng, pt)
    c.drawCentredString(width/2, height-15.5*cm, f"Emitido em {data_atual}")
    
    # Nota de rodapé
    c.setFont("Helvetica", 8)
    c.setFillColor(colors.gray)
    c.drawCentredString(width/2, 1.8*cm, "Este é um simulado educativo. Não substitui o exame oficial DELE do Instituto Cervantes.")
    c.drawCentredString(width/2, 1.4*cm, "EspañolPro - Plataforma de Ensino de Espanhol para Brasileiros")
    
    c.save()
    print(f"✅ Certificado gerado: {filename}")

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Uso: python3 gerar-certificado-dele.py <nome> <nivel> <pontuacao>")
        print('Exemplo: python3 gerar-certificado-dele.py "Ricardo Silva" "B1" "75"')
        sys.exit(1)
    
    nome = sys.argv[1]
    nivel = sys.argv[2]
    pontuacao = sys.argv[3]
    
    gerar_certificado(nome, nivel, pontuacao)
