import arrow from "../assets/landingPage/Arrow.svg";
import heroImg from "../assets/landingPage/heroImg.svg";
import handShake from "../assets/landingPage/handshake.svg";
import { NavbarForLogin } from "./NavbarForLogin";
function Landing() {
  return (
    <>
      <NavbarForLogin />
      <div className="w-screen h-screen">
        {/* nav bar */}
        {/* <header className="border-b border-[#68686833] pl-27.5 pr-20 pt-1 pb-5"> */}
        {/* <nav className=" flex justify-between items-center ">
          <img src={hckCoreLogo} alt="HCK Core LOGO" width={"67px"} />
          <button
            type="button"
            className="bg-[#75BF43] hover:bg-[#A4C93A] text-[15px] font-bold rounded-lg px-[35px] py-[9PX]   text-white cursor-pointer "
            >
            Login
            </button>
        </nav> */}
        {/* </header> */}

      <div className="pl-23.5 pr-15.5  py-22  h-full">
        {/* hereo */}
        <section className="hero flex flex-row  justify-between  w-full h-full">
          <div className=" left  flex flex-col  ">
            <div className="flex flex-col gap-8 pb-10  ">
              <div className="pl-1 topText flex flex-col item-center font-medium text-[#74BF44] text-[69px] leading-20  ">
                <p>Share Knowledge,</p>
                <p className=" text-[66.5px] font-bold text-black">
                  Grow Together
                </p>
              </div>
              <div className=" pl-1 font-normal text-[##000000CC] text-[16px] leading-7">
                A collaborative platform for Herald College students and faculty
                <br />
                to share educational resources and build a comprehensive <br />
                knowledge base that enhances learning for everyone. <br />
              </div>
              <button className="px-6 py-2 text-white  text-[14px] font-medium mt-1 bg-[#74BF44CC] hover:bg-[#A4C93A]  flex flex-row gap-2 w-fit rounded-[5.5px]">
                Get Started <img src={arrow} alt="arrow" width={"15px"} />
              </button>
            </div>
            <div className="pt-10  flex flex-row gap-26 border-t pl-1 border-[#0000004D]">
              <div className="Info text-[#74BF44] font-bold text-[30px]">
                <p>2,100+</p>
                <p className="text-[#000000D9] text-[12px] font-extralight">
                  Active Students
                </p>
              </div>
              <div className="Info text-[#FFC93F] font-bold text-[30px]">
                <p>100+</p>
                <p className="text-[#000000D9] text-[12px] font-light">
                  Faculty Members
                </p>
              </div>
              <div className="Info text-[#74BF44] ml-1 font-bold text-[30px] ">
                <p className="">5k+</p>
                <p className="text-[#000000D9] text-[12px] font-light">
                  Resource Shared
                </p>
              </div>
            </div>
          </div>
          <div className="rightImg relative  w-fit  h-full">
            <img src={heroImg} alt="" className=" pt-9 pr-5 w-173.5" />
            <img
              src={handShake}
              alt="handshake"
              className="absolute top-2 -right-2 w-25.25 h-21.25 transition-transform duration-300 hover:-translate-y-1.25"
            />
          </div>
        </section>

        {/* about */}
        <section className="flex flex-col justify-evenly border-2 border-red-500 h-screen ">
          {/* top */}
          <div className="texts flex flex-col gap-5 justify-center items-center ">
            <p className="font-bold text-[41.5px] text-center text-[#000000BF] leading-13 ">
              Designed for smarter collaboration <br /> between students &
              educators <br /> at Herald College
            </p>
            <p className="leading-8 text-sm text-center text-[#000000CC] text-[17px] font-light">
              Our platform combines the best of educational technology with
              intuitive design to <br /> create an environment where knowledge
              flows freely and learning thrives.
            </p>
          </div>

          {/* bottom cards */}
          <div className="border-2 border-black h-full"></div>
        </section>
      </div>
      </div>
    </>
  );
}

export default Landing;
