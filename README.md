# AGANE — Asociación Galega de Neurorrehabilitación

Web oficial de AGANE, construída con [Astro](https://astro.build) e Tailwind CSS, lista para despregar en Netlify.

## Comandos

Todos os comandos execútanse desde a raíz do proxecto, nunha terminal:

| Comando           | Acción                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Instala as dependencias                       |
| `npm run dev`       | Arranca o servidor local en `localhost:4321`  |
| `npm run build`     | Xera a versión de produción en `./dist/`      |
| `npm run preview`   | Previsualiza a build en local antes de publicar |

## Desenvolvemento local

1. Clona este repositorio e executa `npm install` na raíz.
2. Arranca o servidor de desenvolvemento con `npm run dev`.

## Estrutura do contido

Todo o contido da páxina vive en [`src/pages/index.astro`](src/pages/index.astro) (misión, visión, valores, liñas de traballo, contacto...). Os compoñentes de cabeceira e rodapé están en `src/components/`.

## Despregue

O proxecto está configurado co adaptador de [Netlify](https://docs.netlify.com/frameworks/astro/) e despregable directamente conectando este repositorio en Netlify.
