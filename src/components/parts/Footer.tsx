import { getDayOfWeek, getHour } from "../../utils/time";

export const Footer = () => {
  const hour = getHour();
  const dayOfWeek = getDayOfWeek();
  return (
    <div className="sticky bottom-0 z-50 lg:hidden">
      <div className="flex-row items-center relative p-1 pb-2 w-full h-auto bg-orange-400 xs:pb-1 md:py-2">
        <div className="flex">
          <div className="flex justify-center w-3/5">
            <img
              src="assets/footer/item1.webp"
              alt="ご依頼受付中"
              className="w-32 h-auto mr-3 mb-1 xs:w-16 md:w-60"
            />
          </div>
          <div className="flex justify-center w-2/5">
            <img
              src="assets/footer/item2.webp"
              alt="現地調査無料"
              className="w-32 h-auto mb-item2 xs:w-16 md:w-60"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-1">
          {9 <= hour && hour < 19 && dayOfWeek !== 6 ? (
            <a
              href="tel:0668857656"
              className="flex items-center justify-center w-7/12 h-14 mr-3 xs:h-10 md:mr-0 md:h-28"
            >
              <img
                src="assets/footer/call.webp"
                alt="お電話はこちらから"
                className="w-56 h-auto md:w-10/12"
                width={800}
                height={237}
              />
            </a>
          ) : (
            <a
              href="tel:09060658318"
              className="flex items-center justify-center w-7/12 h-14 mr-3 xs:h-10 md:mr-0 md:h-28"
            >
              <img
                src="assets/footer/call.webp"
                alt="お電話はこちらから"
                className="w-56 h-auto md:w-10/12"
                width={800}
                height={237}
              />
            </a>
          )}
          <a
            href="https://lin.ee/mqP8zXC"
            className="flex flex-col justify-center w-5/12 h-14 xs:h-10 md:h-28 md:items-center"
          >
            <img
              src="assets/footer/estimate.webp"
              alt="簡単見積りはこちらから"
              className="w-40 h-auto md:w-10/12"
              width={400}
              height={165}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
