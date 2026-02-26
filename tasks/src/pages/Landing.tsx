import arrow from "../assets/landingPage/Arrow.svg";
import heroImg from "../assets/landingPage/heroImg.svg";
import handShake from "../assets/landingPage/handshake.svg";
import { Navbar } from "./Navbar";
function Landing() {
  return (
    <>
      <Navbar />
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

        <div className="pl-26.5 pr-16  py-22  h-full">
          {/* hereo */}
          <section className="hero flex flex-row  justify-between  w-full h-full">
            <div className=" left  flex flex-col  ">
              <div className="flex flex-col gap-10 pb-10  ">
                <div className="topText flex flex-col item-center font-medium text-[#74BF44] text-[69px] leading-20  ">
                  <p>Share Knowledge,</p>
                  <p className=" text-[66.5px] font-bold text-black">
                    Grow Together
                  </p>
                </div>
                <div className="font-normal text-[##000000CC] text-[21px] ">
                  A collaborative platform for Herald College students and
                  faculty
                  <br />
                  to share educational resources and build a comprehensive{" "}
                  <br />
                  knowledge base that enhances learning for everyone. <br />
                </div>
                <button className="px-6 py-2 text-white font-medium bg-[#74BF44CC] flex flex-row gap-2 w-fit rounded-[5.5px]">
                  Get Started <img src={arrow} alt="arrow" width={"15px"} />
                </button>
              </div>
              <div className="pt-10 flex flex-row gap-40 border-t-2 border-[#0000004D]">
                <div className="Info border-2 text-[#74BF44] font-bold text-[25px]">
                  <p>2,100 +</p>
                  <p className="text-[#000000D9] text-[16px] font-light">
                    Active Students
                  </p>
                </div>
                <div className="Info border-2 text-[#74BF44] font-bold text-[25px]">
                  <p>100 +</p>
                  <p className="text-[#000000D9] text-[16px] font-light">
                    Faculty Members
                  </p>
                </div>
                <div className="Info border-2 text-[#74BF44] font-bold text-[25px] ">
                  <p className="">5k +</p>
                  <p className="text-[#000000D9] text-[16px] font-light">
                    Resource Shared
                  </p>
                </div>
              </div>
            </div>
            <div className="rightImg relative border-2 w-fit border-yellow-500 h-full">
              <img src={heroImg} alt="" className=" pt-9 pr-5 w-[710px]" />
              <img
                src={handShake}
                alt=""
                className="absolute top-1 -right-2 w-[101px] h-[85px]"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Landing;
