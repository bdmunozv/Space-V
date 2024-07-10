function handleCloseClick(event) {
    const closeBtn = event.target.closest('.close-toast');
    if (closeBtn) {
        const toast = closeBtn.closest('.toast');
        if (toast) {
            removeToast(toast);
        }
    }
}

function removeToast(toast) {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
}

function createToast(type, message, timer = 5000, notificationsSelector = '.toastNotifications') {
    const notifications = document.querySelector(notificationsSelector);
    const root = document.documentElement;
    const icons = {
        success: 'fa-circle-check',
        error: 'fa-circle-xmark',
        warning: 'fa-triangle-exclamation',
        info: 'fa-circle-info'
    };
    const titles = {
        success: 'Exito',
        error: 'Error',
        warning: 'Alerta',
        info: 'info'
    };
    const title = titles[type];
    const icon = icons[type];
    const toast = document.createElement("li");
    toast.className = `toast ${type}`;
    toast.innerHTML = `<div class="toast-item">
                         <i class="fa-solid ${icon}"></i>
                         <div>
                            <h3>¡${title}!</h3>
                             <p>${message}</p>
                         </div>
                      </div>
                      <i class="fa-solid fa-xmark close-toast"></i>`;
    notifications.appendChild(toast);
    const timeAnimation = timer / 1000;
    root.style.setProperty('--timeAnimation', `${timeAnimation}s`);
    toast.timeoutId = setTimeout(() => removeToast(toast), timer);

    // Agregar el evento handleCloseClick al contenedor de notificaciones
    notifications.addEventListener('click', handleCloseClick);
}

export { createToast };
