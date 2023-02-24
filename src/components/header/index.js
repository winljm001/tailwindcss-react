/* eslint-disable jsx-a11y/anchor-is-valid */
import { useBoolean } from "ahooks";
import logo_light from "./images/logo_light.png";
const navData = [
  { name: "发展", link: "#" },
  { name: "关于我们", link: "#" },
];
function Header() {
  const [state, { toggle }] = useBoolean(false);
  return (
    <div className="text-base min-h-screen">
      <div className="flex justify-between pt-6 px-10">
        <div className="flex items-center">
          <img
            src={logo_light}
            alt=""
            className="w-10 h-10 mobile:relative mobile:z-20"
          />
          <span className="ml-4 font-normal text-2xl mobile:hidden">
            BLOG OF FRONT END
          </span>
        </div>
        <div className="flex items-center">
          <div
            className={`text-2xl flex mobile:fixed mobile:inset-0 mobile:z-10 mobile:bg-[#fff]/[0.6] mobile:flex-col mobile:justify-between mobile:items-center mobile:pt-60 group ${
              state ? "" : "mobile:hidden"
            }`}
          >
            {navData?.map((v, i) => {
              return (
                <a
                  href={v?.link}
                  key={i}
                  className="mr-6 last:mr-0 mobile:mr-0"
                >
                  {v?.name}
                </a>
              );
            })}
            <div className="hidden mobile:block mobile:basis-1/5" />
          </div>
          <div className="ml-10">
            <div className="w-16 h-8 bg-[url('./static/images/switch_light.png')] bg-cover cursor-pointer mobile:w-6 mobile:h-6 mobile:bg-[url('./static/images/night.png')] mobile:relative mobile:z-20"></div>
          </div>

          <div
            class={`group ml-6 relative cursor-pointer overflow-hidden hidden mobile:block mobile:z-20 ${
              state ? "active" : ""
            }`}
            onClick={toggle}
          >
            <div class="flex flex-col justify-between w-[20px] h-[20px]">
              <div class="bg-base h-[2px] w-[18px] transform transition-all duration-300 group-[.active]:translate-x-10"></div>
              <div class="bg-base h-[2px] w-[18px] transform transition-all duration-300 group-[.active]:translate-x-10 delay-75"></div>
              <div class="bg-base h-[2px] w-[18px] transform transition-all duration-300 group-[.active]:translate-x-10 delay-150"></div>

              <div class="absolute transform transition-all duration-500 top-2.5 -translate-x-10 group-[.active]:translate-x-0">
                <div class="absolute bg-base h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-[.active]:rotate-45"></div>
                <div class="absolute bg-base h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-[.active]:-rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
