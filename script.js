// ============================================
// FUNCIONES DE NAVEGACIÓN Y SCROLL
// ============================================

/**
 * Scroll suave a una sección específica
 */
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

/**
 * Agregar efecto de scroll a los enlaces de navegación
 */
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll para todos los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Cerrar navbar si está abierto (mobile)
                const navbar = document.querySelector('.navbar-collapse');
                if (navbar && navbar.classList.contains('show')) {
                    const toggler = document.querySelector('.navbar-toggler');
                    toggler.click();
                }
            }
        });
    });

    // Agregar clase active al navlink según scroll
    updateActiveNavLink();
    window.addEventListener('scroll', updateActiveNavLink);
});

/**
 * Actualizar el navlink activo según la posición del scroll
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// EFECTOS DE ANIMACIÓN AL SCROLL
// ============================================

/**
 * Observador de intersección para animaciones
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Agregar clase para efectos adicionales
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.addEventListener('DOMContentLoaded', function() {
    // Animar todos los elementos de texto y contenido
    const elementsToAnimate = document.querySelectorAll(
        'h1, h2, h3, p, .card-situacion, .card-proceso, .autoridad-item, .accordion-item, .btn-dorado, .btn-whatsapp, .blog-card, .card-honorarios'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.8s ease ${index * 0.05}s, transform 0.8s ease ${index * 0.05}s`;
        observer.observe(el);
    });
});

// ============================================
// FUNCIONALIDAD DE BOTONES
// ============================================

/**
 * Agregar efecto ripple a los botones
 */
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-dorado');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// ============================================
// VALIDACIÓN DE FORMULARIOS (si se agregan)
// ============================================

/**
 * Validar formularios antes de enviar
 */
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    }
}

// ============================================
// UTILIDADES
// ============================================

/**
 * Copiar texto al portapapeles
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copiado al portapapeles');
    }).catch(() => {
        showNotification('Error al copiar', 'error');
    });
}

/**
 * Mostrar notificación temporal
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} alert-dismissible fade show`;
    notification.setAttribute('role', 'alert');
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    const container = document.body;
    container.insertBefore(notification, container.firstChild);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ============================================
// TRACKING Y ANALYTICS (opcional)
// ============================================

/**
 * Registrar clics en CTA
 */
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('a[href*="wa.me"]');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Aquí puedes agregar código de tracking
            console.log('CTA clicked: WhatsApp');
            
            // Ejemplo con Google Analytics (si está configurado)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'whatsapp_click', {
                    'event_category': 'engagement',
                    'event_label': 'cta_button'
                });
            }
        });
    });
});

// ============================================
// INICIALIZACIÓN
// ============================================

/**
 * Función de inicialización general
 */
function init() {
    console.log('Sitio web Hermosilla Quiroga Agustín cargado correctamente');
    
    // Verificar que Bootstrap esté disponible
    if (typeof bootstrap === 'undefined') {
        console.warn('Bootstrap no está cargado correctamente');
    }
    
    // Inicializar tooltips y popovers si existen
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

// Ejecutar inicialización cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ============================================
// MODO OSCURO (opcional)
// ============================================

/**
 * Toggle para modo oscuro
 */
function toggleDarkMode() {
    const html = document.documentElement;
    const isDarkMode = html.getAttribute('data-bs-theme') === 'dark';
    
    if (isDarkMode) {
        html.removeAttribute('data-bs-theme');
        localStorage.setItem('theme', 'light');
    } else {
        html.setAttribute('data-bs-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Cargar preferencia de tema guardada
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
});

// ============================================
// PERFORMANCE
// ============================================

/**
 * Lazy loading para imágenes
 */
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// ============================================
// UTILIDADES ADICIONALES
// ============================================

/**
 * Obtener parámetro de URL
 */
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

/**
 * Formatear número de teléfono
 */
function formatPhoneNumber(phone) {
    const cleaned = ('' + phone).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
    if (match) {
        return match[1] + ' ' + match[2] + ' ' + match[3];
    }
    return phone;
}

/**
 * Detectar dispositivo móvil
 */
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ============================================
// EVENTOS PERSONALIZADOS
// ============================================

/**
 * Disparar evento personalizado
 */
function dispatchCustomEvent(eventName, detail = {}) {
    const event = new CustomEvent(eventName, { detail });
    document.dispatchEvent(event);
}

/**
 * Escuchar evento personalizado
 */
function onCustomEvent(eventName, callback) {
    document.addEventListener(eventName, callback);
}

// ============================================
// DEPURACIÓN
// ============================================

/**
 * Función de depuración
 */
const debug = {
    log: function(message, data = null) {
        console.log(`[Hermosilla] ${message}`, data || '');
    },
    warn: function(message, data = null) {
        console.warn(`[Hermosilla] ${message}`, data || '');
    },
    error: function(message, data = null) {
        console.error(`[Hermosilla] ${message}`, data || '');
    }
};

// Exportar funciones globales si es necesario
window.hermosilla = {
    scrollToSection,
    copyToClipboard,
    showNotification,
    toggleDarkMode,
    getUrlParameter,
    formatPhoneNumber,
    isMobileDevice,
    dispatchCustomEvent,
    onCustomEvent,
    debug
};
