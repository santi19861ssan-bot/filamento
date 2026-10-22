# FILAMENTO JOYERÍA — tienda online

Tienda estática responsive con catálogo editable, carrito funcional y envío del resumen del pedido por WhatsApp.

## Archivos
- `index.html`: estructura de la página.
- `styles.css`: estilos, diseño responsive y componentes.
- `script.js`: catálogo, carrito, formulario y enlace de WhatsApp.
- `README.md`: estas instrucciones.

## Cómo probar
1. Descomprime el ZIP.
2. Abre `index.html` en un navegador moderno. Para una prueba local sencilla esto suele ser suficiente.
3. Agrega productos al carrito, modifica cantidades y pulsa **Continuar pedido**.
4. Completa los datos y pulsa **Enviar pedido por WhatsApp**. Se abrirá WhatsApp Web o la aplicación con el mensaje preparado; el comprador debe pulsar Enviar.

## Configuración
### WhatsApp
En `script.js`, edita:
```js
const WHATSAPP_NUMBER = "573025519037";
```
Debe ser el indicativo de país más el número, solo dígitos. Para Colombia, `57` + el número.

### Productos y precios
Edita el arreglo `PRODUCTS` en `script.js`. Cada producto tiene:
- `id`: identificador único sin espacios.
- `name`: nombre.
- `category`: `Manillas` o `Sets` (u otra categoría; actualiza también los filtros de `index.html` si agregas categorías).
- `price`: precio entero en pesos colombianos.
- `description`: descripción corta.
- `tag`: etiqueta decorativa.
- `art`: `bracelet` o `set` para el dibujo ilustrativo.

Los 20 productos, precios y arte de producto incluidos son demostrativos. Confirma los precios, materiales y disponibilidad antes de vender.

### Fotos reales
La versión inicial dibuja ilustraciones estilizadas con CSS, no fotos reales de inventario. Para usar fotografías:
1. Crea una carpeta `images/`.
2. Añade `image: "images/tu-foto.jpg"` a cada objeto del catálogo.
3. Modifica `renderProducts()` en `script.js` para mostrar la foto en lugar de `artMarkup(product)`. El diseño de la tarjeta ya está preparado para una imagen; usa `object-fit: cover`.

## Publicar gratis
Puedes publicar los archivos estáticos en GitHub Pages, Netlify o Cloudflare Pages:
- Sube `index.html`, `styles.css`, `script.js` y cualquier carpeta de imágenes.
- Configura la carpeta raíz del proyecto como directorio de publicación.
- No requiere base de datos ni servidor para la versión actual.

## Límites y consideraciones
- El pedido se prepara mediante un enlace oficial `wa.me` con el texto codificado. El cliente debe confirmar el envío en WhatsApp.
- No hay pago en línea, control de inventario, panel administrativo ni almacenamiento de pedidos en servidor. El carrito se guarda localmente en el navegador del cliente cuando el almacenamiento está disponible.
- Los datos del formulario no se guardan en un servidor; se agregan al mensaje que el cliente elige enviar.
- El costo de envío queda por confirmar y no está incluido en el total mostrado.
- Reemplaza los productos ilustrativos, precios, textos y política de entrega/devolución por información real antes de publicar.
- El sitio usa Google Fonts; si no hay conexión, se usan tipografías de respaldo.


## Fotografías y organización del catálogo
Las 15 fotografías recibidas están guardadas en `images/` y conectadas a productos de la sección **Oro laminado → Manillas**. La tienda ya tiene filtros de dos niveles: material (Oro laminado / Oro) y tipo de pieza (Manillas / Anillos). Por ahora, las secciones **Oro** y **Anillos** aparecen como espacios preparados para completar cuando se definan las fotos correspondientes.
Los precios de las nuevas referencias quedaron en `0` como marcador para que se actualicen antes de publicar; confirma también qué fotos corresponden a oro laminado y cuáles a oro.


## Organización actualizada del catálogo
Las 15 fotografías están asignadas tanto a **Oro laminado** como a **Oro**, con las mismas imágenes en ambas secciones. En cada sección, las fotos 2, 3, 4, 5, 8, 10, 11, 12 y 14 están clasificadas como **Manillas**; las fotos 1, 6, 7, 9, 13 y 15 como **Anillos**. Los precios están en $0 como marcador pendiente de reemplazar antes de publicar.
