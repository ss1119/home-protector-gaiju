import { DescriptionPC } from "../parts/DescriptionPC";
import { descriptionContents } from "../../utils/descriptions";
import { DescriptioniPhone } from "../parts/DescriptioniPhone";

export const Descriptions = () => {
  const descriptions = descriptionContents.map((value, index) => {
    return (
      <div key={index}>
        <DescriptionPC
          name={value.name}
          lowestPrice={value.lowestPrice}
          highestPrice={value.highestPrice}
          risk={value.risk}
          discription={value.discription}
          animalImage={value.animalImage}
          damageImages={value.damageImages}
        />
        <DescriptioniPhone
          name={value.name}
          lowestPrice={value.lowestPrice}
          highestPrice={value.highestPrice}
          risk={value.risk}
          discription={value.discription}
          animalImage={value.animalImage}
          damageImages={value.damageImages}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-col items-center bg-gray-200 pt-3 lg:pb-8">
      <div className="xl:grid xl:grid-cols-2">{descriptions}</div>
    </div>
  );
};
