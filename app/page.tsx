import ImageSearch from '@/components/ImageSearch.tsx';

export default async function Home() {
  return (
    <div className="absolute inset-0 flex flex-col items-center overflow-x-hidden text-indigo-950">
      <div className="flex flex-col px-5">
        <div className="py-8">
          <div className="text-5xl font-extrabold">
            <a className="font-serif" href="/">
              ImageSimilarity<span className="opacity-25">Search</span>
            </a>
          </div>
        </div>
      </div>
      <ImageSearch />
    </div>
  );
}
