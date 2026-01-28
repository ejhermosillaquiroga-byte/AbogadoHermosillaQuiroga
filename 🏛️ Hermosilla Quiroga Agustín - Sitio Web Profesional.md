# 🏛️ Hermosilla Quiroga Agustín - Sitio Web Profesional

Sitio web profesional para estudio de abogados especializado en defensa penal y representación de víctimas.

## 📋 Contenido

- **index.html** - Estructura HTML principal
- **styles.css** - Estilos CSS con diseño responsivo
- **script.js** - Funcionalidad JavaScript
- **images/** - Carpeta con imágenes optimizadas
- **blog/** - Carpeta con artículos en PDF
- **.htaccess** - Configuración Apache
- **robots.txt** - Archivo para motores de búsqueda
- **sitemap.xml** - Mapa del sitio

## 🎨 Características

✅ **Diseño Profesional**
- Colores corporativos: Azul profundo (#0F1F2E), Dorado (#C9A24D)
- Tipografía elegante: Playfair Display + Inter
- Diseño responsive (mobile, tablet, desktop)

✅ **Funcionalidad**
- Navegación sticky con scroll suave
- Botones WhatsApp integrados
- Acordeón FAQ interactivo
- Animaciones al scroll
- Lazy loading de imágenes

✅ **Secciones**
1. Hero - Presentación principal
2. Selector de situación - Imputados vs Víctimas
3. Defensa Penal - Servicios para imputados
4. Atención a Víctimas - Servicios para querellantes
5. Cómo Trabajamos - Proceso en 3 pasos
6. Autoridad y Trayectoria - Experiencia profesional
7. Honorarios - Transparencia de costos
8. Blog - Artículos de interés
9. FAQ - Preguntas frecuentes
10. CTA Final - Llamada a la acción

✅ **SEO Optimizado**
- Meta tags configurados
- Sitemap XML
- Robots.txt
- URLs amigables
- Compresión GZIP

✅ **Seguridad**
- HTTPS/SSL
- Headers de seguridad
- Protección contra ataques comunes
- Validación de formularios

## 🚀 Instalación Rápida

### Opción 1: Hosting Compartido (Recomendado)

1. Contratar hosting (Hostinger, Bluehost, SiteGround)
2. Acceder a cPanel
3. Subir archivos a `public_html`
4. Configurar dominio
5. ¡Listo!

### Opción 2: FTP

```bash
# Usar FileZilla u otro cliente FTP
# Host: ftp.tudominio.com
# Usuario: tu_usuario
# Contraseña: tu_contraseña
# Subir carpeta completa a /public_html
```

### Opción 3: Vercel (Gratuito)

```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
# Importar en Vercel.com
```

### Opción 4: Netlify (Gratuito)

```bash
# Drag & drop la carpeta en Netlify.com
# ¡Listo! Tu sitio está en línea
```

## 📱 Configuración Importante

### Cambiar Número de WhatsApp

Busca y reemplaza `5492944211769` con tu número:

```html
<!-- En index.html -->
<a href="https://wa.me/5492944211769" target="_blank">
```

### Cambiar Dominio en Sitemap

Reemplaza `tudominio.com` con tu dominio real:

```xml
<!-- En sitemap.xml -->
<loc>https://tudominio.com/</loc>
```

### Agregar Google Analytics

Agrega antes de `</head>` en index.html:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

## 📊 Estructura de Carpetas

```
hermosilla-website/
├── index.html                    # Archivo principal
├── styles.css                    # Estilos
├── script.js                     # Funcionalidad
├── .htaccess                     # Configuración Apache
├── robots.txt                    # SEO
├── sitemap.xml                   # Mapa del sitio
├── README.md                     # Este archivo
├── GUIA_DEPLOYMENT.md            # Guía de instalación
├── images/                       # Imágenes
│   ├── logo.jpeg
│   ├── carcel.jpg
│   ├── consulta-psicologia.avif
│   ├── oficina-moderna.webp
│   └── Utm2rar3ePy8.jpg
└── blog/                         # Artículos PDF
    ├── 01_evidencia_digital.pdf
    ├── 02_querella_penal.pdf
    └── 03_defensa_confianza.pdf
```

## 🔧 Personalización

### Cambiar Colores

En `styles.css`, modifica las variables:

```css
:root {
    --color-primary: #0F1F2E;      /* Azul profundo */
    --color-accent: #C9A24D;       /* Dorado */
    --color-text: #2B2B2B;         /* Gris oscuro */
}
```

### Cambiar Tipografía

En `index.html`, modifica el link de Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=TU_FUENTE&display=swap" rel="stylesheet">
```

### Agregar Nuevas Secciones

1. Agregar en HTML:
```html
<section id="nueva-seccion">
    <!-- Contenido -->
</section>
```

2. Agregar en CSS:
```css
#nueva-seccion {
    /* Estilos */
}
```

3. Agregar en navegación:
```html
<li class="nav-item"><a class="nav-link" href="#nueva-seccion">Nueva</a></li>
```

## 📈 Optimización

### Comprimir Imágenes
- TinyPNG: https://tinypng.com/
- ImageOptim: https://imageoptim.com/
- Squoosh: https://squoosh.app/

### Minificar CSS/JS
- CSSNano: https://cssnano.co/
- Terser: https://terser.org/

### Validar HTML/CSS
- W3C HTML: https://validator.w3.org/
- W3C CSS: https://jigsaw.w3.org/css-validator/

## 🔒 Seguridad

✅ HTTPS/SSL - Obligatorio
✅ Headers de seguridad - Incluidos en .htaccess
✅ Validación de entrada - En JavaScript
✅ CORS configurado - En .htaccess
✅ Protección contra bots - En robots.txt

## 📞 Contacto y Soporte

Para problemas o preguntas:

1. **Revisar documentación**: GUIA_DEPLOYMENT.md
2. **Validar archivos**: Usar herramientas online
3. **Contactar hosting**: Generalmente tienen soporte 24/7

## 📝 Notas Importantes

- ⚠️ Siempre usa HTTPS
- ⚠️ Realiza backups regularmente
- ⚠️ Actualiza contenido periódicamente
- ⚠️ Monitorea el rendimiento
- ⚠️ Mantén plugins actualizados (si los usas)

## 📄 Licencia

Este sitio web es propiedad de Hermosilla Quiroga Agustín.

## 🎯 Próximos Pasos

1. ✅ Subir a hosting
2. ✅ Configurar dominio
3. ✅ Activar SSL
4. ✅ Agregar Google Analytics
5. ✅ Enviar a Google Search Console
6. ✅ Monitorear rendimiento

---

**Última actualización:** 23 de Enero de 2026

**Versión:** 1.0

**Estado:** Listo para producción ✅
