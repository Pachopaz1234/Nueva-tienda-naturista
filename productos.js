// Base de datos de productos
const productos = [
    // Hierbas Medicinales (10 productos)
    { id: 1, nombre: "Manzanilla", descripcion: "Flor de manzanilla para infusiones relajantes", precio: "$30.000", categoria: "hierbas", imagen: "🌼" },
    { id: 2, nombre: "Menta", descripcion: "Hojas de menta fresca para digestión", precio: "$30.000", categoria: "hierbas", imagen: "🌿" },
    { id: 3, nombre: "Romero", descripcion: "Romero orgánico para mejorar la memoria", precio: "$30.000", categoria: "hierbas", imagen: "🌱" },
    { id: 4, nombre: "Valeriana", descripcion: "Raíz de valeriana para el sueño", precio: "$30.000", categoria: "hierbas", imagen: "🌱" },
    { id: 5, nombre: "Equinácea", descripcion: "Para fortalecer el sistema inmune", precio: "$30.000", categoria: "hierbas", imagen: "🌸" },
    { id: 6, nombre: "Jengibre", descripcion: "Raíz de jengibre para náuseas", precio: "$30.000", categoria: "hierbas", imagen: "🌱" },
    { id: 7, nombre: "Cúrcuma", descripcion: "Cúrcuma molida antiinflamatoria", precio: "$30.000", categoria: "hierbas", imagen: "🌱" },
    { id: 8, nombre: "Diente de León", descripcion: "Hojas de diente de León depurativas", precio: "$30.000", categoria: "hierbas", imagen: "🌼" },
    { id: 9, nombre: "Hipérico", descripcion: "Hierba de San Juan para el ánimo", precio: "$30.000", categoria: "hierbas", imagen: "🌼" },
    { id: 10, nombre: "Boldo", descripcion: "Hojas de boldo para el hígado", precio: "$30.000", categoria: "hierbas", imagen: "🌿" },

    // Suplementos (10 productos)
    { id: 11, nombre: "Vitamina C Natural", descripcion: "De camu camu y acerola", precio: "$30.000", categoria: "suplementos", imagen: "💊" },
    { id: 12, nombre: "Magnesio", descripcion: "Citrato de magnesio para calmar", precio: "$130.000", categoria: "suplementos", imagen: "💊" },
    { id: 13, nombre: "Zinc", descripcion: "Zinc picolinato para inmunidad", precio: "$30.000", categoria: "suplementos", imagen: "💊" },
    { id: 14, nombre: "Omega 3", descripcion: "De aceite de pescado salvaje", precio: "$30.000", categoria: "suplementos", imagen: "🐟" },
    { id: 15, nombre: "Probióticos", descripcion: "10 cepas para flora intestinal", precio: "$30.000", categoria: "suplementos", imagen: "🦠" },
    { id: 16, nombre: "Espirulina", descripcion: "Alga rica en proteínas", precio: "$30.000", categoria: "suplementos", imagen: "🌊" },
    { id: 17, nombre: "Clorofila", descripcion: "Líquida para desintoxicar", precio: "$30.000", categoria: "suplementos", imagen: "💧" },
    { id: 18, nombre: "Colágeno", descripcion: "Hidrolizado para piel y articulaciones", precio: "$30.000", categoria: "suplementos", imagen: "💊" },
    { id: 19, nombre: "Melatonina", descripcion: "Para dormir mejor", precio: "$30.000", categoria: "suplementos", imagen: "💊" },
    { id: 20, nombre: "Ashwagandha", descripcion: "Para reducir el estrés", precio: "$30.000", categoria: "suplementos", imagen: "🌱" },

    // Aceites Esenciales (10 productos)
    { id: 21, nombre: "Aceite de Lavanda", descripcion: "Relajante y calmante", precio: "$30.000", categoria: "aceites", imagen: "💜" },
    { id: 22, nombre: "Aceite de Árbol de Té", descripcion: "Antiséptico natural", precio: "$30.000", categoria: "aceites", imagen: "🌳" },
    { id: 23, nombre: "Aceite de Eucalipto", descripcion: "Para vías respiratorias", precio: "$30.000", categoria: "aceites", imagen: "🌿" },
    { id: 24, nombre: "Aceite de Menta", descripcion: "Energizante y refrescante", precio: "$30.000", categoria: "aceites", imagen: "🌱" },
    { id: 25, nombre: "Aceite de Romero", descripcion: "Estimula el crecimiento capilar", precio: "$30.000", categoria: "aceites", imagen: "🌿" },
    { id: 26, nombre: "Aceite de Limón", descripcion: "Purificante y alegre", precio: "$30.000", categoria: "aceites", imagen: "🍋" },
    { id: 27, nombre: "Aceite de Incienso", descripcion: "Meditación y paz interior", precio: "$30.000", categoria: "aceites", imagen: "🪔" },
    { id: 28, nombre: "Aceite de Manzanilla", descripcion: "Calmante para niños", precio: "$30.000", categoria: "aceites", imagen: "🌼" },
    { id: 29, nombre: "Aceite de Sándalo", descripcion: "Afrodisíaco natural", precio: "$30.000", categoria: "aceites", imagen: "🪵" },
    { id: 30, nombre: "Aceite de Jazmín", descripcion: "Para el equilibrio hormonal", precio: "$30.000", categoria: "aceites", imagen: "🌸" },

    // Tés e Infusiones (10 productos)
    { id: 31, nombre: "Té Verde", descripcion: "Matcha orgánico antioxidante", precio: "$30.000", categoria: "tes", imagen: "🍵" },
    { id: 32, nombre: "Té Rojo", descripcion: "Pu-erh para quemar grasas", precio: "$30.000", categoria: "tes", imagen: "🍵" },
    { id: 33, nombre: "Té de Jengibre", descripcion: "Con limón y miel", precio: "$30.000", categoria: "tes", imagen: "🍵" },
    { id: 34, nombre: "Té de Canela", descripcion: "Regula el azúcar en sangre", precio: "$30.000", categoria: "tes", imagen: "🍵" },
    { id: 35, nombre: "Té de Hibisco", descripcion: "Rico en vitamina C", precio: "$30.000", categoria: "tes", imagen: "🌺" },
    { id: 36, nombre: "Té de Manzanilla", descripcion: "Para dormir mejor", precio: "$30.000", categoria: "tes", imagen: "🌼" },
    { id: 37, nombre: "Té de Menta", descripcion: "Digestivo y refrescante", precio: "$30.000", categoria: "tes", imagen: "🌿" },
    { id: 38, nombre: "Rooibos", descripcion: "Té rojo sudafricano sin teína", precio: "$30.000", categoria: "tes", imagen: "🍵" },
    { id: 39, nombre: "Té de Cúrcuma", descripcion: "Golden milk relajante", precio: "$30.000", categoria: "tes", imagen: "🟡" },
    { id: 40, nombre: "Té de Frutos Rojos", descripcion: "Mezcla de bayas antioxidantes", precio: "$30.000", categoria: "tes", imagen: "🍓" },

    // Más productos variados (10 productos)
    { id: 41, nombre: "Propóleo", descripcion: "Extracto de propóleo para garganta", precio: "$30.000", categoria: "hierbas", imagen: "🐝" },
    { id: 42, nombre: "Jalea Real", descripcion: "Energía y vitalidad", precio: "$30.000", categoria: "suplementos", imagen: "🐝" },
    { id: 43, nombre: "Polen de Abeja", descripcion: "Multivitamínico natural", precio: "$30.000", categoria: "suplementos", imagen: "🌼" },
    { id: 44, nombre: "Aloe Vera", descripcion: "Gel puro para piel", precio: "$30.000", categoria: "aceites", imagen: "🌵" },
    { id: 45, nombre: "Carbón Activado", descripcion: "Desintoxicante natural", precio: "$30.000", categoria: "suplementos", imagen: "⚫" },
    { id: 46, nombre: "Miel de Manuka", descripcion: "Antibiótico natural", precio: "$30.000", categoria: "hierbas", imagen: "🍯" },
    { id: 47, nombre: "Semillas de Chía", descripcion: "Ricas en omega 3", precio: "$30.000", categoria: "hierbas", imagen: "🌱" },
    { id: 48, nombre: "Aceite de Coco", descripcion: "Virgen extra orgánico", precio: "$30.000", categoria: "aceites", imagen: "🥥" },
    { id: 49, nombre: "Stevia", descripcion: "Endulzante natural", precio: "$30.000", categoria: "hierbas", imagen: "🌿" },
    { id: 50, nombre: "Alga Kombu", descripcion: "Para caldos y sopas", precio: "$30.000", categoria: "hierbas", imagen: "🌊" }
];

// Función para mostrar productos
function mostrarProductos(categoria = 'todos') {
    const container = document.getElementById('productsContainer');
    if (!container) return;

    let productosFiltrados = categoria === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria === categoria);

    container.innerHTML = productosFiltrados.map(producto => `
        <div class="product-card">
            <div class="product-icon">${producto.imagen}</div>
            <div class="product-info">
                <h3>${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <p class="product-price">${producto.precio}</p>
                <button class="btn-add" onclick="agregarAlCarrito(${producto.id})">
                    Agregar al carrito
                </button>
            </div>
        </div>
    `).join('');
}

// Función para filtrar productos
function filterProducts(categoria) {
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Mostrar productos filtrados
    mostrarProductos(categoria);
}

// Función simulada para agregar al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    alert(`¡${producto.nombre} agregado al carrito!`);
}

// Cargar productos cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});
