import loginIllustration from "../../assets/loginPage/login-illustration.png";

export const LoginRight = () => {
  return (
    <div className="flex items-center mt-6 mr-30">
      <img
        className="h-100 w-130"
        src={loginIllustration}
        alt="login-illustration"
      />
    </div>
  );
};
