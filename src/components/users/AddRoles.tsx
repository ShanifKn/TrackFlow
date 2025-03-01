import React from "react";
import EditUser from "./EditUser";
import UserHistory from "./UserHistory";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const AddUsers = ({ id }: any) => {
  return (
    <>
      <EditUser id={id} />

      <UserHistory />
    </>
  );
};

export default AddUsers;
