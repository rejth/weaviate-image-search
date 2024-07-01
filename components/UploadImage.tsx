'use client';

import React, { useState } from 'react';
import { FileInput, Label } from 'flowbite-react';
import { WeaviateGenericObject } from 'weaviate-client';

import { ImageType } from '@/types.ts';
import { searchImages } from '@/utils/actions.ts';

interface UploadImageProps {
  onSearchResults: (results: WeaviateGenericObject<ImageType>[]) => void;
}

const UploadImage = ({ onSearchResults }: UploadImageProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!file) return;

    const fileContent = await readFileAsBase64(file);

    try {
      const result = await searchImages(fileContent);
      onSearchResults(result.objects);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
    });
  };

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload file" />
      </div>
      <FileInput
        id="large-file-upload"
        sizing="lg"
        accept="image/*"
        helperText="PNG, JPG, JPEG"
        onChange={handleFileChange}
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={handleFileUpload}>
        Search images
      </button>
    </div>
  );
};

export default UploadImage;
