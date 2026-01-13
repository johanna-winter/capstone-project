import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
  LoginPageMain,
  LoginCard,
  LoginCardHeader,
  LoginCardTitle,
  LoginCardText,
  LoginProviderButton,
} from "@/components/Login/StyledLoginPage";

export default function LoginPage() {
  const { data: session } = useSession();

  return (
    <LoginPageMain>
      <LoginCard aria-labelledby="login-title">
        <LoginCardHeader>
          <LoginCardTitle id="login-title">
            Get the full experience &#10024; &#x1F4F7;
          </LoginCardTitle>
          <LoginCardText>
            Log in to create and manage your events. No account needed for your
            guests! They can use the shared link to upload photos or view the
            gallery.
          </LoginCardText>
        </LoginCardHeader>
        {session ? (
          <LoginProviderButton logout onClick={() => signOut()}>
            Logout
          </LoginProviderButton>
        ) : (
          <>
            <LoginProviderButton
              onClick={() =>
                signIn("github", { callbackUrl: "/?login=success" })
              }
            >
              <Image
                src="/img/github-logo.png"
                alt="GitHub Logo"
                width={30}
                height={30}
              />
              Continue with GitHub
            </LoginProviderButton>
            <LoginProviderButton
              onClick={() =>
                signIn("google", { callbackUrl: "/?login=success" })
              }
            >
              <Image
                src="/img/google-logo.png"
                alt="Google Logo"
                width={30}
                height={30}
              />
              Continue with Google
            </LoginProviderButton>
          </>
        )}
      </LoginCard>
    </LoginPageMain>
  );
}
