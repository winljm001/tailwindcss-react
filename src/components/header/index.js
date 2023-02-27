/* eslint-disable jsx-a11y/anchor-is-valid */
import { useBoolean } from "ahooks";
import logo_light from "./images/logo_light.png";
import logo_dark from "./images/logo_dark.png";
import { themeData } from "../../App";
const navData = [
  { name: "发展", link: "#" },
  { name: "关于我们", link: "#" },
];

function Header({ themeProps }) {
  /** 移动端菜单menu展开关闭 */
  const [state, { toggle }] = useBoolean(false);

  const { theme, setTheme } = themeProps;
  const changeTheme = () => {
    const currentTheme = themeData.findIndex((v) => v === theme) || 0;
    const themeIndex =
      currentTheme >= themeData.length - 1 ? 0 : currentTheme + 1;
    setTheme(themeData?.[themeIndex] || themeData[0]);
  };
  return (
    <div className="text-main fixed w-screen">
      <div className="flex justify-between pt-6 px-20 mobile:pt-8 mobile:px-8">
        <div className="flex items-center">
          <img
            src={theme === "dark" ? logo_dark : logo_light}
            alt=""
            className="w-10 h-10 mobile:relative mobile:z-20"
          />
          <span className="ml-4 font-normal text-2xl mobile:hidden">
            BLOG OF FRONT END
          </span>
        </div>
        <div className="flex items-center">
          <div
            className={`text-2xl flex mobile:fixed mobile:inset-0 mobile:z-10 mobile:bg-bg-main/[0.9] mobile:flex-col mobile:justify-between mobile:items-center mobile:pt-60 group ${
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
            <div
              className="w-16 h-8 bg-switch bg-cover cursor-pointer 
            mobile:w-6 mobile:h-6 mobile:bg-switch-mobile mobile:relative mobile:z-20"
              onClick={changeTheme}
            />
          </div>

          <div
            className={`group ml-6 relative cursor-pointer overflow-hidden hidden mobile:block mobile:z-20 ${
              state ? "active" : ""
            }`}
            onClick={toggle}
          >
            <div className="flex flex-col justify-between w-[20px] h-[20px]">
              <div className="bg-main h-[2px] w-[18px] transform transition-all duration-300 group-[.active]:translate-x-10"></div>
              <div className="bg-main h-[2px] w-[18px] transform transition-all duration-300 group-[.active]:translate-x-10 delay-75"></div>
              <div className="bg-main h-[2px] w-[18px] transform transition-all duration-300 group-[.active]:translate-x-10 delay-150"></div>

              <div className="absolute transform transition-all duration-500 top-2.5 -translate-x-10 group-[.active]:translate-x-0">
                <div className="absolute bg-main h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-[.active]:rotate-45"></div>
                <div className="absolute bg-main h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-[.active]:-rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
