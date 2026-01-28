# Hermosilla Quiroga Agustín - Guía de Deployment en Netlify

## 📋 Contenido del Proyecto

Este directorio contiene todos los archivos necesarios para desplegar el sitio web en Netlify:

```
hermosilla-deploy/
├── index.html              # Página principal
├── styles.css              # Estilos CSS
├── script.js               # JavaScript
├── netlify.toml            # Configuración de Netlify
├── robots.txt              # SEO - Instrucciones para bots
├── sitemap.xml             # SEO - Mapa del sitio
├── .gitignore              # Archivos a ignorar en Git
├── images/                 # Imágenes del sitio
│   ├── biblioteca-hero.jpg
│   ├── biblioteca-background.jpg
│   ├── carcel.jpg
│   ├── consulta-psicologia.avif
│   └── oficina-moderna.webp
└── blog/                   # Artículos en PDF
    ├── 01_evidencia_digital.pdf
    ├── 02_querella_penal.pdf
    └── 03_defensa_confianza.pdf
```

## 🚀 Pasos para Desplegar en Netlify

### Opción 1: Usando GitHub (Recomendado)

1. **Crear un repositorio en GitHub:**
   - Ve a https://github.com/new
   - Nombre: `hermosilla-website`
   - Descripción: "Sitio web de Estudio Hermosilla Quiroga Agustín"
   - Selecciona "Public" o "Private"
   - Crea el repositorio

2. **Subir los archivos a GitHub:**
   ```bash
   cd hermosilla-deploy
   git init
   git add .
   git commit -m "Initial commit: Hermosilla website"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/hermosilla-website.git
   git push -u origin main
   ```

3. **Conectar con Netlify:**
   - Ve a https://app.netlify.com
   - Inicia sesión con tu cuenta
   - Haz clic en "Add new site" → "Import an existing project"
   - Selecciona GitHub como proveedor
   - Busca y selecciona `hermosilla-website`
   - Netlify detectará automáticamente `netlify.toml`
   - Haz clic en "Deploy site"

### Opción 2: Drag & Drop (Más Simple)

1. **Comprimir los archivos:**
   ```bash
   cd /home/ubuntu
   zip -r hermosilla-website.zip hermosilla-deploy/
   ```

2. **Subir a Netlify:**
   - Ve a https://app.netlify.com
   - Inicia sesión
   - Arrastra la carpeta `hermosilla-deploy` directamente al área de drop
   - O haz clic en "Deploy manually" y sube el ZIP

### Opción 3: Usando Netlify CLI

1. **Instalar Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Autenticarse:**
   ```bash
   netlify login
   ```

3. **Desplegar:**
   ```bash
   cd hermosilla-deploy
   netlify deploy --prod
   ```

## ✅ Verificación Post-Deployment

Después de desplegar, verifica:

- [ ] La página carga correctamente
- [ ] Todas las imágenes se ven
- [ ] Los PDFs del blog se descargan
- [ ] Los enlaces de WhatsApp funcionan
- [ ] El sitio es responsive (móvil, tablet, desktop)
- [ ] El formulario de FAQ funciona
- [ ] La navegación es fluida
- [ ] No hay errores en la consola del navegador

## 🔧 Configuración de Netlify

El archivo `netlify.toml` ya está configurado con:

- ✅ Redirecciones automáticas (SPA routing)
- ✅ Caché optimizado para diferentes tipos de archivos
- ✅ Encabezados de seguridad
- ✅ Compresión automática de archivos
- ✅ Protección de archivos sensibles

## 📱 Dominio Personalizado

Para conectar un dominio personalizado:

1. En Netlify Dashboard → Site settings → Domain management
2. Haz clic en "Add custom domain"
3. Ingresa tu dominio (ej: hermosilla-abogado.com)
4. Sigue las instrucciones para apuntar los DNS
5. Netlify generará automáticamente un certificado SSL

## 🔐 HTTPS Automático

Netlify proporciona HTTPS automático y gratuito con Let's Encrypt. No necesitas hacer nada especial.

## 📊 Monitoreo

Después del deployment, puedes monitorear:

- **Analytics**: Netlify → Analytics (si está habilitado)
- **Logs**: Netlify → Deploys → Ver logs de cada deployment
- **Performance**: Netlify → Analytics → Performance

## 🆘 Solución de Problemas

### Las imágenes no se cargan
- Verifica que la carpeta `images/` esté en el mismo nivel que `index.html`
- Comprueba que los nombres de archivo coincidan exactamente (sensible a mayúsculas)

### Los PDFs no se descargan
- Verifica que la carpeta `blog/` contenga los archivos PDF
- Comprueba los permisos de archivo

### El sitio muestra 404 en subrutas
- Esto está configurado en `netlify.toml` para redirigir a `index.html`
- Si persiste, verifica que el archivo `netlify.toml` esté en la raíz

### Errores de CORS
- Netlify maneja automáticamente CORS
- Si hay problemas, revisa los encabezados en `netlify.toml`

## 📞 Contacto y Soporte

- **Soporte de Netlify**: https://docs.netlify.com
- **Estado de Netlify**: https://www.netlify.com/status/
- **Comunidad**: https://community.netlify.com

## 📝 Notas Importantes

1. **Actualizaciones**: Cualquier cambio que hagas en GitHub se desplegará automáticamente en Netlify
2. **Rollback**: Puedes revertir a un deployment anterior desde Netlify Dashboard
3. **Staging**: Puedes crear ramas para testing antes de ir a producción
4. **Backups**: Netlify mantiene un historial de todos tus deployments

---

**Sitio creado para**: Estudio Hermosilla Quiroga Agustín
**Especialidades**: Defensa Penal, Querellas, Ciberdelitos
**Ubicación**: Esquel, Chubut
