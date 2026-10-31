# Arma la página de un negocio a partir de la plantilla y su datos.js.
# Uso: python3 herramientas/armar.py <negocio>
import sys, re, pathlib, html
raiz = pathlib.Path(__file__).resolve().parent.parent
slug = sys.argv[1]
carpeta = raiz / "public" / slug
datos = (carpeta / "datos.js").read_text(encoding="utf-8")

def campo(k):
    # Solo campos de primer nivel (2 espacios de sangría), no los de fotos o servicios
    m = re.search(r"^  " + k + r'\s*:\s*"((?:[^"\\]|\\.)*)"', datos, re.M)
    return m.group(1) if m else ""

titulo = campo("titulo") or campo("negocio")
desc = campo("descripcion") or campo("subtitulo")
web = campo("web")
hero = campo("heroImg") or "img/cocina.jpg"
imagen = campo("imagenCompartir") or hero
e = lambda s: html.escape(s, quote=True)

plant = (raiz / "plantilla/pagina.html").read_text(encoding="utf-8")
plant = re.sub(r"<title>.*?</title>", "<title>" + e(titulo) + "</title>", plant, count=1)
meta = '<meta name="description" content="' + e(desc) + '">\n'
meta += '<meta property="og:type" content="website">\n'
meta += '<meta property="og:title" content="' + e(titulo) + '">\n'
meta += '<meta property="og:description" content="' + e(desc) + '">\n'
if web:
    meta += '<meta property="og:url" content="' + e(web) + '">\n'
    meta += '<meta property="og:image" content="' + e(web.rstrip("/") + "/" + imagen) + '">\n'
    meta += '<meta name="twitter:card" content="summary_large_image">\n'
plant = re.sub(r'<meta name="description" content="[^"]*">\n?', meta, plant, count=1)

cabeza, cuerpo = plant.split("<!--CUERPO-->")
# 1) Versión Netlify: documento completo que lee datos.js
doc = ("<!doctype html>\n<html lang=\"es-MX\">\n<head>\n<meta charset=\"utf-8\">\n"
       "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\">\n"
       + cabeza + "\n</head>\n<body>\n" + cuerpo + "\n</body>\n</html>\n")
(carpeta / "index.html").write_text(doc, encoding="utf-8")
# 2) Vista previa en un solo archivo, con los datos adentro
prev = plant.replace("<!--CUERPO-->", "").replace('<script src="datos.js"></script>', "<script>\n" + datos + "\n</script>")
(raiz / "artifact").mkdir(exist_ok=True)
(raiz / "artifact" / (slug + ".html")).write_text(prev, encoding="utf-8")
print("Listo:", carpeta / "index.html", "|", titulo)
