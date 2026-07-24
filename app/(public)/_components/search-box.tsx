"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const searchQuery = params.get("search") ? params.get("search") : "";
  console.log(params, "params in client component", searchQuery);

  const handleSubmit = (searchValue: string) => {
    //     if (searchRef.current) {
    //   clearTimeout(searchRef.current);
    // }
    // searchRef.current = setTimeout(() => {
    //   router.replace(`${pathName}?search=${searchValue}`);
    // }, 500);
    return router.replace(`${pathName}?search=${searchValue}`);
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
