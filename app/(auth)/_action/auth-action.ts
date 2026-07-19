"use server";

export const loginAction = async (previosState,formData: FormData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(email, password);
  const payload = {
    email,
    password,
  };
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  console.log("result ", result);
  return result;
};
