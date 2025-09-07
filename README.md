# 🚀 Portfolio Profesional - Helí Gonzales Pérez

Una landing page moderna y profesional que implementa el wireframe y storytelling especificado para mostrar experiencia en ML, LLMs, Agentes, MCP, RAG e Infraestructura.

## 📁 Estructura del Proyecto

```
portafolio/
├── 📄 index.html                 # Página principal
├── 📄 package.json              # Configuración del proyecto
├── 📄 .gitignore               # Archivos a ignorar en Git
├── 📁 .github/
│   └── 📁 workflows/
│       └── 📄 deploy.yml        # CI/CD para GitHub Pages
├── 📁 css/
│   ├── 📄 styles.css           # Estilos principales
│   └── 📄 forms.css            # Estilos para formularios
├── 📁 js/
│   ├── 📄 main.js              # JavaScript principal
│   ├── 📄 projects.js          # Gestión de proyectos
│   └── 📄 contact.js           # Funcionalidad de contacto
├── 📁 pages/
│   ├── 📄 about.html           # Página sobre mí
│   └── 📄 contact.html         # Página de contacto
├── 📁 assets/
│   ├── 📁 images/
│   │   ├── 📄 logo.svg         # Logo personalizado
│   │   ├── 📄 placeholder.svg  # Imagen placeholder
│   │   ├── 📁 projects/        # Thumbnails de proyectos
│   │   │   ├── 📄 cmab-thumbnail.jpg
│   │   │   ├── 📄 llm-assistant-thumbnail.jpg
│   │   │   ├── 📄 whatsapp-agent-thumbnail.jpg
│   │   │   ├── 📄 mcp-coordination-thumbnail.jpg
│   │   │   ├── 📄 rag-docs-thumbnail.jpg
│   │   │   └── 📄 mlops-pipeline-thumbnail.jpg
│   │   └── 📁 tech/            # Logos de tecnologías
│   │       ├── 📄 databricks.svg
│   │       ├── 📄 mlflow.svg
│   │       ├── 📄 azure.svg
│   │       ├── 📄 docker.svg
│   │       ├── 📄 kubernetes.svg
│   │       ├── 📄 langchain.svg
│   │       ├── 📄 vowpalwabbit.svg
│   │       └── 📄 huggingface.svg
│   └── 📁 docs/
│       └── 📄 cv.pdf           # CV en PDF
└── 📄 README.md                # Documentación
```

## 🚀 Características

### Diseño Visual
- **Grid**: 12 columnas, contenedor máximo 1200px, gutters 24px
- **Espaciado**: Secciones (mt-24 mb-24), bloques (mt-8 mb-8), elementos (mt-4 mb-4)
- **Colores**: Turquesa `#06B6D4`, Azul `#3B82F6`, Texto Navy `#0F172A`
- **Tipografía**: Inter con pesos 700 (headings), 500 (subheads), 400 (body)
- **Cards**: Radio 16-20px, sombra suave, hover-lift 4px
- **Botones**: Primario turquesa, secundario contorno azul

### Secciones Implementadas

1. **Hero**: Título principal + subtítulo + CTAs
2. **Sobre mí**: Avatar + badges + descripción profesional
3. **Proyectos**: Hub con filtros por categoría (ML, LLMs, Agentes, MCP, RAG, Infra/Stack)
4. **Timeline**: Camino de valor mostrando evolución ML → RAG → Agentes → MCP → Infra
5. **Spotlight**: Proyecto destacado con demo y métricas
6. **Tech Stack**: Logos de tecnologías
7. **CTA**: Llamada a la acción final
8. **Footer**: Enlaces sociales

### Funcionalidades

- **Filtros de proyectos**: JavaScript para filtrar por categoría
- **Navegación suave**: Scroll suave entre secciones
- **Responsive**: Diseño adaptativo para móviles y tablets
- **Animaciones**: Efectos hover y transiciones suaves
- **Accesibilidad**: Contraste AAA, alt text, navegación por teclado
- **Formulario de contacto**: Validación y envío por email
- **Páginas adicionales**: About y Contact con contenido específico

