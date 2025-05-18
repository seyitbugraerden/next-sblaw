"use server";

export const transformData = async (slug: string) => {
  if (slug === "aile-hukuku") {
    return "Aile Hukuku";
  }
  return slug;
};

