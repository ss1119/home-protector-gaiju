import { getDayOfWeek, getHour } from "../../utils/time";

export const Call = () => {
  const hour = getHour();
  const dayOfWeek = getDayOfWeek();
  return (
    <div className="relative bg-white">
      <div className="flex justify-center lg:hidden my-2 md:my-4 custom-animation">
        {9 <= hour && hour < 19 && dayOfWeek !== 6 ? (
          <a href="tel:0668857656">
            <div className="flex items-center shadow-lg bg-orange-600 pr-7 pl-3 pt-2 pb-1 xs:py-1 xs:pr-4 xs:pl-2 hover:bg-orange-500 active:scale-95">
              <img
                src="assets/phone.webp"
                alt="電話マーク"
                className="w-14 h-auto mr-2 xs:w-10 md:w-24"
                width={340}
                height={340}
              />
              <div className="flex-col">
                <div className="inline-block font-bold bg-yellow-300 px-1 xs:text-xs md:text-xl">
                  ご相談・調査・お見積り無料！
                </div>
                <p className="text-3xl font-bold text-white xs:text-2xl md:text-5xl">
                  06-6885-7656
                </p>
              </div>
            </div>
          </a>
        ) : (
          <a href="tel:09060658318">
            <div className="flex items-center shadow-lg bg-orange-600 pr-7 pl-3 pt-2 pb-1 xs:py-1 xs:pr-4 xs:pl-2 hover:bg-orange-500 active:scale-95">
              <img
                src="assets/phone.webp"
                alt="電話マーク"
                className="w-14 h-auto mr-2 xs:w-10 md:w-24"
                width={340}
                height={340}
              />
              <div className="flex-col">
                <div className="inline-block font-bold bg-yellow-300 px-1 xs:text-xs md:text-xl">
                  ご相談・調査・お見積り無料！
                </div>
                <p className="text-3xl font-bold text-white xs:text-2xl md:text-5xl">
                  090-6065-8318
                </p>
              </div>
            </div>
          </a>
        )}
      </div>
      <div className="flex lg:hidden justify-center items-center bg-black mt-2 xs:py-0.5 md:my-4 md:py-2">
        <img
          src="assets/car.webp"
          alt="白い車"
          className="w-16 h-auto mr-2 xs:w-10 md:w-28"
          width={578}
          height={432}
        />
        <p className="text-xl font-black text-white xs:text-base md:text-5xl">
          電話１本ですぐに駆けつけ！
        </p>
      </div>
      <div className="hidden lg:flex justify-center items-center mt-3 px-10">
        <div className="flex-row">
          <div className="flex justify-center pt-3">
            {9 <= hour && hour < 19 && dayOfWeek !== 6 ? (
              <a href="tel:0668857656">
                <div className="flex items-center shadow-lg bg-orange-600 pr-7 pl-3 pt-2 pb-1 hover:bg-orange-500 active:scale-95">
                  <img
                    src="assets/phone.webp"
                    alt="電話マーク"
                    className="w-22 h-auto mr-2"
                    width={340}
                    height={340}
                  />
                  <div className="flex-col">
                    <div className="inline-block font-bold bg-yellow-300 px-1 text-xl">
                      ご相談・調査・お見積り無料！
                    </div>
                    <p className="font-bold text-white text-4xl mt-1">
                      06-6885-7656
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <a href="tel:09060658318">
                <div className="flex items-center shadow-lg bg-orange-600 pr-7 pl-3 pt-2 pb-1 hover:bg-orange-500 active:scale-95">
                  <img
                    src="assets/phone.webp"
                    alt="電話マーク"
                    className="w-22 h-auto mr-2"
                    width={340}
                    height={340}
                  />
                  <div className="flex-col">
                    <div className="inline-block font-bold bg-yellow-300 px-1 text-xl">
                      ご相談・調査・お見積り無料！
                    </div>
                    <p className="font-bold text-white text-4xl mt-1">
                      090-6065-8318
                    </p>
                  </div>
                </div>
              </a>
            )}
          </div>
          <div className="flex justify-center items-center bg-black mx-64 mt-3">
            <img
              src="assets/car.webp"
              alt="白い車"
              className="w-20 h-auto mr-2 xl:w-24"
              width={578}
              height={432}
            />
            <p className="text-2xl font-black text-white xl:text-4xl">
              電話１本ですぐに駆けつけ！
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
