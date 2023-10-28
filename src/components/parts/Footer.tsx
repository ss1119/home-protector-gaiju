import { getDayOfWeek, getHour } from "../../utils/time";

export const Footer = () => {
  const hour = getHour();
  const dayOfWeek = getDayOfWeek();
  return (
    <div className="sticky footer-bg bottom-0 z-50 lg:hidden">
      <div className="flex h-full">
        <div className="flex items-end justify-center w-line pb-1">
          <a href="https://lin.ee/mqP8zXC">
            <img
              src="assets/footer/line.webp"
              alt="簡単見積りはこちらから"
              className="w-24 h-auto xs:w-20 md:w-52"
              width={400}
              height={165}
            />
          </a>
        </div>
        <div className="flex items-end justify-center w-call pb-0.5">
          {9 <= hour && hour < 19 && dayOfWeek !== 6 ? (
            <a href="tel:0668857656">
              <img
                src="assets/footer/call1.webp"
                alt="お電話はこちらから"
                className="w-52 h-auto xs:w-36 md:w-96"
                width={500}
                height={150}
              />
            </a>
          ) : (
            <a href="tel:09060658318">
              <img
                src="assets/footer/call2.webp"
                alt="お電話はこちらから"
                className="w-52 h-auto xs:w-36 md:w-96"
                width={500}
                height={150}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
