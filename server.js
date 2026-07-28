const express = require('express');
const path = require('path');
const app = express();

// Sirve archivos estáticos desde el directorio actual
app.use(express.static(path.join(__dirname)));

// Para SPA - redirige todas las rutas a index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Bossfit Wellness Club running on port ${PORT}`);
});
