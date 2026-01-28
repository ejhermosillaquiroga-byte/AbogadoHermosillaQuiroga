# 📋 GUÍA COMPLETA DE DEPLOYMENT - Hermosilla Quiroga Agustín

## 🎯 Objetivo
Esta guía te ayudará a desplegar tu sitio web profesional en un servidor de hosting.

---

## 📦 CONTENIDO DEL PROYECTO

```
hermosilla-website/
├── index.html                    # Archivo principal HTML
├── styles.css                    # Estilos CSS
├── script.js                     # Funcionalidad JavaScript
├── images/                       # Carpeta de imágenes
│   ├── logo.jpeg                # Tu logo
│   ├── carcel.jpg               # Imagen Defensa Penal
│   ├── consulta-psicologia.avif # Imagen Víctimas
│   ├── oficina-moderna.webp     # Imagen Autoridad
│   └── Utm2rar3ePy8.jpg         # Imagen Hero
├── blog/                         # Carpeta de artículos
│   ├── 01_evidencia_digital.pdf
│   ├── 02_querella_penal.pdf
│   └── 03_defensa_confianza.pdf
├── GUIA_DEPLOYMENT.md           # Esta guía
└── .htaccess                    # Configuración Apache (opcional)
```

---

## 🚀 OPCIONES DE HOSTING

### OPCIÓN 1: Hosting Compartido (Recomendado para principiantes)

**Proveedores recomendados:**
- Hostinger
- Bluehost
- SiteGround
- GoDaddy
- Namecheap

**Pasos:**

1. **Contratar hosting**
   - Elige un plan básico (generalmente $2-5 USD/mes)
   - Asegúrate que incluya: PHP, MySQL, FTP/SFTP

2. **Acceder al Panel de Control (cPanel)**
   - Busca "File Manager" o "Administrador de Archivos"
   - Navega a la carpeta `public_html` o `www`

3. **Subir archivos**
   - Crea una carpeta llamada `hermosilla` (opcional)
   - Sube TODOS los archivos:
     - index.html
     - styles.css
     - script.js
     - Carpeta `images/` (completa)
     - Carpeta `blog/` (completa)

4. **Configurar dominio**
   - En cPanel, ve a "Addon Domains"
   - Apunta tu dominio a la carpeta donde subiste los archivos

5. **Verificar instalación**
   - Abre tu navegador
   - Visita: `https://tudominio.com`

---

### OPCIÓN 2: Hosting con cPanel (FTP)

**Pasos detallados:**

1. **Obtener credenciales FTP**
   - En cPanel, busca "FTP Accounts"
   - Crea una nueva cuenta FTP
   - Anota: Host, Usuario, Contraseña

2. **Descargar cliente FTP**
   - FileZilla (gratuito): https://filezilla-project.org/
   - WinSCP (gratuito): https://winscp.net/
   - Cyberduck (gratuito): https://cyberduck.io/

3. **Conectar con FileZilla**
   ```
   Host: ftp.tudominio.com
   Usuario: tu_usuario_ftp
   Contraseña: tu_contraseña
   Puerto: 21 (o 22 para SFTP)
   ```

4. **Subir archivos**
   - Navega a `/public_html`
   - Arrastra y suelta los archivos
   - Espera a que se complete la transferencia

5. **Permisos de carpetas**
   - Carpeta `images/`: 755
   - Carpeta `blog/`: 755
   - Archivos: 644

---

### OPCIÓN 3: Hosting en la Nube (AWS, Google Cloud, Azure)

**Para usuarios avanzados:**

1. **AWS S3 + CloudFront**
   ```bash
   # Subir a S3
   aws s3 cp index.html s3://tu-bucket/
   aws s3 cp styles.css s3://tu-bucket/
   aws s3 cp script.js s3://tu-bucket/
   aws s3 sync images/ s3://tu-bucket/images/
   aws s3 sync blog/ s3://tu-bucket/blog/
   ```

2. **Google Cloud Storage**
   - Crear bucket público
   - Subir archivos
   - Configurar CORS
   - Obtener URL pública

---

### OPCIÓN 4: Vercel (Recomendado para desarrolladores)

**Pasos:**

1. **Crear cuenta en Vercel**
   - https://vercel.com
   - Conectar con GitHub

2. **Subir repositorio a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Importar en Vercel**
   - Click en "New Project"
   - Seleccionar repositorio
   - Vercel detectará automáticamente
   - Click en "Deploy"

4. **Configurar dominio personalizado**
   - En Vercel: Settings → Domains
   - Agregar tu dominio
   - Actualizar DNS

---

### OPCIÓN 5: Netlify

**Pasos:**

1. **Crear cuenta**
   - https://netlify.com

