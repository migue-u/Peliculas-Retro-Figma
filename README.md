# Películas Retro — Removy

Interfaz web de una sola pantalla inspirada en los catálogos de vídeo de los años 80, recreada a partir del diseño de Figma. El título destacado es **Volver al futuro** (edición VHS, 1985), con sus secuelas y una sección de recomendaciones.

[Ver vista previa del diseño (PDF)](./Peliculas%20retro.pdf)

> El archivo editable de Figma también está disponible en la raíz del repositorio.

## Características

- **Pantalla única:** ocupa el viewport completo (`100vh` / `100dvh`) sin scroll; el contenido se adapta con `clamp()` y CSS Grid.
- **Estética VHS:** grano de película, líneas de escaneo y una línea de *tracking* animada.
- **Paleta retro:** papel envejecido, verde oliva, óxido y ámbar, con tipografía `Impact` para titulares y `Courier New` para el resto.
- **Interacciones en JavaScript vanilla:** navegación con elemento activo, selección de tarjetas recomendadas y botón **PLAY NOW** con respuesta temporal.
- **Accesibilidad básica:** etiquetas `aria-label`, `aria-hidden` para elementos decorativos y foco de teclado en las tarjetas.

## Estructura del repositorio

```text
.
├── index.html              # Estructura y contenido de la interfaz
├── styles.css              # Estilos, animaciones y efectos VHS
├── script.js               # Interacciones de la pantalla
├── assets/                 # Carteles de las películas (JPG)
│   ├── back-to-the-future.jpg
│   ├── casablanca.jpg
│   ├── et.jpg
│   └── mummy-returns.jpg
├── Peliculas_retro.fig     # Diseño editable de Figma
└── Peliculas retro.pdf     # Exportación del diseño en PDF
```

## Cómo ejecutarlo

No hay dependencias ni pasos de compilación. Puedes abrir `index.html` directamente en el navegador o levantar un servidor local:

```bash
python -m http.server 8000
```

Después visita <http://localhost:8000>.

## Diseño

Los archivos de diseño están en la raíz del repositorio:

- [Peliculas_retro.fig](./Peliculas_retro.fig) — fuente editable; descárgala y ábrela en Figma.
- [Peliculas retro.pdf](./Peliculas%20retro.pdf) — vista previa del mockup en PDF.

## Tecnologías

HTML5, CSS3 y JavaScript (vanilla). Sin frameworks ni gestores de paquetes.

## Autor

[@migue-u](https://github.com/migue-u)
