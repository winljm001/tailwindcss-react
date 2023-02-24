/* eslint-disable jsx-a11y/anchor-is-valid */
function HistoryPage() {
  return (
    <div className="pt-40 px-20 flex flex-col">
      <div className="flex justify-between">
        <div className="w-1/2 flex flex-col">
          <div className="text-[64px] text-main uppercase leading-none font-bold mb-6">
            development
            <br />
            history
          </div>
          <div className="text-main text-[64px] leading-none mb-6">
            发展历程
          </div>
          <div className="text-main/[0.6] leading-8 text-[18px]">
            Everything's Eventual
            前端团队隶属于洪九果品(06689)信息中心。我们相信，只要团队足够好，所有的东西都可以被创造。
          </div>
          <a href="#" className="text-link self-start mt-12">
            <div className="flex items-center justify-center px-4 h-14 rounded-[10px] border border-main">
              查看更多
              <div className="bg-link-icon w-5 h-[18px] ml-4 bg-cover" />
            </div>
          </a>
        </div>
        <div className="w-1/2"></div>
      </div>
      <div className="w-[42px] h-[89px] bg-mouse bg-cover self-center mt-20"></div>
    </div>
  );
}

export default HistoryPage;