2. **Drag & Drop**
   - Selecciona la carpeta `hermosilla-website`
   - Arrastra a Netlify
   - ¡Listo! Tu sitio está en línea

3. **Dominio personalizado**
   - Settings → Domain Management
   - Agregar dominio personalizado
   - Seguir instrucciones DNS

---

## 🔒 SEGURIDAD Y OPTIMIZACIÓN

### Archivo .htaccess (Apache)

Crea un archivo `.htaccess` en la raíz:

```apache
# Habilitar compresión
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache del navegador
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
</IfModule>

# Redirigir HTTP a HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remover .html de URLs (opcional)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC, L]
```

### SSL/HTTPS

- La mayoría de hosting incluye SSL gratuito (Let's Encrypt)
- En cPanel: "AutoSSL" o "SSL/TLS"
- Activar "Force HTTPS"

### Optimización de Imágenes

```bash
# Comprimir imágenes (opcional)
# Usar herramientas online:
# - TinyPNG: https://tinypng.com/
# - ImageOptim: https://imageoptim.com/
```

---

## 📱 CONFIGURACIÓN DE DOMINIOS

### Cambiar Nameservers

1. **En tu registrador de dominio** (GoDaddy, Namecheap, etc.):
   - Busca "Nameservers" o "DNS"
   - Reemplaza con los nameservers del hosting:
     ```
     ns1.tuhosting.com
     ns2.tuhosting.com
     ```

2. **Esperar propagación**
   - Puede tomar 24-48 horas
   - Verificar con: https://www.whatsmydns.net/

### Registros DNS (si es necesario)

```
Tipo    Nombre              Valor
A       @                   123.45.67.89 (IP del hosting)
CNAME   www                 tudominio.com
MX      @                   mail.tudominio.com
TXT     @                   v=spf1 include:hosting.com ~all
```

---

## ✅ CHECKLIST PRE-DEPLOYMENT

- [ ] Todos los archivos están en la carpeta correcta
- [ ] Las imágenes se cargan correctamente
- [ ] Los PDFs del blog son accesibles
- [ ] Los botones de WhatsApp funcionan
- [ ] El sitio es responsive (probar en móvil)
- [ ] No hay errores en la consola (F12)
- [ ] SSL/HTTPS está activado
- [ ] El dominio apunta correctamente
- [ ] Los metadatos están configurados
- [ ] Google Analytics está instalado (opcional)

---

## 🔧 TROUBLESHOOTING

### Problema: Las imágenes no cargan

**Solución:**
```html
<!-- Verificar rutas relativas -->
<!-- ❌ INCORRECTO -->
<img src="/images/logo.jpeg">

<!-- ✅ CORRECTO -->
<img src="images/logo.jpeg">
```

### Problema: El sitio es lento

**Soluciones:**
1. Comprimir imágenes
2. Habilitar caché en .htaccess
3. Usar CDN (CloudFlare)
4. Minificar CSS y JavaScript

### Problema: Error 404 en PDFs

**Solución:**
- Verificar que la carpeta `blog/` existe
- Verificar permisos (755)
- Verificar nombres de archivos exactos

### Problema: WhatsApp no funciona

**Solución:**
- Verificar formato: `https://wa.me/5492944211769`
- Incluir código de país
- Sin espacios ni guiones

---

## 📊 MONITOREO Y MANTENIMIENTO

### Google Analytics

Agregar antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Google Search Console

1. Ir a: https://search.google.com/search-console
2. Agregar propiedad
3. Verificar dominio
4. Enviar sitemap (opcional)

### Backups

- Realizar backups mensuales
- Descargar archivos localmente
- Usar herramientas de backup del hosting

---

## 🎓 RECURSOS ÚTILES

- **Documentación Bootstrap**: https://getbootstrap.com/docs/
- **Google Fonts**: https://fonts.google.com/
- **Herramientas de optimización**: https://web.dev/
- **Validador HTML**: https://validator.w3.org/
- **Validador CSS**: https://jigsaw.w3.org/css-validator/

---

## 📞 SOPORTE

Si necesitas ayuda:

1. **Contactar al hosting**: Generalmente tienen chat 24/7
2. **Verificar documentación**: La mayoría tiene tutoriales
3. **Comunidades**: Stack Overflow, Reddit r/webdev

---

## 📝 NOTAS IMPORTANTES

- **Dominio**: Compra un dominio profesional (.com, .com.ar, .legal)
- **Email**: Configura email profesional (nombre@tudominio.com)
- **Certificado SSL**: Siempre usa HTTPS
- **Mantenimiento**: Actualiza contenido regularmente
- **SEO**: Agrega meta tags y keywords

---

**¡Tu sitio web está listo para el mundo! 🌍**

Última actualización: 23 de Enero de 2026
