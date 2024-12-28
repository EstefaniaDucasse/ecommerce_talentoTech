document.addEventListener("DOMContentLoaded", () => {
    const tablaCarrito = document.getElementById("tablaCarrito");
    const totalCarrito = document.getElementById("totalCarrito");

    // Obtener carrito de localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Función para renderizar el carrito
    const renderizarCarrito = () => {
        // Limpiar tabla
        tablaCarrito.innerHTML = "";

        if (carrito.length === 0) {
            tablaCarrito.innerHTML = "<tr><td colspan='3'>El carrito está vacío.</td></tr>";
            totalCarrito.textContent = "0.00";
            return;
        }

        // Renderizar productos en la tabla
        carrito.forEach((producto, index) => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>$${producto.precio}</td>
                <td>
                    <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
                </td>
            `;
            tablaCarrito.appendChild(fila);
        });

        // Actualizar el total
        calcularTotal();
    };


    const calcularTotal = () => { 
        // Declaración de la función calcularTotal como una función flecha.
        
        const total = carrito.reduce((suma, producto) => suma + parseFloat(producto.precio), 0);
        // Usamos el método .reduce() para calcular la suma de los precios de los productos en el carrito:
        // - `suma` es el acumulador que empieza en 0 (segundo argumento de reduce).
        // - `producto` es cada elemento (objeto) del array `carrito`.
        // - `parseFloat(producto.precio)` convierte el precio del producto a número decimal (en caso de que esté en formato texto).
        // - La función suma el precio de cada producto al acumulador `suma`.
    
        totalCarrito.textContent = total.toFixed(2);
        // Redondeamos el total a 2 decimales usando .toFixed(2) y actualizamos el contenido del elemento
        // HTML con ID `totalCarrito` para mostrar el total calculado.
    };
    

    // Event listener para eliminar un producto
    tablaCarrito.addEventListener("click", (event) => { 
    
        if (event.target.classList.contains("btn-danger")) { 
    
            const index = event.target.getAttribute("data-index"); 
            // Este atributo indica la posición del producto en el array `carrito`.
    
            carrito.splice(index, 1); 
            // Eliminamos del array `carrito` el producto correspondiente.
    
            localStorage.setItem("carrito", JSON.stringify(carrito)); 
            // Actualizamos el almacenamiento local (`localStorage`) con el nuevo estado del carrito.
            // Convertimos el array actualizado a una cadena JSON.
    
            renderizarCarrito(); 
            // Llamamos a la función `renderizarCarrito` para actualizar la tabla del carrito en la página.
            // Esto asegura que la tabla refleje el cambio tras eliminar un producto.
        }
    });
    

    // Renderizar carrito al cargar la página
    renderizarCarrito();
});