/* eslint-disable jsx-a11y/anchor-is-valid */
import logo_light from "./images/logo_light.png";
const navData = [
  { name: "发展", link: "#" },
  { name: "关于我们", link: "#" },
];
function Header() {
  return (
    <div className="text-base min-h-screen">
      <div className="flex justify-between pt-6 px-10">
        <div className="flex items-center">
          <img src={logo_light} alt="" className="w-10 h-10" />
          <span className="ml-4 font-normal text-2xl mobile:hidden">
            BLOG OF FRONT END
          </span>
        </div>
        <div className="flex items-center">
          <div className="text-2xl">
            {navData?.map((v, i) => {
              return (
                <a href={v?.link} key={i} className="mr-6 last:mr-0">
                  {v?.name}
                </a>
              );
            })}
          </div>
          <div className="ml-10">
            <div className="w-16 h-8 bg-[url('./static/images/switch_light.png')] bg-cover cursor-pointer mobile:w-6 mobile:h-6 mobile:bg-[url('./static/images/night.png')]"></div>
          </div>
          <div className="hidden mobile:block ml-6">
            <div className="w-[18px] h-[2px] bg-base" />
            <div className="w-[18px] h-[2px] bg-base" />
            <div className="w-[18px] h-[2px] bg-base" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
