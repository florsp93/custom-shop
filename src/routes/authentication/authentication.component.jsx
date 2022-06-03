import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import { AuthenticationDiv } from "./authentication.styles";

const Authentication = () => {
  return (
    <AuthenticationDiv>
      <SignInForm />
      <SignUpForm />
    </AuthenticationDiv>
  );
};

export default Authentication;
