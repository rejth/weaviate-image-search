import React from 'react';
import { WeaviateGenericObject } from 'weaviate-client';
// @ts-ignore
import Image from 'next/image';
import { ImageType } from '@/types.ts';

interface ImageListProps {
  searchResults: WeaviateGenericObject<ImageType>[];
}

const ImageList = ({ searchResults }: ImageListProps) => {
  if (searchResults.length === 0) {
    return <p className="text-center mt-10 text-gray-600">No similar images found</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {searchResults.map((result, index) => (
        <div key={result.properties.name}>
          <>
            <div className="flex justify-between">
              <p className="w-16 h-6 mt-2 ml-2 block text-center whitespace-nowrap items-center justify-center rounded-lg translate-y-8 transform  bg-white px-2.5 py-0.5 text-sm text-black">
                {result.properties.media}
              </p>
              <p className="w-24 h-6 mt-2 mr-2 block text-center whitespace-nowrap items-center justify-end rounded-lg translate-y-8 transform  bg-white px-2.5 py-0.5 text-sm text-black">
                dist: {result.metadata?.distance?.toString().slice(0, 6)}
              </p>
            </div>
            <div
              key={result.properties.name}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
              <Image
                src={'/' + result.properties.media + '/' + result.properties.name}
                alt={`Similar Image ${index}`}
                className="w-full h-48 object-cover"
                width={300}
                height={300}
              />
              <div className="p-4">
                <p className="text-gray-800 text-sm font-semibold">{result.properties.name}</p>
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
