import { jsx } from "theme-ui";
import { signOut, useSession } from "next-auth/client";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [session, loading] = useSession();
  console.log(session);
  return (
    <>
      <div>loading: {loading}</div>
      {!session && (
        <>
          Not signed in <br />
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
