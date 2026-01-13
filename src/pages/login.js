import LoginPage from "@/components/Login/LoginPage";
import { StyledErrorMessageDiv } from "@/components/Login/StyledMessages";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const { error } = router.query;

  return (
    <div>
      <h1>Memory Wall</h1>

      {error && (
        <StyledErrorMessageDiv>
          Login failed. Please try again.
        </StyledErrorMessageDiv>
      )}

      <LoginPage />
    </div>
  );
}
