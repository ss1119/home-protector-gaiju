import { DescriptionEntity } from "../../types";
import { RequestButton } from "./RequestButton";

export const DescriptionPC = (props: DescriptionEntity) => {
  const images = props.damageImages.map((image, index) => {
    return (
      <div key={index} className="lg:w-44">
        <img
          src={image}
          alt={"害獣による被害例：" + index + 1}
          width={612}
          height={408}
          className="w-full h-auto"
        />
      </div>
    );
  });

  const risk = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= props.risk) {
      risk.push(
        <img
          key={i}
          src="/assets/star-red.webp"
          alt="赤い星"
          className="w-auto h-3 md:h-5 lg:h-4"
          width={10}
          height={10}
        />
      );
    } else {
      risk.push(
        <img
          key={i}
          src="/assets/star-white.webp"
          alt="白い星"
          className="w-auto h-3 md:h-5 lg:h-4"
          width={10}
          height={10}
        />
      );
    }
  }
  return (
    <div className="hidden rounded-lg bg-white w-auto p-5 h-auto mb-5 mx-3 xl:block">
      <div className="flex flex-col">
        <div className="flex justify-center items-center h-52 xl:h-60">
          <div className="border-4 border-black bg-white w-44 lg:w-48">
            <p className="border-b-2 border-black text-center font-bold">
              {props.name}
            </p>
            <img
              src={props.animalImage}
              alt="害獣"
              width={612}
              height={408}
              className="w-full h-auto"
            />
            <p className="flex border-t-2 border-black text-center justify-center items-center text-sm font-bold">
              危険度：
              {risk}
            </p>
          </div>
          <img
            src="/assets/arrow-right.webp"
            alt="矢印"
            className="h-16 px-1 xl:h-14"
          />
          <div className="border-4 border-black bg-white w-96">
            <p className="border-b-2 border-black text-center font-bold">
              {props.name}の特徴
            </p>
            {props.discription}
          </div>
        </div>
        <div className="flex justify-between pt-1 xl:pr-4 pl-1">
          <div className="flex items-end">
            <p className="inline-block border-double font-bold mb-9 mr-16">
              {props.highestPrice === 0
                ? `駆除料金：${props.lowestPrice}円 / 1㎡（税別）`
                : `駆除料金：${props.lowestPrice}円〜
            ${props.highestPrice}円（税別）`}
            </p>
          </div>
          <RequestButton />
        </div>
        <div className="block">
          <p className="inline-block border-double font-bold">
            {props.name}による被害例
          </p>
        </div>
        <div className="flex justify-between mt-4 px-5">{images}</div>
      </div>
    </div>
  );
};
