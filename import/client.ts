import weaviate, { type WeaviateClient } from 'weaviate-client';

let client: WeaviateClient;

export const getWeaviateClient = async () => {
  if (!client) {
    client = await weaviate.connectToLocal();
  }

  return client;
};
