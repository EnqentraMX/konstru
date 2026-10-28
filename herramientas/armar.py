# Arma la página de un negocio a partir de la plantilla.
# Uso: python3 herramientas/armar.py miguel-mendoza
import sys, pathlib
raiz = pathlib.Path(__file__).resolve().parent.parent
slug = sys.argv[1]
plant = (raiz/"plantilla/pagina.html").read_text(encoding="utf-8")
cabeza, cuerpo = plant.split("<!--CUERPO-->")
carpeta = raiz/"public"/slug
# 1) Versión Netlify: documento completo, lee datos.js
html = "<!doctype html>\n<html lang=\"es-MX\">\n<head>\n<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width,initial-scale=1,viewport-fit=cover\">\n" + cabeza + "\n</head>\n<body>\n" + cuerpo + "\n</body>\n</html>\n"
(carpeta/"index.html").write_text(html, encoding="utf-8")
# 2) Vista previa: todo en un solo archivo, con los datos adentro
datos = (carpeta/"datos.js").read_text(encoding="utf-8")
prev = plant.replace("<!--CUERPO-->", "").replace('<script src="datos.js"></script>', "<script>\n" + datos + "\n</script>")
(raiz/"artifact"/(slug + ".html")).write_text(prev, encoding="utf-8")
print("Listo:", carpeta/"index.html")
