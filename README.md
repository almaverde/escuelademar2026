# Escuela de Mar Monte Hermoso — sitio web 2026

Versión estática final preparada para publicación.

## Requisitos

No requiere Node, PHP, base de datos ni proceso de compilación. Solo necesita un hosting que sirva archivos HTML/CSS/JS por HTTPS.

## Estructura

- `index.html` — Inicio
- `nosotros.html` — Nosotros
- `escuela-de-mar.html` — Escuela de Mar
- `educacion-prevencion.html` — Educación + Prevención
- `salvamento-deportivo.html` — Salvamento Deportivo
- `asociacion.html` — Asociación Civil y Programa de Becas
- `temporada.html` — información práctica de temporada
- `sumate.html` — formas de participar/colaborar
- `contacto.html` — contacto
- `assets/css/styles.css` — estilos
- `assets/js/script.js` — navegación móvil
- `assets/images/` — fotografías y logo
- `assets/icons/` — favicon e iconos
- `favicon.ico` — favicon de compatibilidad
- `site.webmanifest` — metadatos para dispositivos
- `robots.txt` — directivas para buscadores
- `sitemap.xml` — mapa del sitio para buscadores

## Instalación / publicación

1. Descomprimir el ZIP.
2. Subir **el contenido de la carpeta raíz** al directorio público del hosting (`public_html`, `www`, `htdocs` o equivalente). `index.html` debe quedar directamente en ese directorio.
3. Verificar que el dominio `https://www.escuelademar.com.ar/` apunte al hosting y tenga certificado SSL/HTTPS activo.
4. Abrir la Home y recorrer menú, botones, imágenes y páginas tanto en escritorio como en celular.
5. Confirmar que `robots.txt` y `sitemap.xml` sean accesibles desde la raíz del dominio.

## SEO incluido

Cada página incluye `title`, meta description, robots, canonical, Open Graph, Twitter Card, idioma `es`, favicon y metadatos responsive. También se incluyen `robots.txt` y `sitemap.xml` para `https://www.escuelademar.com.ar`.

Si el sitio se publica en otro dominio o subcarpeta, hay que reemplazar ese dominio en los `canonical`, etiquetas Open Graph, `robots.txt` y `sitemap.xml`.

## Antes de publicar

Revisar los datos variables de la temporada (fechas, horarios, grupos, cupos, valores y lugar) y cualquier dato institucional/legal que pueda cambiar. Los enlaces externos configurados actualmente incluyen Instagram y WhatsApp.

## Formulario de contacto

El sitio es estático. Si `contacto.html` contiene un formulario visual, para recibir envíos reales debe conectarse a un servicio de formularios o backend del hosting. No incluir claves privadas ni credenciales dentro del HTML o JavaScript público.

## Actualizaciones

Para modificar textos, editar el HTML correspondiente. Para reemplazar fotografías, conservar las rutas/nombres actuales o actualizar la referencia en el HTML/CSS. Mantener copias de seguridad antes de reemplazar la versión publicada.

## Sistema visual incluido

Esta entrega incluye el diseño completo y no solo la estructura HTML. `assets/css/styles.css` contiene el sistema visual responsive: paleta institucional, tipografía, navegación sticky y menú móvil, heroes fotográficos, tarjetas, grillas, etiquetas, timeline, llamados a la acción, formularios, FAQ, galerías, footer, estados hover/focus y adaptación para tablet/celular. `assets/js/script.js` controla la navegación móvil y el desplegable. No depende de frameworks ni de CSS/JS externos.

Para conservar la estética, subir siempre las carpetas `assets/css`, `assets/js`, `assets/images` y `assets/icons` respetando exactamente su ubicación relativa.

## Verificación técnica final — 21/09/2026

Se auditó esta versión después de las últimas modificaciones de contenido.

- Se conserva íntegro el sistema visual de la versión V2 completa.
- Hoja de estilos principal: `assets/css/styles.css` (paleta, tipografía, navegación, héroes, secciones, botones, tarjetas, galerías, formularios, footer y responsive).
- JavaScript principal: `assets/js/script.js` (menú móvil y navegación desplegable).
- Las 9 páginas HTML cargan correctamente el CSS y el JavaScript mediante rutas relativas.
- No se detectaron referencias locales rotas a CSS, JS, imágenes, iconos ni páginas HTML.
- Se conservan favicon, Apple Touch Icon, iconos PWA, `site.webmanifest`, `robots.txt` y `sitemap.xml`.
- Se conservan las fotografías del proyecto y se agregó la fotografía del equipo 2019 utilizada en `nosotros.html`.
- Se verificó que las únicas diferencias de contenido respecto de la V2 completa son las modificaciones solicitadas en `escuela-de-mar.html` y `nosotros.html`, más la nueva fotografía del equipo.

Esta carpeta puede subirse directamente a la raíz pública del hosting conservando exactamente la estructura de directorios incluida en el ZIP.

## Ajustes responsive finales
- Galerías fotográficas: 2 columnas en móviles de 380–560 px y 1 columna por debajo de 380 px.
- Header protegido para pantallas de hasta 350 px: logo y tipografía reducidos, espaciado compacto y botón de menú preservado.
- Se mantienen los breakpoints generales de tablet y escritorio sin cambios.
