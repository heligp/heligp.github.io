// Contact form functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Validate form
    if (!validateForm(data)) {
        showMessage('Por favor, completa todos los campos requeridos.', 'error');
        resetFormState(submitBtn);
        return;
    }
    
    // Create mailto link
    const subject = `Nuevo mensaje de ${data.nombre} - ${data.proyecto || 'Proyecto general'}`;
    const body = createEmailBody(data);
    
    const mailtoLink = `mailto:heligonzalespe@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showMessage('¡Mensaje enviado! Tu cliente de email se abrirá automáticamente.', 'success');
    
    // Reset form
    form.reset();
    resetFormState(submitBtn);
}

function validateForm(data) {
    const requiredFields = ['nombre', 'email', 'mensaje'];
    
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            return false;
        }
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return false;
    }
    
    return true;
}

function createEmailBody(data) {
    return `
Nombre: ${data.nombre}
Email: ${data.email}
Empresa: ${data.empresa || 'No especificada'}
Tipo de Proyecto: ${data.proyecto || 'No especificado'}

Mensaje:
${data.mensaje}

---
Enviado desde el formulario de contacto de heligonzalespe.com
    `.trim();
}

function showMessage(text, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const message = document.createElement('div');
    message.className = `form-message ${type}`;
    message.textContent = text;
    
    // Insert before form
    const form = document.querySelector('.contact-form');
    form.parentNode.insertBefore(message, form);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 5000);
}

function resetFormState(submitBtn) {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
}
