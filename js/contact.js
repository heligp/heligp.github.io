// Contact form functionality
// Replace the endpoint below with your Formspree (or other service) URL
const FORM_ENDPOINT = 'https://formspree.io/f/your_form_id';

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

    // Send data to the form service
    fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => {
        if (response.ok) {
            showMessage('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
            form.reset();
        } else {
            return response.json().then(err => {
                const errorMsg = err.error || 'Ocurrió un problema al enviar el mensaje.';
                showMessage(errorMsg, 'error');
            });
        }
    })
    .catch(() => {
        showMessage('Error de conexión. Por favor, intenta nuevamente.', 'error');
    })
    .finally(() => {
        resetFormState(submitBtn);
    });
}

function validateForm(data) {
    const requiredFields = ['name', 'email', 'message']; // Cambiado de español a inglés
    
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