## 🎨 Storytelling Unificado

### Por Categoría de Proyecto

**ML (Predicción)**
- Headline: "Predicción accionable para impacto inmediato"
- Problema: Bajo hit-rate en campañas crediticias
- Solución: Modelos de propensión y uplift con validación estricta
- Impacto: +12% conversión; ahorro 18% costo por adquisición

**LLMs**
- Headline: "Comprensión semántica y generación controlada"
- Problema: Textos de clientes dispersos (emails, tickets, notas)
- Solución: LLM con prompts evaluables y guardrails
- Impacto: -35% Tiempos de respuesta; +NPS

**Agentes**
- Headline: "De insights a acciones automáticas"
- Problema: Respuesta lenta a leads multicanal
- Solución: Agentes orquestados con herramientas y políticas
- Impacto: 24/7; +x% conversión inbound

**MCP (Multi-Agent Coordination Protocol)**
- Headline: "Coordinación fiable entre agentes"
- Problema: Agentes aislados, resultados inconsistentes
- Solución: MCP para negociación, asignación de tareas y trazabilidad
- Impacto: Menos errores, más throughput

**RAG**
- Headline: "Conocimiento propio, respuestas precisas"
- Problema: Hallucinations y falta de contexto
- Solución: RAG con indexación de documentos (chunking, reranking)
- Impacto: +Exactitud; -Costos por token

**Infra/Stack**
- Headline: "Listo para producción y escala"
- Problema: Prototipos que no llegan a prod
- Solución: Contenerización, CI/CD, despliegue K8s
- Impacto: Releases confiables; costos controlados

## 🔧 Personalización

### Para actualizar proyectos:
1. Edita el archivo `js/projects.js` con los datos de tus proyectos
2. Agrega las imágenes en `assets/images/projects/`
3. Actualiza los enlaces de repositorios y demos

### Para cambiar colores:
1. Edita las variables CSS en `:root` en `css/styles.css`
2. Los colores principales son `--turquoise`, `--blue`, `--navy`

### Para agregar contenido:
1. Sigue la estructura de las cards existentes
2. Usa las clases CSS definidas para mantener consistencia
3. Actualiza los filtros JavaScript si agregas nuevas categorías

## 📱 Responsive Design

- **Desktop**: Layout completo con grid de 12 columnas
- **Tablet**: Adaptación de columnas y espaciado
- **Mobile**: Stack vertical, navegación simplificada

## 🚀 Despliegue

### GitHub Pages
1. Sube los archivos a un repositorio de GitHub
2. Habilita GitHub Pages en Settings > Pages
3. Selecciona la rama main como fuente
4. El workflow de GitHub Actions se ejecutará automáticamente

### Desarrollo Local
```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm start

# Construir para producción
npm run build
```

### Otros hosts
- Cualquier host estático (Netlify, Vercel, etc.)
- Solo necesitas los archivos HTML, CSS y JS

## 📊 Métricas y KPIs

La landing page está diseñada para mostrar:
- **Experiencia técnica**: Stack moderno y proyectos diversos
- **Impacto de negocio**: Métricas claras en cada proyecto
- **Evolución profesional**: Timeline que conecta ML → Agentes
- **Disponibilidad**: CTAs claros para contacto

## 🎯 Próximos Pasos

1. **Agregar proyectos reales**: Reemplazar placeholders con proyectos actuales
2. **Optimizar imágenes**: Agregar thumbnails y GIFs de demos reales
3. **SEO**: Meta tags adicionales y structured data
4. **Analytics**: Google Analytics o similar
5. **Formulario de contacto**: Implementar backend para formulario
6. **Blog**: Agregar sección de artículos técnicos

## 📞 Contacto

- **Email**: heligonzalespe@gmail.com
- **LinkedIn**: [linkedin.com/in/heligonzalespe](https://linkedin.com/in/heligonzalespe)
- **GitHub**: [github.com/heligonzalespe](https://github.com/heligonzalespe)

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.