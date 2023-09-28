export const Company = () => {
  return (
    <div className="flex items-center justify-center py-2 lg:py-10 bg-gray-300">
      <div className="px-2 w-full md:px-3 lg:w-4/5 lg:px-0">
        <div className="flex justify-center items-center font-bold text-base mb-1 xs:text-sm md:text-2xl lg:mb-3 lg:text-3xl">
          会社概要
        </div>
        <div className="flex items-center justify-center bg-white rounded-md p-3 mb-4 lg:p-4">
          <table>
            <tbody>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  社名
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  株式会社 Protect Good Life
                </td>
              </tr>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  代表取締役
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  佐々木 晃聖
                </td>
              </tr>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  所在地
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  〒532-0011 大阪府大阪市淀川区西中島6丁目3番24号 K423
                </td>
              </tr>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  TEL
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  06-6885-7656
                </td>
              </tr>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  FAX
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  06-6885-6522
                </td>
              </tr>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  E-mail
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  sasass215@icloud.com
                </td>
              </tr>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  資本金
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  1,500,000円
                </td>
              </tr>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  事業内容
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  害虫駆除/害獣駆除/造園業/建設業
                </td>
              </tr>
              <tr className="sm:h-8 lg:h-14">
                <td className="border-b-2 font-semibold text-sm xs:text-xs w-20 md:w-32 md:text-lg lg:w-48">
                  活動地域
                </td>
                <td className="border-b-2 text-sm xs:text-xs md:text-lg">
                  関西圏全域
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
