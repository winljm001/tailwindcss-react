/* eslint-disable jsx-a11y/anchor-is-valid */
function HistoryPage() {
  return (
    <div className="pt-40 px-20 flex flex-col mobile:pt-[168px] mobile:px-8">
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col mobile:w-full">
          <div className="text-[64px] text-main uppercase leading-none font-bold mb-6 mobile:text-[36px]">
            development
            <br />
            history
          </div>
          <div className="text-main text-[64px] leading-none mb-6 mobile:text-[36px] mobile:mb-10">
            发展历程
          </div>
          <div className="text-main/[0.6] leading-8 text-[18px] mobile:text-[14px] mobile:leading-6">
            Everything's Eventual
            前端团队隶属于洪九果品(06689)信息中心。我们相信，只要团队足够好，所有的东西都可以被创造。
          </div>
          <a href="#" className="text-link self-start mt-12 mobile:mt-3">
            <div className="flex items-center justify-center px-4 h-14 rounded-[10px] border border-main">
              查看更多
              <div className="bg-link-icon w-5 h-[18px] ml-4 bg-cover" />
            </div>
          </a>
        </div>
        <div className="w-1/2 relative mobile:hidden">
          <div className="bg-js w-[336px] h-[336px] bg-cover absolute top-[66px] right-[10vw] z-10" />
          <div className="bg-ts w-[184px] h-[184px] bg-cover absolute top-[172px] right-[4.65vw] z-0" />
          <div />
        </div>
      </div>
      <div className="w-[42px] h-[89px] bg-mouse bg-cover self-center mt-20 mobile:hidden"></div>
    </div>
  );
}

export default HistoryPage;
