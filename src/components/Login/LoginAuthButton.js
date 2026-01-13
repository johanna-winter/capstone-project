import { signOut, useSession } from "next-auth/react";
import {
  LoginNav,
  LoginButton,
  LoginLink,
} from "@/components/Login/StyledLoginAuthButton";
import {
  LoginGreeting,
  LoginGreetingWrapper,
} from "@/components/Login/StyledLoginMessages";

export default function LoginAuthButton() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }

  return (
    <LoginNav aria-label="Authentication">
      {session ? (
        <LoginGreetingWrapper>
          <LoginGreeting>
            Hello{session.user?.name ? `, ${session.user.name}` : ""} &#128075;
          </LoginGreeting>
          <LoginButton type="button" onClick={() => signOut()}>
            Logout
          </LoginButton>
        </LoginGreetingWrapper>
      ) : (
        <LoginLink href="/login">Login</LoginLink>
      )}
    </LoginNav>
  );
}
