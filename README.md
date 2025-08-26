# README.md

This file provides guidance to working this repository.

## Current Project Status
✅ **COMPLETED**: Full website implementation with all 8 pages built and functional
- All HTML pages created with responsive design
- Tailwind CSS styling with ULSA brand colors implemented
- Vanilla JavaScript functionality added for interactivity
- ULSA logo integrated throughout the site
- Mobile-responsive navigation implemented

## Technical Architecture
- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Styling**: External CSS file with custom Tailwind config and ULSA colors (#238935 green, #333333 gray)
- **JavaScript**: Centralized in external file with all interactive functionality
- **Assets**: All images organized in `/img/` folder
- **Structure**: Clean separation of concerns with external CSS/JS files

## File Structure
```
/
├── index.html              # Homepage
├── fast-fashion.html       # Fast Fashion education page
├── proyecto.html          # Project information
├── mapa.html              # Interactive map page
├── consejos.html          # Sustainable fashion tips
├── historias.html         # Community stories
├── participa.html         # Participation forms
├── impacto.html           # Impact metrics
├── css/
│   └── styles.css         # Main stylesheet with ULSA branding and custom styles
├── js/
│   └── main.js            # Main JavaScript file with all interactive functions
├── img/
│   └── Logo_ULSA_Nueva_Identidad(3).png  # ULSA logo and other images
├── texts/                 # Text content (ready for use)
├── forms/                 # Forms directory
├── responses/             # Responses directory
└── map/                   # Map data directory
```

## Next Steps & Integration Points

### Ready for Integration:
1. **Google Maps** - Replace placeholder in `mapa.html` with Google My Maps embed
2. **Google Forms** - Connect participation forms in `participa.html` to Google Forms
3. **Google Analytics** - Add tracking code to `js/main.js` (placeholder functions ready)
4. **Padlet Integration** - Add collaborative wall to `historias.html`
5. **PDF Download** - Add actual sustainability guide PDF to `consejos.html`

### Development Commands
- **Local Server**: Use any static file server (VS Code Live Server, Python `http.server`, etc.)
- **File Organization**: All inline CSS/JS has been moved to external files in `css/` and `js/` folders
- **Testing**: Test responsiveness and functionality across devices
- **Validation**: Validate HTML5 markup and accessibility

## General Planning for "Mapa Verde de la Moda"

## Site Objective:
To disseminate the "Vístete con Conciencia" project and provide a digital space where the
university community and the general population can access resources, tips and a map of
local sustainable fashion alternatives.
### Target audience:
● ULSA community (students, faculty, alumni).
● General population interested in sustainable fashion in León and Nicaragua.
### Initial scope:
● Informative (explain fast fashion and alternatives).
● Interactive (map of locations+ participation forms).
● Expandable (possibility of adding more sections over time)

### Roles and work plan (quick)
   ● Site manager (this manual): assembles, designs and publishes the Google Site.
   ● 2 student data scouts (map): collect sites (donation, barter, second hand) and
   complete template in Google Sheets.
   ● Mentor (you): review key texts, institutional tone and ULSA identity.
   Suggested milestones (14-16 days):
   ● Day 1-2: site structure+ identity+ base pages.
   ● Day 3-5: Forms+ Sheets+ My Maps (empty with categories)+ first contents.
   ● Day 6-9: upload initial locations (scouting)+ embedded map tests.
   ● Day 10-12: "Impact" section, review accessibility, mobile and Analytics.
   ● Day 13-14: visual polishing, final copy, publish and test navigation.
   

### Site Structure (Navigation Map
Homepage / Inicio
├── ¿Qué es Fast Fashion?
├── Vístete con Conciencia
├── Mapa Verde de la Moda
├── Consejos sostenibles
├── Historias y testimonios
├── Participa
└── Impacto

Navigation: top (horizontal), order as above. Footer with: contact, responsible use notice,
ULSA logo and project credits.
#### Homepage / Inicio
- Logo ULSA + nombre del proyecto.
- Mensaje de bienvenida breve (“Explora cómo vestir con conciencia y apoyar la moda
sostenible en Nicaragua”).
- Botones destacados: Mapa Verde, Consejos prácticos, Participa.
#### ¿Qué es Fast Fashion?
- Infografía o texto breve con estadísticas.
- Video corto (se puede insertar desde YouTube o Google Drive).
- Frase inspiradora al final.
#### Dress with Conscience (The Project)
● Brief explanation of the ULSA initiative.
● Objectives in visual format (icons).
● Expected impact.
#### Vístete con Conciencia (El Proyecto)
- Explicación breve de la iniciativa ULSA.
- Objetivos en formato visual (íconos).
- Impacto esperado.
#### Mapa Verde de la Moda
- Google Maps insertado con marcadores (tiendas de segunda mano, lugares de
  donación, talleres).- Botón: “Sugiere un lugar” (Google Forms).
#### Consejos para vestir sosteniblemente
- “Top 10 prácticas”: Comprar menos, elegir calidad, donar, reparar, etc.
- Mini e-book descargable en PDF.
#### Historias y testimonios (opcional, puede crecer en el futuro)
- Espacio con testimonios de estudiantes o usuarios.
- Inserción de comentarios / mural colaborativo con Padlet o Muro interactivo de
  Google Sites.
#### Participa
- Formulario de Google Forms: sugerencias, experiencias, lugares.
- Contacto del equipo ULSA.
#### Impacto
- Contador de visitas (Google Analytics o gadgets de Sites).
- Estadísticas básicas de participación (número de lugares mapeados, descargas del
  e-book, etc.).
#### Graphic Design Requirements

- ULSA institutional colors (according to Brand Manual):
- ULSA Green: Pantone 355 U| RGB 35,137,53| HEX #238935
- Institutional Gray: RGB 51,51,51| HEX #333333 (can be used in variants up to
  80% - 5%)
- White: RGB 255,255,255| HEX #FFFFFFFF

Institutional typeface:
- Primary: Indivisa Display Sans, Indivisa Display Serif, Indivisa Text Sans/Serif
- Secondary: Hurme Geometric Sans 2 (for digital emphasis).
  Institutional slogan: "¡Aprendemos para Servir!" (may appear on the site footer or home
  page).
  Iconography: keep the official ULSA logo and, if necessary, support icons (e.g. leaf,
  planet, t-shirt) always respecting the secondary colors.
  Communication tone: clear, youthful and proactive. Avoid alarmism; use data +
  practical actions.

### Preparation of resources (before building)
1. Folder structure:
- /img (ULSA logos in official versions, icons and images optimized in
  .png/.webp).
- /texts (approved copies).
- /forms (forms) and /responses (Sheets).
- /map (My Maps+ CSV of places).

2. Technical Resources and Extras
- Google Maps: Create a collaborative map in Google My Maps and insert it in the
  page.

- Padlet / Collaborative wall (optional): For testimonials and photos.
