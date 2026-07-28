# 🏋️ Bossfit Wellness Club - Sitio Web

Sitio web moderno y responsivo para Bossfit Wellness Club, inspirado en SmartFit pero con mejoras significativas en diseño y funcionalidad.

## 📋 Características

### ✨ Secciones Principales
- **Hero Section**: Banner atractivo con call-to-action
- **Características**: 6 beneficios principales del gimnasio
- **Planes de Membresía**: 3 opciones (Starter, Premium, Elite)
- **Clases Disponibles**: 4 tipos de clases con horarios
- **Ubicaciones**: 3 sucursales (Barrio Landia, Plaza Pablo Mella, Parque Las Toronjas)
- **Testimonios**: Opiniones de miembros satisfechos
- **Contacto**: Formulario de contacto + información de todas las sucursales
- **Promoción**: Oferta especial para nuevos miembros

### 🎨 Diseño
- **Responsivo**: Funciona perfectamente en desktop, tablet y móvil
- **Moderno**: Gradientes, animaciones y efectos visuales
- **Accesible**: Colores contrastantes y navegación clara
- **Rápido**: Optimizado para carga rápida

### 🔧 Funcionalidades
- Menú móvil colapsable
- Formulario de contacto con validación
- Desplazamiento suave entre secciones
- Animaciones al hacer scroll
- Efectos hover en botones y tarjetas

## 📁 Estructura del Proyecto

```
bossfit/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos CSS
├── js/
│   └── main.js            # JavaScript
├── assets/
│   ├── images/            # Imágenes del sitio
│   └── icons/             # Iconos y favicon
├── README.md              # Este archivo
└── .github/
    └── copilot-instructions.md
```

## 🎨 Paleta de Colores

- **Primario**: #FF6B35 (Naranja vibrante)
- **Secundario**: #004E89 (Azul oscuro)
- **Acento**: #F77F00 (Dorado)
- **Éxito**: #06D6A0 (Verde)
- **Fondo Claro**: #F8F9FA
- **Texto Oscuro**: #1A1A1A

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px
- **Pequeños**: < 480px

## � Sucursales de Bossfit

### 1. **Barrio Landia**
- Ubicación: Avenida Principal, Barrio Landia
- Teléfono: +1 (809) 555-0100
- WhatsApp: +1 (809) 555-0100
- Horario: Lun-Vie 5:00 A.M. - 11:00 P.M. | Sáb 7:00 A.M. - 8:00 P.M. | Dom Cerrado

### 2. **Plaza Pablo Mella**
- Ubicación: Plaza Pablo Mella, Santo Domingo
- Teléfono: +1 (809) 555-0101
- WhatsApp: +1 (809) 555-0101
- Horario: Lun-Vie 5:00 A.M. - 11:00 P.M. | Sáb 7:00 A.M. - 8:00 P.M. | Dom Cerrado

### 3. **Parque Las Toronjas**
- Ubicación: Parque Las Toronjas, Santo Domingo
- Teléfono: +1 (809) 555-0102
- WhatsApp: +1 (809) 555-0102
- Horario: Lun-Vie 5:00 A.M. - 11:00 P.M. | Sáb 7:00 A.M. - 8:00 P.M. | Dom Cerrado

**Email Central**: info@bossfit.com

---

### 1. Agregar Logo
- Coloca tu logo en: `assets/images/logo.png`
- El tamaño recomendado es 200x200px
- Formato: PNG con fondo transparente

### 2. Agregar Imágenes
- **Hero Image**: `assets/images/hero-image.jpg` (1200x600px)
- **Clases**: 
  - `assets/images/zumba.jpg`
  - `assets/images/yoga.jpg`
  - `assets/images/spinning.jpg`
  - `assets/images/pilates.jpg`
  - `assets/images/crossfit.jpg`
  - `assets/images/boxing.jpg`
- Tamaño recomendado: 400x300px

### 3. Personalizar Información
Edita en `index.html`:
- Ubicación (sección Contacto)
- Teléfono y WhatsApp
- Horarios de atención
- Email de contacto
- Información de planes

### 4. Redes Sociales
Actualiza los enlaces en el footer:
```html
<a href="tu-facebook-url">Facebook</a>
<a href="tu-instagram-url">Instagram</a>
<a href="tu-tiktok-url">TikTok</a>
```

## 💻 Abrir en Navegador

1. Abre `index.html` en tu navegador web
2. O usa un servidor local:
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # O con Node.js (Live Server)
   npx live-server
   ```
3. Accede a: `http://localhost:8000`

## 📝 Modificaciones Comunes

### Cambiar Colores
En `css/styles.css`, modifica las variables CSS:
```css
:root {
    --primary-color: #FF6B35;     /* Cambiar color primario */
    --secondary-color: #004E89;   /* Cambiar color secundario */
    /* ... más variables ... */
}
```

### Agregar Nueva Clase
En `index.html`, copia una tarjeta de clase:
```html
<div class="class-card">
    <div class="class-image">
        <img src="assets/images/nueva-clase.jpg" alt="Nueva Clase">
        <span class="class-label">Nombre</span>
    </div>
    <h3>Nombre de la Clase</h3>
    <p>Descripción</p>
    <p class="class-schedule">Horario</p>
</div>
```

### Agregar Nueva Sección
Copia la estructura de cualquier sección y personaliza el contenido.

## 🔐 Seguridad y Validación

- El formulario de contacto valida:
  - Nombre requerido
  - Email válido
  - Teléfono requerido
  - Mensaje requerido

## 📊 SEO
- Meta description optimizado
- Titles descriptivos
- Estructura HTML5 semántica
- Links internos con anclas

## 🌍 Multi-idioma (Futuro)

Para agregar más idiomas, crea archivos adicionales:
- `index-en.html`
- `index-pt.html`

## 📞 Soporte

Para ayuda con el sitio web, contacta al equipo de desarrollo.

## 📄 Licencia

© 2024 Bossfit Wellness Club. Todos los derechos reservados.

---

**Última actualización**: 2024
**Versión**: 1.0
