// images
import arrow from "../assets/landingPage/heroSection/Arrow.svg";
import PeerLearning from "../assets/landingPage/About3/PeerLearning.svg";
import InstantAccess from "../assets/landingPage/About3/InstantAccess.svg";
import CommunitySupport from "../assets/landingPage/About3/CoomunitySupport.svg";
import hckLog from "../assets/landingPage/ContactUs/HearldCollegeLogo.svg";
import location from "../assets/landingPage/ContactUs/Location.svg";
import phone from "../assets/landingPage/ContactUs/Phone.svg";
import message from "../assets/landingPage/ContactUs/Messsage.svg";
import fb from "../assets/landingPage/ContactUs/fb.svg";
import insta from "../assets/landingPage/ContactUs/insta.svg";
import Tiktok from "../assets/landingPage/ContactUs/Tiktok.svg";
import utube from "../assets/landingPage/ContactUs/utube.svg";
import hckCoreLogo from "../assets/landingPage/hck_core_logo.svg";

//components
import NavBarLogedOut from "../components/landing/NavBarLogedOut";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import ShareContent from "../components/landing/ShareContent";
import AccessResources from "../components/landing/AccessResources";
import Footer from "../components/landing/Footer";

function Landing() {
  return (
    <>
      <div className="w-screen h-screen">
        {/* nav bar */}
        <NavBarLogedOut />
        <div className="  py-22  h-full">
          {/* hereo */}
          <HeroSection />

          {/* about 1 */}
          <AboutSection />

          {/* about 2 */}
          <ShareContent />

          {/* about 3 */}
          <AccessResources />

          {/* contact us */}
          <div className="pl-23.5 pr-15.5 py-10 flex flex-col gap-4">
            <img src={hckLog} alt="" width={"100px"} />
            <div className="flex flex-row justify-between">
              <div className="firstCol flex flex-col">
                <div className="flex flex-row gap-2">
                  <img src={location} alt="" />
                  <p className="text-[11px]">Bhagawati Marga, Naxal</p>
                </div>
                <div className="flex flex-row gap-2">
                  <img src={phone} alt="" />
                  <p className="text-[11px]">+977 9801022637</p>
                </div>
                <div className="flex flex-row gap-2">
                  <img src={message} alt="" />
                  <p className="text-[11px]">info2heraldCollege.edu.np</p>
                </div>
              </div>
              <div className="secondCol flex flex-col justify-between"></div>
            </div>
          </div>

          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Landing;
