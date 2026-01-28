# 🚀 INICIO RÁPIDO - Desplegar tu Sitio Web

## ⏱️ 5 Minutos para Tener tu Sitio en Línea

### OPCIÓN 1: Netlify (Más Fácil - ⭐ Recomendado)

1. **Ir a**: https://netlify.com
2. **Crear cuenta** (con GitHub o email)
3. **Drag & Drop**: Arrastra la carpeta `hermosilla-website` a Netlify
4. **¡Listo!** Tu sitio está en línea en `https://nombre-aleatorio.netlify.app`

**Para dominio personalizado:**
- En Netlify: Settings → Domain Management
- Agregar tu dominio
- Seguir instrucciones DNS

---

### OPCIÓN 2: Vercel (Muy Rápido)

1. **Ir a**: https://vercel.com
2. **Crear cuenta** (con GitHub)
3. **Subir a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Mi sitio web"
   git push origin main
   ```
4. **Importar en Vercel** y hacer click en Deploy
5. **¡Listo!** Tu sitio está en línea

---

### OPCIÓN 3: Hosting Compartido (Tradicional)

#### Paso 1: Contratar Hosting
- Ir a: Hostinger, Bluehost o SiteGround
- Elegir plan básico ($2-5 USD/mes)
- Comprar dominio (o usar uno existente)

#### Paso 2: Acceder a cPanel
- Buscar "cPanel" en email de bienvenida
- Ingresar usuario y contraseña

#### Paso 3: Subir Archivos
- Opción A - File Manager:
  - Abrir File Manager
  - Navegar a `public_html`
  - Subir todos los archivos
  
- Opción B - FTP (FileZilla):
  - Descargar FileZilla: https://filezilla-project.org/
  - Conectar con credenciales FTP
  - Subir archivos a `/public_html`

#### Paso 4: Verificar
- Abrir navegador
- Ir a: `https://tudominio.com`

---

## 📝 CAMBIOS NECESARIOS

### 1. Cambiar Número de WhatsApp

**En archivo: `index.html`**

Buscar: `5492944211769`

Reemplazar por: Tu número

```html
<!-- Antes -->
<a href="https://wa.me/5492944211769">

<!-- Después -->
<a href="https://wa.me/5491234567890">
```

### 2. Cambiar Dominio en Sitemap

**En archivo: `sitemap.xml`**

Buscar: `tudominio.com`

Reemplazar por: Tu dominio

```xml
<!-- Antes -->
<loc>https://tudominio.com/</loc>

<!-- Después -->
<loc>https://miestudiojuridico.com/</loc>
```

---

## ✅ CHECKLIST FINAL

- [ ] Número de WhatsApp actualizado
- [ ] Dominio en sitemap actualizado
- [ ] Archivos subidos correctamente
- [ ] Sitio accesible desde navegador
- [ ] Imágenes cargando correctamente
- [ ] PDFs del blog descargables
- [ ] Botones WhatsApp funcionando
- [ ] Sitio responsive en móvil

---

## 🔒 SEGURIDAD

**Importante:** Asegúrate que tu hosting tenga:
- ✅ SSL/HTTPS (Certificado gratuito)
- ✅ Firewall
- ✅ Backups automáticos

---

## 📊 MONITOREAR TU SITIO

### Google Analytics

1. Ir a: https://analytics.google.com
2. Crear propiedad
3. Copiar ID (GA_ID)
4. Agregar en `index.html` antes de `</head>`:

```html
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
4. Enviar sitemap

---

## 🆘 PROBLEMAS COMUNES

### Las imágenes no cargan

**Solución:**
- Verificar que carpeta `images/` existe
- Verificar permisos (755)
- Verificar rutas en HTML

### El sitio es lento

**Soluciones:**
1. Comprimir imágenes: https://tinypng.com/
2. Usar CDN: https://www.cloudflare.com/
3. Habilitar caché en .htaccess

### WhatsApp no funciona

**Solución:**
- Verificar formato: `https://wa.me/5492944211769`
- Incluir código de país
- Sin espacios ni guiones

### Error 404 en PDFs

**Solución:**
- Verificar carpeta `blog/` existe
- Verificar nombres exactos de archivos
- Verificar permisos (755)

---

## 📞 SOPORTE

Si necesitas ayuda:

1. **Revisar GUIA_DEPLOYMENT.md** - Guía completa
2. **Revisar README.md** - Documentación
3. **Contactar hosting** - Soporte 24/7
4. **Stack Overflow** - Comunidad de desarrolladores

---

## 🎉 ¡LISTO!

Tu sitio web profesional está en línea.

**Próximos pasos:**
1. Compartir con clientes
2. Agregar a redes sociales
3. Monitorear con Google Analytics
4. Actualizar contenido regularmente

---

**¡Éxito con tu estudio jurídico! 🏛️**

Última actualización: 23 de Enero de 2026
