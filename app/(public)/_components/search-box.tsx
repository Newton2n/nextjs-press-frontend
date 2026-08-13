"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBox = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const searchQuery = params.get("search") ? params.get("search") : "";
  

  // const searchRef = React.useRef<NodeJS.Timeout | null>(null);

  const searchRef = React.useRef<ReturnType<typeof setTimeout>>(null);
  const handleSubmit = (searchValue: string) => {
    //debounce the search input to avoid too many requests
    if (searchRef.current) {
      clearTimeout(searchRef.current);
    }
    searchRef.current = setTimeout(() => {
      router.replace(`${pathName}?search=${searchValue}`);
    }, 600);
  };

  return (
    <div className="flex-1 relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        placeholder="Search posts..."
        defaultValue={searchQuery ? searchQuery : ""}
        onChange={(e) => handleSubmit(e.target.value)}
        className="pl-10"
      />
    </div>
  );
};

export default SearchBox;
