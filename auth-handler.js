const auth = firebase.auth(); // Asegúrate de que esta variable esté disponible desde el <head>

// Elementos del DOM
const mainContent = document.getElementById('main-app-content');
const loadingScreen = document.getElementById('loading-screen');
const logoutButton = document.getElementById('logoutButton');

// 1. Manejar el Cierre de Sesión
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        auth.signOut()
            .then(() => {
                console.log("Sesión cerrada.");
                // onAuthStateChanged se encarga de la redirección
            })
            .catch((error) => {
                console.error("Error al cerrar sesión:", error);
                alert("Hubo un error al cerrar la sesión.");
            });
    });
}

// 2. Proteger la Página con el Listener de Estado
auth.onAuthStateChanged((user) => {
    // Una vez que Firebase verifica la sesión, ocultamos la pantalla de carga
    if (loadingScreen) {
        loadingScreen.style.display = 'none';
    }

    if (user) {
        // EL USUARIO ESTÁ AUTENTICADO
        console.log("Usuario logueado:", user.email, "UID:", user.uid);
        
        // Mostrar el contenido principal del dashboard
        if (mainContent) {
            mainContent.style.display = 'block';
        }

    } else {
        // EL USUARIO NO ESTÁ AUTENTICADO
        console.log("No hay usuario. Redirigiendo a login.");
        
        // Redirección obligatoria a la página de inicio de sesión
        window.location.href = "login.html"; 
        
        // Ocultar contenido por si acaso
        if (mainContent) {
            mainContent.style.display = 'none';
        }
    }
});
