# Desplegar Bossfit en Render

## Opción 1: Sitio Estático (Más Simple)

1. Ve a [render.com](https://render.com)
2. Haz login con GitHub
3. Crea un nuevo "Static Site"
4. Conecta tu repositorio `GenesisProject-labs/BossFit`
5. Configuración:
   - Name: `bossfit-website`
   - Build Command: (dejar vacío)
   - Publish directory: `./`
6. Click en "Create Static Site"

## Opción 2: Node.js (Recomendado para mejor control)

1. Ve a [render.com](https://render.com)
2. Haz login con GitHub
3. Crea un nuevo "Web Service"
4. Conecta tu repositorio `GenesisProject-labs/BossFit`
5. Configuración:
   - Name: `bossfit-wellness-club`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Plans: Free (o el que prefieras)
6. Click en "Create Web Service"

Render automáticamente:
- Instalará las dependencias (Express)
- Ejecutará el servidor en `server.js`
- Tu sitio estará disponible en: `https://bossfit-wellness-club.onrender.com`

## Después del Deploy

### Variables de Entorno (Opcional)
Si necesitas agregar variables de entorno:
1. Ve al dashboard de Render
2. Selecciona tu servicio
3. Environment → Add Environment Variable
4. Agrega las variables que necesites

### Dominio Personalizado (Opcional)
1. Ve a Settings del servicio
2. Custom Domain
3. Agrega tu dominio (ej: bossfit.com)
4. Sigue las instrucciones de DNS

## GitHub Auto-Deploy

Cada vez que hagas push a la rama `main`:
- Render detectará los cambios
- Automáticamente hará deploy de la nueva versión
- No necesitas hacer nada más

## Monitoreo

En el dashboard de Render puedes ver:
- Logs de despliegue
- Logs de ejecución
- Estadísticas de uso
- Estado del servicio

---

**Nota**: El archivo `render.yaml` contiene la configuración para desplegar automáticamente.
