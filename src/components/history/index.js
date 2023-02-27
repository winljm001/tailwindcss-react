/* eslint-disable jsx-a11y/anchor-is-valid */
function HistoryPage() {
  return (
    <div className="flex flex-col px-20 pt-40 mobile:px-8 mobile:pt-[168px]">
      <div className="flex justify-between">
        <div className="flex w-1/2 flex-col mobile:w-full">
          <div className="mb-6 text-[64px] font-bold uppercase leading-none text-main mobile:text-[36px]">
            development
            <br />
            history
          </div>
          <div className="mb-6 text-[64px] leading-none text-main mobile:mb-10 mobile:text-[36px]">
            发展历程
          </div>
          <div className="text-[18px] leading-8 text-main/[0.6] mobile:text-[14px] mobile:leading-6">
            Everything's Eventual
            前端团队隶属于洪九果品(06689)信息中心。我们相信，只要团队足够好，所有的东西都可以被创造。
          </div>
          <a href="#" className="mt-12 self-start text-link mobile:mt-3">
            <div className="flex h-14 items-center justify-center rounded-[10px] border border-main px-4">
              查看更多
              <div className="ml-4 h-[18px] w-5 bg-link-icon bg-cover" />
            </div>
          </a>
        </div>
        <div className="relative w-1/2 mobile:hidden">
          <div className="absolute top-[66px] right-[10vw] z-10 h-[336px] w-[336px] bg-js bg-cover" />
          <div className="absolute top-[172px] right-[4.65vw] z-0 h-[184px] w-[184px] bg-ts bg-cover" />
          <div />
        </div>
      </div>
      <div className="mt-20 h-[89px] w-[42px] self-center bg-mouse bg-cover mobile:hidden"></div>
    </div>
  );
}

export default HistoryPage;
