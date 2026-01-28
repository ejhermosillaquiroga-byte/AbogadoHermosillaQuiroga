# Guía de Integración WhatsApp - Hermosilla Quiroga Agustín

## 1. CONFIGURACIÓN ACTUAL

Tu número de WhatsApp está configurado en todos los botones de la página:
- **Número**: 5492944211769
- **Todos los enlaces WhatsApp** dirigen a este número

## 2. CÓMO FUNCIONA LA INTEGRACIÓN

### Botones WhatsApp en la página:
1. **Botón en Navegación** (arriba a la derecha)
2. **Botón en Hero Section** (sección principal)
3. **Botones en Defensa Penal** (sección de defensa)
4. **Botones en Atención a Víctimas** (sección de víctimas)
5. **Botón en CTA Final** (cierre de página)

### Cómo funcionan:
- Cuando un usuario hace clic en cualquier botón de WhatsApp, se abre automáticamente:
  - En **desktop**: Se abre WhatsApp Web (si está instalado)
  - En **mobile**: Se abre la app de WhatsApp
  - Se crea un nuevo chat con tu número

### URL del enlace:
```
https://wa.me/5492944211769
```

## 3. PERSONALIZACIÓN DE MENSAJES

Puedes agregar un mensaje predeterminado modificando los enlaces. Por ejemplo:

### Mensaje en Hero:
```html
<a href="https://wa.me/5492944211769?text=Hola%20necesito%20defensa%20penal%20urgente">
    📲 Contactar por WhatsApp
</a>
```

### Mensaje en Defensa Penal:
```html
<a href="https://wa.me/5492944211769?text=Estoy%20imputado%20y%20necesito%20defensa%20inmediata">
    📲 Defensa penal inmediata
</a>
```

### Mensaje en Víctimas:
```html
<a href="https://wa.me/5492944211769?text=Soy%20víctima%20de%20un%20delito%20y%20necesito%20asesoramiento">
    📲 Asesoramiento confidencial
</a>
```

## 4. CAMBIAR EL NÚMERO DE WHATSAPP

Si necesitas cambiar el número en el futuro, busca y reemplaza:

### En el archivo `index.html`:
Busca: `5492944211769`
Reemplaza por: `TU_NUEVO_NUMERO` (sin espacios ni guiones)

### Ejemplo:
```bash
# En Linux/Mac:
sed -i 's/5492944211769/5491234567890/g' index.html

# En Windows (PowerShell):
(Get-Content index.html) -replace '5492944211769', '5491234567890' | Set-Content index.html
```

## 5. MEJORES PRÁCTICAS

### ✅ Recomendaciones:
1. **Responde rápido**: Tu página promete atención 24/7
2. **Automensajes**: Configura respuestas automáticas en WhatsApp Business
3. **Clasificación**: Crea grupos de contactos por tipo (imputados, víctimas)
4. **Seguimiento**: Mantén un registro de consultas
5. **Privacidad**: Respeta la confidencialidad de tus clientes

### ⚠️ Evita:
- Cambiar el número sin actualizar la página
- Dejar mensajes sin responder
- Compartir números de otros clientes
- Usar WhatsApp para comunicaciones legales críticas (usa email para confirmación)

## 6. ESTADÍSTICAS Y TRACKING

Para rastrear qué botón genera más clics, puedes agregar parámetros:

```html
<!-- Hero -->
<a href="https://wa.me/5492944211769?text=Consulta%20desde%20Hero">

<!-- Defensa -->
<a href="https://wa.me/5492944211769?text=Consulta%20desde%20Defensa">

<!-- Víctimas -->
<a href="https://wa.me/5492944211769?text=Consulta%20desde%20Victimas">
```

Luego en WhatsApp podrás ver de dónde vienen tus contactos.

## 7. INTEGRACIÓN CON WHATSAPP BUSINESS

Para una experiencia más profesional, considera:

1. **WhatsApp Business API**: Automatizar respuestas
2. **Chatbots**: Responder preguntas frecuentes automáticamente
3. **Etiquetas**: Clasificar conversaciones
4. **Plantillas**: Respuestas predefinidas

## 8. SOPORTE Y TROUBLESHOOTING

### El botón no funciona:
- Verifica que el número esté correcto (sin espacios ni caracteres especiales)
- Asegúrate de que WhatsApp esté instalado en el dispositivo
- Prueba en un navegador diferente

### El número no recibe mensajes:
- Verifica que el número esté activo en WhatsApp
- Revisa que no esté bloqueado en tu configuración de privacidad
- Comprueba que tienes saldo/plan activo

### Cambiar mensaje automático:
Edita el texto en el parámetro `?text=` del URL, reemplazando espacios con `%20`

## 9. CONTACTO Y SOPORTE

Para cambios en la página o problemas técnicos:
- Revisa el archivo `index.html`
- Busca la sección de comentarios HTML
- Contacta al desarrollador si necesitas cambios avanzados

---

**Última actualización**: 23 de enero de 2026
**Número configurado**: 5492944211769
