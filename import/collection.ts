import weaviate, { type WeaviateClient } from 'weaviate-client';
import { getWeaviateClient } from './client.ts';

// @ts-ignore
const client: WeaviateClient = await getWeaviateClient();

const collectionExists = async (name: string) => {
  return client.collections.exists(name);
};

export const createCollection = async (name: string) => {
  if (await collectionExists(name)) {
    console.log(`The collection [${name}] already exists. No need to create it.`);
    return;
  }

  console.log(`Creating collection [${name}]...`);

  const newCollection = await client.collections.createFromSchema({
    class: 'Images',
    vectorizer: 'img2vec-neural',
    moduleConfig: {
      'img2vec-neural': {
        imageFields: ['image'],
      },
    },
    properties: [
      {
        dataType: ['text'],
        name: 'name',
      },
      {
        dataType: ['text'],
        name: 'extension',
      },
      {
        dataType: ['text'],
        name: 'media',
      },
      {
        dataType: ['blob'],
        name: 'image',
      },
    ],
  });

  console.log(`Collection ${newCollection.name} created!`);
  console.log(JSON.stringify(newCollection, null, 2));
};

export const deleteCollection = async (name: string) => {
  console.log(`Deleting collection ${name}...`);
  await client.collections.delete(name);
  console.log(`Deleted collection ${name}.`);
};
