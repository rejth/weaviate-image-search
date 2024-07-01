# Image Similarity Search

## This is an Image Search demo built with [Weaviate](https://weaviate.io), [Next.js](https://nextjs.org/) and [OpenAI](https://openai.com/)

## Getting Started

### Create a Weaviate database

Create a Weaviate cloud sandbox instance as described in [this guide](https://weaviate.io/developers/wcs/quickstart).
Collect the `API key` and `URL` from the `Details` tab in Weaviate Cloud (WCD).

### Create a `.env` file and add the following API keys

- your OpenAI API key as `OPENAI_APIKEY` (you can get this in your [OpenAI platform settings](https://platform.openai.com/api-keys))
- your Weaviate API key as `WCD_API_KEY` (you can get this in your [Weaviate dashboard](https://console.weaviate.cloud/dashboard) under sandbox details)
- your Weaviate host URL as `WCD_URL` (you can get this in your [Weaviate dashboard](https://console.weaviate.cloud/dashboard) under sandbox details)

### Running Weaviate

To start the Weaviate instance, run the following command, which will use the `docker-compose.yml` file.

```bash
docker compose up -d
```

### Importing Data

> Before you can import data, add any images in the `public/images` folder.

To install all project dependencies, run:

```bash
npm i
```

To import your data into Weaviate and initialize a collection, run:

```bash
npm run import
```

### Running your web app

> Make sure you have your Weaviate instance running with data imported before starting your web app.

To run the web app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
