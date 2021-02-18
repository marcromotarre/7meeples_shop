/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useEffect } from "react";
import LoginLogo from "../../src/components/login/login-logo";
import { useSession, signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { getLogo } from "src/data/logo";
import { Button } from "src/components/common";

export default function Profile() {
  const router = useRouter();
  const [session, loading] = useSession();
  const logOut = () => {
    signOut();
  };

  return (
    <>
      {session && !loading && (
        <>
          <div>{session.user.email}</div>
          <Button onClick={logOut}>
            <span>Cerrar sesión</span>
          </Button>
        </>
      )}
    </>
  );
}
