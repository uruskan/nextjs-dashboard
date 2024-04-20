'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';


export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams(); //Get the search parameters from the URL 
  const pathname = usePathname(); 
  const  { replace } = useRouter();
  function handleSearch(term: string){
    const params = new URLSearchParams(searchParams); //Using URLSearchParams API
    if (term){
      params.set('query',term); //
    }else{
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
    console.log("Searching for " + term + "...");
  }
  
  
  
  
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input onChange={(e) => {handleSearch(e.target.value)}}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
  );
}
