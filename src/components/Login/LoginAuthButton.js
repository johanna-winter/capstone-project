import { signOut, useSession } from "next-auth/react";
import {
  LoginNav,
  LoginButton,
  LoginLink,
} from "@/components/Login/StyledLoginAuthButton";

export default function LoginAuthButton() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }

  return (
    <LoginNav aria-label="Authentication">
      {session ? (
        <LoginButton type="button" onClick={() => signOut()}>
          Logout
        </LoginButton>
      ) : (
        <LoginLink href="/login">Login</LoginLink>
      )}
    </LoginNav>
  );
}
