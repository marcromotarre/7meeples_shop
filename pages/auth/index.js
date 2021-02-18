import { signIn, signOut, useSession } from "next-auth/client";

export default function Page() {
  const [session, loading] = useSession();
  const handleSignIn = async () => {
    signIn("credentials", { email: "marcromotarre@gmail.com" });
  };

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={handleSignIn}>Sign in</button>
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
