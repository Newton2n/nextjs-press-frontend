type TUser = {
  id: string;
  name: string;
  email: string;
  activeStatus: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  profile: {
    id: string;
    profilePhoto: string | null;
    bio: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
  };
};

export type RegisterFormType = {
  success: boolean;
  message: string;
  data:TUser | null
};
