document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    
    // Cambiar vista al hacer clic en un botón
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
        const targetView = button.dataset.view;
        
        // Actualizar botones activos
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Mostrar vista correspondiente
        views.forEach(view => view.classList.remove('active-view'));
        document.getElementById(targetView).classList.add('active-view');
        });
    });
});