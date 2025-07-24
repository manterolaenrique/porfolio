# Portfolio Personal - Enrique Manterola

Un portfolio profesional moderno y atractivo construido con Next.js, React, TailwindCSS y Framer Motion.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **Totalmente Responsivo**: Optimizado para móviles, tablets y desktop
- **Animaciones**: Transiciones fluidas con Framer Motion
- **SEO Optimizado**: Meta tags, robots.txt y sitemap.xml incluidos
- **Modo Oscuro**: Soporte automático para preferencias del sistema
- **Accesible**: Estructura semántica y etiquetas alt apropiadas

## 🛠️ Tecnologías Utilizadas

- **Next.js 15** - Framework de React
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **TailwindCSS** - Framework de CSS
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **Vercel** - Deploy y hosting

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/enrique-manterola/portfolio.git
cd portfolio
```

2. Instala las dependencias:
```bash
npm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🚀 Deploy en Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. El deploy se realizará automáticamente en cada push

O usa el CLI de Vercel:
```bash
npm install -g vercel
vercel --prod
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx      # Layout principal con metadata SEO
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globales
└── components/
    ├── Hero.tsx        # Sección principal con foto y presentación
    ├── About.tsx       # Sección "Sobre mí"
    ├── Projects.tsx    # Proyectos destacados
    ├── Contact.tsx     # Enlaces de contacto
    └── Footer.tsx      # Pie de página
```

## 🎨 Personalización

### Información Personal
Edita los siguientes archivos para personalizar tu información:

- `src/app/layout.tsx` - Metadata SEO y título
- `src/components/Hero.tsx` - Nombre, cargo y descripción
- `src/components/About.tsx` - Biografía y estadísticas
- `src/components/Projects.tsx` - Proyectos y enlaces
- `src/components/Contact.tsx` - Enlaces sociales

### Foto de Perfil
Reemplaza el placeholder en `Hero.tsx` con tu foto real:
```tsx
<Image
  src="/tu-foto.jpg"
  alt="Enrique Manterola"
  width={400}
  height={400}
  className="rounded-full"
/>
```

### Colores y Estilos
Modifica las variables CSS en `src/app/globals.css` para cambiar la paleta de colores.

## 📱 Responsive Design

El portfolio está optimizado para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linting con ESLint

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request.

## 📞 Contacto

- **Email**: enrique.manterola@email.com
- **LinkedIn**: [linkedin.com/in/enrique-manterola](https://linkedin.com/in/enrique-manterola)
- **GitHub**: [github.com/enrique-manterola](https://github.com/enrique-manterola)

---

Hecho con ❤️ por Enrique Manterola
