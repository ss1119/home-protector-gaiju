import { Call } from "./Call";

export const Pages = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="assets/pages/page1.webp"
          className="w-full h-auto lg:w-1/2"
          alt="害獣被害はプロにしか解決できない場合があります。"
        />
      </div>
      <Call />
      <div className="flex justify-center">
        <img
          src="assets/pages/page2.webp"
          className="w-full h-auto lg:w-1/2"
          alt="「天井や壁にシミがある」「動物の異臭がする」「天井から動物の足音が聞こえる」などの症状が出ていたら要注意です。"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="assets/pages/page3.webp"
          className="w-full h-auto lg:w-1/2"
          alt="「庭や家の周りで動物の足跡を見た」「頻繁にダニやノミに刺される」などの被害があれば今すぐ弊社にお電話ください。"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="assets/pages/page4.webp"
          className="w-full h-auto lg:w-1/2"
          alt="被害を放置すると大変なことになります。"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="assets/pages/page5.webp"
          className="w-full h-auto lg:w-1/2"
          alt="最悪の場合、害獣被害によりあなたの大切なお家の不動産価値が0になる可能性があります。"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="assets/pages/page6.webp"
          className="w-full h-auto lg:w-1/2"
          alt="そうなる前に弊社にお電話をください。"
        />
      </div>
    </div>
  );
};
