import { Call } from "./Call";

export const Last = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="assets/last.webp"
          className="w-full h-auto lg:w-1/2"
          alt="利用者様のお声"
        />
      </div>
      <Call />
    </div>
  );
};
