'use server';

import weaviate, { WeaviateReturn } from 'weaviate-client';
import { ImageType } from '@/types.ts';

export async function searchImages(imageBase64: string): Promise<WeaviateReturn<ImageType>> {
  const client = await weaviate.connectToLocal();
  const collection = client.collections.get('Images');

  const imageBuffer = Buffer.from(imageBase64.split(',')[1], 'base64');

  const result = await collection.query.nearImage(imageBuffer, {
    returnProperties: ['name', 'image', 'media'],
    returnMetadata: ['distance'],
    limit: 20,
  });

  // @ts-ignore
  return result;
}
