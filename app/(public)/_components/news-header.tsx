"use client";

import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function NewsHeader() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
          Latest Stories
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover stories, insights, and ideas from our community
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          Filter
        </Button>
      </div>
    </div>
  );
}
