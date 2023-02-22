import logo_light from "./images/logo_light.png";
function Header() {
  return (
    <div>
      <div>
        <div>
          <img src={logo_light} alt="" /> BLOG OF FRONT END
        </div>
        <div>
          <div>
            <a href="#">发展</a>
            <a href="#">关于我们</a>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
