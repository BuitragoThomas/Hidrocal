function calcularFuerza() {
    const h1 = parseFloat(document.getElementById('profundidad').value);
    const a = parseFloat(document.getElementById('altura').value);
    const b = parseFloat(document.getElementById('ancho').value);

    if (isNaN(h1) || isNaN(a) || isNaN(b)) {
        alert("¡Hey! Por favor, llena todos los campos numéricos antes de calcular.");
        return;
    }

    const densidad = 1000; 
    const gravedad = 9.81; 

    // 1. Cálculo de la Fuerza
    const yc = h1 + (a / 2); // Profundidad al centroide
    const area = b * a;
    const fuerzaNewtons = densidad * gravedad * area * yc;
    const fuerzaKN = fuerzaNewtons / 1000;

    // 2. Cálculo del Punto de Aplicación (Y_cp)
    // Momento de inercia para un rectángulo: (base * altura^3) / 12
    const Ixc = (b * Math.pow(a, 3)) / 12;
    const ycp = yc + (Ixc / (yc * area));

    // Mostrar los resultados en pantalla con 2 decimales
    document.getElementById('resultadoFuerza').innerText = fuerzaKN.toFixed(2);
    document.getElementById('resultadoYcp').innerText = ycp.toFixed(2);
}