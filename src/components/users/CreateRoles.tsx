
import React from "react";
import EditUser from "./EditUser";
import UserHistory from "./UserHistory";
import AddUsers from "./AddRoles";
import CreateUser from "./AddUser";

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

const CreateUsers = () => {
  return (
    <>
      <CreateUser />

      <UserHistory />
    </>
  );
};

export default CreateUsers;
