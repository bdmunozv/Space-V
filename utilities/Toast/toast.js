class Toast {
    constructor(notificationsSelector) {
        this.notifications = document.querySelector(notificationsSelector);
    }

    removeToast(toast) {
         toast.classList.add("hide");
        if (toast.timeoutId) clearTimeout(toast.timeoutId);
        setTimeout(() => toast.remove(), 500);
    }

    createToast(type, message, timer = 5000) {
        const titles = {
            success: 'Exito',
            error: 'Error',
            warning: 'Alerta',
            info: 'info'
        };
        const title = titles[type];
        const toast = document.createElement("li");
        toast.className = `toast-item ${type}`;
        toast.innerHTML = `<div class="toast ${type}">
                            <label class="close" onclick="toast.removeToast(this.parentElement)"></label>
                            <h3>${title}</h3>
                            <span>${message}</span>
                          </div>
                          `;
        this.notifications.appendChild(toast);
        toast.timeoutId = setTimeout(() => this.removeToast(toast), timer);
    }

    init() {
    }
}