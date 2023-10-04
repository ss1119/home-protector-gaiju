import { Call } from "./Call";

export const Flow = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="assets/flow.webp"
          className="w-full h-auto lg:w-1/2"
          alt="ご相談から駆除完了までの流れ"
        />
      </div>
      <Call />
    </div>
  );
};
