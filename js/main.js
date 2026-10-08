// Escuchamos cualquier clic en la página
document.addEventListener('click', function (e) {
  // 1. Creamos un nuevo <div> que va a ser nuestro círculo
  const circulo = document.createElement('div');

  // 2. Le agregamos las clases
  circulo.className = 'fixed w-12 h-12 bg-blanco-crema rounded-full pointer-events-none z-50 efecto-ripple -translate-x-1/2 -translate-y-1/2';

  // 3. Posicionamos el círculo exactamente donde hicimos clic
  circulo.style.left = `${e.clientX}px`;
  circulo.style.top = `${e.clientY}px`;

  // 4. Lo inyectamos en el HTML
  document.body.appendChild(circulo);

  // 5. Lo borramos después de 600 milisegundos
  setTimeout(() => {
    circulo.remove();
  }, 600);
});
