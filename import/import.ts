import { WeaviateClient, type Collection } from 'weaviate-client';

import { ImageType } from '@/types.ts';
import { getWeaviateClient } from './client.ts';
import { getBase64, listFiles } from './util.ts';

const sourceBase = 'public';
const sourceImages = sourceBase + '/image/';

// @ts-ignore
const client: WeaviateClient = await getWeaviateClient();

export const importMediaFiles = async (collectionName: string) => {
  const vertexCollection = client.collections.get(collectionName);
  await insertImages(vertexCollection);
};

const insertImages = async (collection: Collection) => {
  const batchSize = 10;
  let dataObject: ImageType[] = [];

  const files = listFiles(sourceImages);
  console.log(`Importing ${files.length} images.`);

  let counter = 0;

  for (let file of files) {
    console.log(`Adding ${file.name}`);

    const item: ImageType = {
      name: file.name,
      extension: file.name.split('.')[1],
      image: getBase64(file.path),
      media: 'image',
    };

    dataObject.push(item);
    counter++;

    if (counter % batchSize == 0) {
      await collection.data.insertMany(dataObject);
      dataObject = [];
    }
  }

  if (counter % batchSize !== 0) {
    await collection.data.insertMany(dataObject);
  }
};
