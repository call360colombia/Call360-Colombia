"""
Generador de Codigo QR Oficial para Call360 Colombia
Apunta a: https://call360colombia.com
Guarda en: public/qr-call360.png
"""

import os
import qrcode
from PIL import Image

def generate_call360_qr():
    target_url = "https://call360colombia.com"
    base_dir = os.path.dirname(os.path.abspath(__file__))
    output_path = os.path.join(base_dir, "public", "qr-call360.png")

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=12,
        border=3,
    )
    qr.add_data(target_url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white").convert("RGB")
    img.save(output_path, "PNG")

    print("[OK] Codigo QR generado exitosamente:")
    print(f"     Destino: {target_url}")
    print(f"     Archivo guardado en: {output_path}")
    print(f"     Dimensiones: {img.size[0]}x{img.size[1]} px")

if __name__ == "__main__":
    generate_call360_qr()
