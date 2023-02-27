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
    <div className="fixed w-screen text-main">
      <div className="flex justify-between px-20 pt-6 mobile:px-8 mobile:pt-8">
        <div className="flex items-center">
          <img
            src={theme === "dark" ? logo_dark : logo_light}
            alt=""
            className="h-10 w-10 mobile:relative mobile:z-20"
          />
          <span className="ml-4 text-2xl font-normal mobile:hidden">
            BLOG OF FRONT END
          </span>
        </div>
        <div className="flex items-center">
          <div
            className={`group flex text-2xl mobile:fixed mobile:inset-0 mobile:z-10 mobile:flex-col mobile:items-center mobile:justify-between mobile:bg-bg-main/[0.9] mobile:pt-60 ${
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
              className="h-8 w-16 cursor-pointer bg-switch bg-cover 
            mobile:relative mobile:z-20 mobile:h-6 mobile:w-6 mobile:bg-switch-mobile"
              onClick={changeTheme}
            />
          </div>

          <div
            className={`group relative ml-6 hidden cursor-pointer overflow-hidden mobile:z-20 mobile:block ${
              state ? "active" : ""
            }`}
            onClick={toggle}
          >
            <div className="flex h-[20px] w-[20px] flex-col justify-between">
              <div className="h-[2px] w-[18px] transform bg-main transition-all duration-300 group-[.active]:translate-x-10"></div>
              <div className="h-[2px] w-[18px] transform bg-main transition-all delay-75 duration-300 group-[.active]:translate-x-10"></div>
              <div className="h-[2px] w-[18px] transform bg-main transition-all delay-150 duration-300 group-[.active]:translate-x-10"></div>

              <div className="absolute top-2.5 -translate-x-10 transform transition-all duration-500 group-[.active]:translate-x-0">
                <div className="absolute h-[2px] w-5 rotate-0 transform bg-main transition-all delay-300 duration-500 group-[.active]:rotate-45"></div>
                <div className="absolute h-[2px] w-5 -rotate-0 transform bg-main transition-all delay-300 duration-500 group-[.active]:-rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
