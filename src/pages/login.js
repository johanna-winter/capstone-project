import LoginPage from "@/components/Login/LoginPage";
import BackButton from "@/components/BackButton/BackButton";

export default function Login() {
  return (
    <>
      <BackButton href="/">Back</BackButton>
      <LoginPage />
    </>
  );
}
