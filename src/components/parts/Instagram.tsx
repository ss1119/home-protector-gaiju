export const Instagram = () => {
  return (
    <div className="relative bg-blue-400 lg:bg-white">
      <div className="flex justify-center lg:hidden py-2 md:py-4 custom-animation">
        <a href="https://www.instagram.com/protect_good_life/">
          <div className="flex items-center shadow-lg bg-white pr-7 pl-3 pt-2 pb-1 xs:py-1 xs:pr-4 xs:pl-2 hover:bg-gray-300 active:scale-95">
            <img
              src="assets/instagram.webp"
              alt="インスタグラムのアイコン"
              className="w-14 h-auto mr-2 xs:w-10 md:w-24"
              width={340}
              height={340}
            />
            <p className="text-center text-2xl font-bold text-black xs:text-xl md:text-4xl">
              Instagramで
              <br />
              駆除実績を公開中
            </p>
          </div>
        </a>
      </div>
      <div className="hidden lg:flex justify-center items-center px-10">
        <div className="flex-row">
          <div className="flex justify-center py-3">
            <a href="https://www.instagram.com/protect_good_life/">
              <div className="flex items-center shadow-lg bg-gray-400 pr-7 pl-3 pt-2 pb-1 hover:bg-gray-300 active:scale-95">
                <img
                  src="assets/instagram.webp"
                  alt="インスタグラムのアイコン"
                  className="w-22 h-auto mr-2"
                  width={340}
                  height={340}
                />
                <div className="flex-col">
                  <p className="font-bold text-center text-black text-4xl mt-1">
                    Instagramで
                    <br />
                    駆除実績を公開中
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
