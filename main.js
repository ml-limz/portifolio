// Menu mobile hamburger
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
});

// Animação de scroll suave para links internos
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Animação de fade-in ao scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .certificate-card, .faq-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Inicializar animações
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Adicionar classe fade-in aos elementos
function addFadeInClass() {
    const elements = document.querySelectorAll('.project-card, .skill-category, .timeline-item, .certificate-card, .faq-item');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
}

document.addEventListener('DOMContentLoaded', addFadeInClass);

// Funcionalidade do formulário de contato
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (!contactForm || !formStatus) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obter dados do formulário
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validação básica
        if (!data.name || !data.email || !data.subject || !data.message) {
            showFormStatus('Por favor, preencha todos os campos obrigatórios (*)', 'error');
            return;
        }
        
        // Validação de email
        if (!isValidEmail(data.email)) {
            showFormStatus('Por favor, insira um email válido', 'error');
            return;
        }
        
        // Simular envio do formulário
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;
        
        // Mostrar loading
        submitBtn.innerHTML = '<span class="loading"></span> Enviando...';
        submitBtn.disabled = true;
        
        // Simular envio (remover em produção e usar API real)
        setTimeout(() => {
            // Restaurar botão
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Mostrar sucesso
            showFormStatus('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            
            // Limpar formulário
            contactForm.reset();
        }, 2000);
    });
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = `form-status ${type}`;
        formStatus.style.display = 'block';
        
        // Auto-ocultar após 5 segundos
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }
}

// Inicializar formulário quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', initContactForm);

// Funcionalidade de thumbnails do projeto
function initProjectThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const mainImage = this.closest('.project-images').querySelector('.project-img');
            const newSrc = this.src.replace('80x60', '400x250');
            
            // Adicionar efeito de transição
            mainImage.style.opacity = '0.5';
            
            setTimeout(() => {
                mainImage.src = newSrc;
                mainImage.style.opacity = '1';
            }, 200);
        });
    });
}

// Inicializar thumbnails
document.addEventListener('DOMContentLoaded', initProjectThumbnails);

// Adicionar efeito de digitação ao título (opcional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito de digitação ao título do hero (se existir)
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && !heroTitle.classList.contains('no-type')) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Validação de formulário em tempo real
function initRealTimeValidation() {
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                validateField(this);
            }
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const isRequired = field.hasAttribute('required');
        
        // Remover classes anteriores
        field.classList.remove('valid', 'invalid');
        
        if (isRequired && !value) {
            field.classList.add('invalid');
            return false;
        }
        
        if (field.type === 'email' && value) {
            if (!isValidEmail(value)) {
                field.classList.add('invalid');
                return false;
            }
        }
        
        if (value) {
            field.classList.add('valid');
        }
        
        return true;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Inicializar validação em tempo real
document.addEventListener('DOMContentLoaded', initRealTimeValidation);

// Botão voltar ao topo
function initBackToTop() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Inicializar botão voltar ao topo
document.addEventListener('DOMContentLoaded', initBackToTop);

// Efeito parallax suave (opcional)
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero, .contact-hero');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Inicializar parallax (descomentar se quiser usar)
// document.addEventListener('DOMContentLoaded', initParallax);

// Console log de boas-vindas
console.log('%c Bem-vindo ao Meu Portfólio! ', 'background: #722f37; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%c Desenvolvido com ❤️ e muito código!', 'color: #722f37; font-size: 14px;');