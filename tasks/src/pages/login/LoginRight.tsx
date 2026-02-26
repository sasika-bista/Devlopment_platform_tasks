import loginIllustration from "../../assets/login-illustration.png";

export const LoginRight = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <img
        className="h-105 w-140"
        src={loginIllustration}
        alt="login-illustration"
      />
    </div>
  );
};
