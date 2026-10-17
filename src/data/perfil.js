// Contenido del perfil. Edita aquí los textos; los componentes solo los pintan.

export const headline =
  "Construyo la infraestructura que convierte visitas en leads: del módulo de HubSpot al clúster en GKE.";

export const bio =
  "Soy desarrollador web y trabajo donde el marketing se cruza con la infraestructura. En Aliat construyo y mantengo las landing pages, módulos y formularios de HubSpot de varios campus y marcas, y las integraciones que llevan cada lead hasta Zoho CRM. Despliego servicios en Google Cloud y, cuando algo falla en producción, lo arreglo en vivo. Pruebo rápido, descarto lo que no funciona y solo publico lo que ya validé.";

export const stack = [
  {
    title: "Frontend y CMS",
    items: ["HubSpot CMS", "HubL", "HubDB", "Módulos personalizados", "Formularios", "JavaScript", "Web components", "HTML/CSS", "Astro"],
  },
  {
    title: "Backend",
    items: ["PHP", "Node.js", "Python", "PyQt5", "Google Apps Script"],
  },
  {
    title: "Cloud e infraestructura",
    items: ["Cloud Build", "GKE + Ingress", "Cloud Run", "Cloud Functions", "Secret Manager", "Cloud Armor", "Kubernetes", "nginx", "Ubuntu"],
  },
  {
    title: "Datos",
    items: ["MongoDB", "Firestore", "HubDB"],
  },
  {
    title: "Marketing e integraciones",
    items: ["HubSpot", "Zoho CRM", "Google Tag Manager", "Microsoft Clarity", "WhatsApp", "OpenAI API", "SerpAPI"],
  },
];

export const herramientas = "Git con commits convencionales, Claude y MCP, Kali Linux.";

export const proyectos = [
  {
    title: "Pipeline de leads HubSpot → Zoho",
    problem: "Los leads de los formularios de varios campus tenían que llegar al CRM completos y a tiempo.",
    solution: "Una API en PHP que recibe los envíos de HubSpot, normaliza campus y programa y crea el lead en Zoho CRM.",
    stack: ["PHP", "HubSpot", "Zoho CRM"],
  },
  {
    title: "HubSpot CMS multi-campus",
    problem: "Muchas marcas y campus, una sola base de código que mantener.",
    solution: "Módulos personalizados en HubL, datos en HubDB, formularios y web components reutilizables entre marcas.",
    stack: ["HubL", "HubDB", "JavaScript", "Web components"],
  },
  {
    title: "Infraestructura en Google Cloud",
    problem: "Desplegar servicios sin tocar servidores a mano ni exponer secretos.",
    solution: "Cloud Build hacia GKE con Ingress, Cloud Run y Cloud Functions para lo pequeño, Secret Manager para credenciales y Cloud Armor al frente.",
    stack: ["Cloud Build", "GKE", "Cloud Run", "Secret Manager", "Cloud Armor", "nginx"],
  },
  {
    title: "Generador de contenido SEO",
    problem: "Escribir borradores SEO a partir de lo que ya posiciona.",
    solution: "Una herramienta que consulta resultados con SerpAPI y genera borradores con la API de OpenAI.",
    stack: ["Python", "OpenAI API", "SerpAPI"],
  },
];

export const principios = [
  {
    title: "Iterar y validar",
    text: "Pruebo rápido, descarto lo que no funciona y solo llevo a producción lo que ya validé.",
  },
  {
    title: "Contexto completo",
    text: "Comparto archivos, errores de consola y capturas en lugar de descripciones vagas; así los ciclos se acortan.",
  },
  {
    title: "Feedback directo",
    text: "En la primera línea digo qué está roto y por qué.",
  },
  {
    title: "Criterio técnico",
    text: "Detecto los cambios innecesarios (clases renombradas, macros de más, layouts rotos) antes de que lleguen al repo.",
  },
];

export const pasatiempos = [
  "Lectura",
  "Deportes de contacto y calistenia",
  "Ajedrez",
  "Ciberseguridad, redes y domótica",
  "Linux, Kali y hardware",
];

// Deja vacío lo que no quieras mostrar: los enlaces vacíos no se pintan.
export const contacto = {
  email: "",
  linkedin: "",
  github: "https://github.com/BugInTheShell",
};
