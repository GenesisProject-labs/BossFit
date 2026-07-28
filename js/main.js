// ========================================
// FUNCIONALIDADES DEL SITIO BOSSFIT
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initLoader();
    initMobileMenu();
    initFormValidation();
    initSmoothScroll();
    initScrollAnimations();
    initHeaderVisibility();
    initHeroCarousel();
    initFAQ();
    initCompareButton();
});

// ========================================
// LOADER SCREEN
// ========================================

function initLoader() {
    const loaderScreen = document.getElementById('loaderScreen');
    const loaderBar = document.getElementById('loaderBar');
    
    if (loaderScreen) {
        // Simular carga y mostrar barra de progreso
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 25;
            if (progress > 100) progress = 100;
            loaderBar.style.width = progress + '%';
            
            if (progress === 100) {
                clearInterval(interval);
                // Esperar a que termine la animación del loader
                setTimeout(() => {
                    loaderScreen.classList.add('hidden');
                }, 1600);
            }
        }, 250);
        
        // Asegurar que el loader desaparece después de 4 segundos máximo
        setTimeout(() => {
            if (!loaderScreen.classList.contains('hidden')) {
                loaderBar.style.width = '100%';
                clearInterval(interval);
                setTimeout(() => {
                    loaderScreen.classList.add('hidden');
                }, 600);
            }
        }, 4000);
    }
}

// ========================================
// MENÚ MÓVIL
// ========================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// ========================================
// VALIDACIÓN DE FORMULARIO
// ========================================

function initFormValidation() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores
            const nombre = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const telefono = form.querySelector('input[type="tel"]').value.trim();
            const mensaje = form.querySelector('textarea').value.trim();

            // Validaciones
            if (!nombre) {
                showNotification('Por favor ingresa tu nombre', 'error');
                return;
            }

            if (!validarEmail(email)) {
                showNotification('Por favor ingresa un email válido', 'error');
                return;
            }

            if (!telefono) {
                showNotification('Por favor ingresa tu teléfono', 'error');
                return;
            }

            if (!mensaje) {
                showNotification('Por favor ingresa tu mensaje', 'error');
                return;
            }

            // Si todo es válido
            showNotification('¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.', 'success');
            form.reset();
        });
    }
}

