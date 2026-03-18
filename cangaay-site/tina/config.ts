import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: ".",
  },

  media: {
    tina: {
      mediaRoot: "images/uploads",
      publicFolder: ".",
    },
  },

  schema: {
    collections: [
      {
        name: "articles",
        label: "Articles",
        path: "_articles",
        format: "md",
        ui: {
          filename: {
            slugify: (values) => {
              return values?.title
                ?.toLowerCase()
                .replace(/ /g, "-")
                .replace(/[^\w-]+/g, "") ?? "";
            },
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "tag",
            label: "Catégorie",
            options: [
              "Dossier Principal",
              "Rappel",
              "Témoignage",
              "Communauté",
            ],
          },
          {
            type: "string",
            name: "icon",
            label: "Icône",
            options: [
              { label: "📖  Livre — guide, dossier de référence", value: "📖" },
              { label: "🌙  Lune — rappel spirituel, réflexion", value: "🌙" },
              { label: "🌿  Feuille — témoignage, récit personnel", value: "🌿" },
              { label: "🤲  Mains — formation, transmission", value: "🤲" },
              { label: "☽   Croissant — rite islamique, sunna", value: "☽" },
              { label: "🕊️  Colombe — paix, deuil, accompagnement", value: "🕊️" },
              { label: "💌  Lettre — annonce, nouvelle, communauté", value: "💌" },
              { label: "🌸  Fleur — douceur, bienveillance", value: "🌸" },
              { label: "✨  Étoiles — article spécial", value: "✨" },
              { label: "🪷  Lotus — pureté, rituel, lavage", value: "🪷" },
              { label: "📜  Parchemin — texte coranique, hadith", value: "📜" },
              { label: "🌺  Hibiscus — femmes, communauté, Sénégal", value: "🌺" },
            ],
          },
          {
            type: "string",
            name: "excerpt",
            label: "Résumé",
            ui: { component: "textarea" },
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
          },
          {
            type: "string",
            name: "readTime",
            label: "Temps de lecture",
          },
          {
            type: "boolean",
            name: "published",
            label: "Publié",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true,
          },
        ],
      },
    ],
  },
});
