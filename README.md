# Portafolio web — Wael Jebari

Portafolio profesional y académico de **Wael Boutafah Jebari**, estudiante del CFGS de Desarrollo de Aplicaciones Web (DAW), con formación previa en Sistemas Microinformáticos y Redes (SMX).

El sitio reúne mi presentación, trayectoria, conocimientos, proyectos y currículum. Está desarrollado como una web multipágina estática con HTML5, CSS3 y JavaScript nativo.

## Vista previa

![Captura de la página principal del portafolio](https://image.thum.io/get/width/1200/crop/800/noanimate/https://waelbgg.github.io/)

<sub>Captura generada a partir de la versión pública de GitHub Pages mediante Thum.io.</sub>

## Sitio publicado

- **Web principal (Firebase Hosting):** https://portafolio-wael-jebari.web.app/
- **GitHub Pages:** https://waelbgg.github.io/
- **Repositorio:** https://github.com/Waelbgg/waelbgg.github.io

## Secciones

| Ruta | Contenido |
|---|---|
| / | Presentación, proyecto destacado y accesos principales. |
| /proyectos/ | Proyectos académicos y personales. |
| /daw-os/ | Caso de estudio de DAW OS, arquitectura, ficha técnica y demo. |
| /sobre-mi/ | Trayectoria formativa, tecnologías y forma de trabajar. |
| /contacto/ | Datos de contacto, perfil de GitHub y currículum descargable. |

## Características principales

- **Estructura multipágina:** inicio, proyectos, caso de estudio, trayectoria y contacto, cada uno con su propio archivo HTML.
- **Diseño adaptable:** cuadrículas CSS, Flexbox y puntos de ruptura para reorganizar el contenido en escritorio, tablet y móvil.
- **Navegación consistente:** cabecera compartida, enlaces internos y rutas relativas para poder publicar el mismo sitio en distintos alojamientos.
- **Componentes nativos:** detalles desplegables, enlaces de descarga del CV y navegación sin dependencias de frameworks.
- **Demo interactiva DAW OS:** filtros por estado, simulación de sincronización, contadores, registro de actividad y opción para reiniciar los datos de ejemplo.
- **Recursos locales:** estilos, scripts, imágenes y currículum incluidos en el repositorio.
- **Preferencias del navegador:** estilos de foco visibles y respeto por la preferencia de movimiento reducido.

## Proyectos destacados

### DAW OS — Classroom Sync

La integración conecta Classroom con Notion mediante Google Apps Script y centraliza las tareas en una vista accesible desde el móvil. Surgió cuando el calendario académico dejó de estar disponible y revisar curso por curso se volvió lento, desordenado y propenso a olvidos. El activador consulta los cambios cada 15 minutos.

Una ejecución real revisó **8 cursos y 80 tareas**: 80 ya estaban sincronizadas, sin omisiones ni errores. Ese ciclo verificó consulta, comparación y detección de registros existentes; no ejercitó creación ni actualización porque no encontró cambios. El código está en [Waelbgg/daw-os-classroom-sync](https://github.com/Waelbgg/daw-os-classroom-sync).

La demo web es independiente y usa datos ficticios; no realiza peticiones a las cuentas reales. La conexión activa es Classroom → Apps Script → Notion. La ampliación a otros servicios es una posibilidad futura.

Tecnologías contempladas:

- JavaScript y Google Apps Script.
- Google Classroom API.
- Notion API REST.
- `PropertiesService` para configuración sensible.
- `UrlFetchApp` para peticiones HTTP.

### CV Responsive — Maquetació

Proyecto académico de DAW1 (Bloc 1) para trasladar una maqueta de Figma a una página web adaptable. Trabaja la estructura semántica de HTML y la separación entre contenido y presentación mediante CSS.

Tecnologías: HTML5, CSS3, Flexbox, CSS Grid y diseño responsive.

## Tecnologías del sitio

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica y contenido de las páginas. |
| CSS3 | Diseño visual, componentes, distribución y adaptación responsive. |
| JavaScript nativo | Interacciones generales y lógica de la demo DAW OS. |
| Git y GitHub | Control de versiones y publicación del código. |
| Firebase Hosting / GitHub Pages | Alojamiento estático del sitio. |

El sitio no requiere frameworks, gestores de paquetes ni un proceso de compilación.

## Decisiones técnicas

1. **Sitio estático sin framework:** el contenido no necesita un backend propio ni un paso de compilación, lo que reduce la complejidad de desarrollo y publicación.
2. **Separación de responsabilidades:** HTML contiene la estructura, CSS define la presentación y los archivos JavaScript gestionan las interacciones.
3. **Estilos compartidos y específicos:** `style.css` concentra los estilos comunes y `portfolio-pages.css` ajusta la presentación de las páginas interiores.
4. **Rutas relativas:** las páginas interiores utilizan rutas relativas para cargar hojas de estilo, scripts e imágenes tanto en Firebase Hosting como en GitHub Pages.
5. **JavaScript nativo:** las interacciones se implementan sin dependencias externas, adecuado para el alcance actual del portfolio.
6. **Demo aislada de la integración:** el navegador utiliza datos ficticios; la sincronización real se ejecuta en Apps Script y no expone credenciales en el sitio público.
7. **Mejoras de accesibilidad incorporadas:** se utilizan HTML semántico, enlace para saltar al contenido, etiquetas de navegación, foco visible, encabezados de tabla y avisos de estado en la demo. No se ha realizado una auditoría formal WCAG, por lo que no se declara conformidad certificada.

## Estructura del repositorio

```text
waelbgg.github.io/
├── index.html                 # Página de inicio
├── style.css                  # Estilos compartidos
├── portfolio-pages.css        # Estilos de páginas interiores
├── portfolio.js               # Comportamiento y navegación general
├── enlaces-inicio.js          # Comportamiento auxiliar de inicio
├── daw-demo.js                # Simulación local de Classroom Sync
├── cv-wael-jebari.pdf         # Currículum en PDF
├── cv-wael-preview.png        # Vista previa del currículum
├── cv-responsive.jpg          # Imagen del proyecto CV Responsive
├── logo-chatgpt.png           # Recurso gráfico de ChatGPT
├── logo-claude.png            # Recurso gráfico de Claude
├── logo-copilot.png           # Recurso gráfico de GitHub Copilot
├── proyectos/
│   └── index.html             # Listado de proyectos
├── sobre-mi/
│   └── index.html             # Trayectoria y tecnologías
├── contacto/
│   └── index.html             # Contacto y CV
├── daw-os/
│   └── index.html             # Caso de estudio y demo DAW OS
└── .nojekyll                  # Evita el procesamiento de Jekyll
```

## Ejecución del sitio

El portfolio es una web estática sin dependencias ni proceso de compilación. Sus páginas se pueden abrir en un navegador y también admiten cualquier servidor HTTP estático, como Python o Live Server de Visual Studio Code.

## Publicaciones

El sitio está publicado en [GitHub Pages](https://waelbgg.github.io/) y en [Firebase Hosting](https://portafolio-wael-jebari.web.app/). Ambas publicaciones sirven el portfolio estático; su configuración es independiente y no se sincroniza automáticamente.

## Experiencia y compatibilidad

El diseño responsive contempla móviles, tablets y escritorio. La navegación utiliza rutas internas y recursos locales para las hojas de estilo, los scripts, las imágenes y el PDF del CV. El sitio incorpora foco visible y navegación por teclado. La demo de DAW OS incluye filtros, sincronización simulada, registro de actividad y datos ficticios.

## Privacidad y seguridad

La demo web de DAW OS utiliza datos ficticios y no se conecta a cuentas reales. La integración operativa se ejecuta desde Apps Script; sus credenciales no forman parte de este repositorio.

## Estado y evolución

El portfolio continúa creciendo junto con la formación en DAW. En DAW OS queda ampliar la validación de creación y actualización mediante ejecuciones controladas y seguir revisando permisos, errores y prevención de duplicados. También se prevén nuevas revisiones de accesibilidad, rendimiento y contenido.

## Contacto

- **GitHub:** https://github.com/Waelbgg
- **Correo:** [waelboutafah2007@gmail.com](mailto:waelboutafah2007@gmail.com)
- **Portafolio:** https://portafolio-wael-jebari.web.app/

---

_Portafolio personal y académico en evolución continua · 2026–2027._
