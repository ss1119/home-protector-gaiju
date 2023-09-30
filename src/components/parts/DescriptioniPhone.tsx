import { DescriptionEntity } from "../../types";
import { RequestButton } from "./RequestButton";

export const DescriptioniPhone = (props: DescriptionEntity) => {
  const images = props.damageImages.map((image, index) => {
    return (
      <div key={index} className="mx-1">
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
    <div className="visible rounded-lg bg-white w-auto p-4 h-auto mx-2 mb-5 xs:px-0 xl:hidden">
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <div className="border-2 border-black bg-white h-34 w-32 mr-4 xs:mr-2 xs:h-auto xs:w-32 md:h-auto md:w-56">
            <p className="border-b border-black text-center font-bold xs:text-xs md:text-2xl">
              {props.name}
            </p>
            <img
              src={props.animalImage}
              alt="害獣"
              width={612}
              height={408}
              className="w-full h-auto"
            />
            <p className="flex border-t border-black text-center justify-center items-center text-sm font-bold xs:text-xs md:text-xl">
              危険度：
              {risk}
            </p>
          </div>
          <div className="pt-1 w-44 xs:w-28 md:w-80 md:ml-10">
            <p className="inline-block border-double font-bold text-sm xs:text-xs md:text-2xl">
              駆除料金
            </p>
            <br />
            <p className="inline-block border-double font-bold text-sm mb-4 xs:text-xs md:text-2xl">
              {props.highestPrice === 0
                ? `${props.lowestPrice}円 / 1㎡（税別）`
                : `${props.lowestPrice}〜${props.highestPrice}円（税別）`}
            </p>
            <RequestButton />
          </div>
        </div>
        <div className="border-2 border-black bg-white text-sm w-description mt-3 mx-3 xs:text-xs md:w-4/5">
          <p className="border-b border-black text-center font-bold md:text-2xl">
            {props.name}の特徴
          </p>
          {props.discription}
        </div>
        <div className="pt-2 md:pt-5">
          <p className="inline-block border-double font-bold xs:text-xs md:text-2xl">
            {props.name}による被害例
          </p>
        </div>
        <div className="flex justify-between mt-3">{images}</div>
      </div>
    </div>
  );
};
