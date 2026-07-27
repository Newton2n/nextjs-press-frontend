export type TPostMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};
export type TPost = {
  id: string;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  authorId: string;
  tags: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
  isPremium: boolean;
  author: {
    id: string;
    name: string;
    email: string;
    activeStatus: "ACTIVE" | "INACTIVE";
    role: "USER" | "ADMIN";
    createdAt: string;
    updatedAt: string;
  };
  _count?: {
    comment: number;
  };
};
