'use client';

import React, { useState } from 'react';
import { WeaviateGenericObject } from 'weaviate-client';

import { ImageType } from '@/types.ts';
import UploadImage from '@/components/UploadImage.tsx';
import ImageList from '@/components/ImageList.tsx';

export default function ImageSearch() {
  const [searchResults, setSearchResults] = useState<WeaviateGenericObject<ImageType>[]>([]);

  const handleSearchResults = (results: WeaviateGenericObject<ImageType>[]) => {
    setSearchResults(results);
  };

  return (
    <div className="container mx-auto px-4">
      <UploadImage onSearchResults={handleSearchResults} />
      <ImageList searchResults={searchResults} />
    </div>
  );
}