// Validar email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Mostrar notificación
function showNotification(mensaje, tipo) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${tipo}`;
    notification.textContent = mensaje;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: ${tipo === 'success' ? '#06D6A0' : '#FF6B35'};
        color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ========================================
// DESPLAZAMIENTO SUAVE
// ========================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========================================
// ANIMACIONES AL DESPLAZAR
// ========================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animar tarjetas
    document.querySelectorAll('.feature-card, .plan-card, .class-card, .testimonial-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ========================================
// VISIBILIDAD DEL HEADER - EFECTO SCROLL
// ========================================
// VISIBILIDAD DEL HEADER - EFECTO SCROLL
// ========================================

let lastScrollY = 0;

function initHeaderVisibility() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    // Listen to scroll events
    window.addEventListener('scroll', updateHeaderVisibility, { passive: true });
    
    // Also use polling as fallback for reliability
    setInterval(updateHeaderVisibility, 50);
    
    // Initial update
    updateHeaderVisibility();
}

function updateHeaderVisibility() {
    const header = document.querySelector('.header');
    if (!header) return;
    
    const currentScrollY = window.scrollY || window.pageYOffset || 0;
    
    // Check scroll direction - hide/show logo and hamburger
    if (currentScrollY > lastScrollY) {
        // Scrolling DOWN - hide logo and hamburger
        header.classList.add('hidden');
        
        // Close mobile menu if open
        const navMenu = document.getElementById('navMenu');
        const menuToggle = document.getElementById('menuToggle');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    } else if (currentScrollY < lastScrollY) {
        // Scrolling UP - show logo and hamburger
        header.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
}

// ========================================
// CARRUSEL DE CARACTERÍSTICAS (DESHABILITADO)
// ========================================

function initFeaturesCarousel() {
    // Carrusel deshabilitado - diseño de grid estático implementado
}

// ========================================
// CARRUSEL DE HERO
// ========================================

function initHeroCarousel() {
    const carousel = document.getElementById('heroCarousel');
    
    if (!carousel) return;
    
    const images = carousel.querySelectorAll('.hero-image');
    let currentIndex = 0;
    
    if (images.length === 0) return;
    
    // Cambiar imagen cada 3 segundos
    setInterval(() => {
        // Remover clase active de todas las imágenes
        images.forEach(img => img.classList.remove('active'));
        
        // Avanzar al siguiente índice
        currentIndex = (currentIndex + 1) % images.length;
        
        // Agregar clase active a la imagen actual
        images[currentIndex].classList.add('active');
    }, 3000);
}

// ========================================
// ANIMACIONES CSS
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// FUNCIONES UTILITARIAS
// ========================================

// Agregar active a nav según scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.header');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Botones de acción
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Crear efecto ripple
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ========================================
// ALERTA DE HORARIOS NO DISPONIBLES
// ========================================

function showScheduleAlert() {
    // Crear overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    // Crear modal
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: #111111;
        border: 2px solid #E53935;
        border-radius: 16px;
        padding: 2.5rem;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 20px 60px rgba(229, 57, 53, 0.3);
        text-align: center;
        animation: slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    `;
    
    // Crear contenido
    const content = document.createElement('div');
    content.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <svg style="width: 60px; height: 60px; color: #E53935; margin: 0 auto;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        </div>
        <h2 style="color: #FFFFFF; font-size: 1.5rem; margin-bottom: 0.5rem; font-weight: 600;">Horarios No Disponibles</h2>
        <p style="color: #AAAAAA; font-size: 0.95rem; line-height: 1.6; margin-bottom: 2rem;">
            Los horarios estarán disponibles pronto. Por favor, contacta con nuestro equipo para más información.
        </p>
        <button id="closeScheduleAlert" style="
            background: #E53935;
            color: white;
            border: none;
            padding: 0.75rem 2rem;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        " onmouseover="this.style.background='#D32F2F'" onmouseout="this.style.background='#E53935'">
            Entendido
        </button>
    `;
    
    modal.appendChild(content);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Cerrar modal
    const closeBtn = document.getElementById('closeScheduleAlert');
    closeBtn.addEventListener('click', () => {
        overlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => overlay.remove(), 300);
    });
    
    // Cerrar con Escape
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            overlay.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => overlay.remove(), 300);
            document.removeEventListener('keydown', handleEscape);
        }
    };
    
    document.addEventListener('keydown', handleEscape);
    
    // Cerrar al hacer click fuera
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => overlay.remove(), 300);
        }
    });
}

// ========================================
// FAQ ACCORDION
// ========================================

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Cerrar otros items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle item actual
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
}

// ========================================
// COMPARE PLANS BUTTON
// ========================================

function initCompareButton() {
    const compareBtn = document.getElementById('compareBtn');
    
    if (compareBtn) {
        compareBtn.addEventListener('click', function() {
            alert('Función de comparación de planes próximamente disponible');
        });
    }
}

// ========================================
// CONTADOR PARA ESTADÍSTICAS (OPCIONAL)
// ========================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// MODAL DE CONTACTO
// ========================================

function selectPlanAndOpen(planValue) {
    // Set the plan value in the dropdown
    const planSelect = document.getElementById('formPlan');
    if (planSelect) {
        planSelect.value = planValue;
    }
    // Open the modal
    openContactModal();
}

function openContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
        closeContactModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeContactModal();
    }
});

function handleContactForm(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const phone = document.getElementById('formPhone').value;
    const plan = document.getElementById('formPlan').value;
    const message = document.getElementById('formMessage').value;
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Hola, me gustaria informacion sobre el plan:\n\nNombre: ${name}\nEmail: ${email}\nTelefono: ${phone}\nPlan de Interes: ${plan}\nMensaje: ${message}`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp API URL
    const whatsappNumber = '18494604004';
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    
    // Log the submission
    console.log('Form submitted:', { name, email, phone, plan, message });
    
    // Reset form and close modal
    event.target.reset();
    closeContactModal();
    
    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
}

console.log('✅ Bossfit - Script principal cargado correctamente');
