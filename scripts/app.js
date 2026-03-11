//app.js
//Token: 02230131001-2026A | Producto: NovaMind | Examen diagnóstico 2026A
const STUDENT_TOKEN = '02230131001-2026A';

    const toggleBtn = document.getElementById('darkModeToggle');
    const body = document.body;

    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️ Desactivar Modo Oscuro';
    }

    toggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            toggleBtn.textContent = '☀️ Desactivar Modo Oscuro';
        } else {
            localStorage.setItem('darkMode', 'disabled');
            toggleBtn.textContent = '🌙 Activar Modo Oscuro';
        }
    });

