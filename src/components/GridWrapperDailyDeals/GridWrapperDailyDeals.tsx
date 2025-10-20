export default function GridWrapperDailyDeals() {
  return (
    <section dir="rtl">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:h-[600px]">
        {/* div1 */}
        <div className="bg-blue-100 rounded-lg lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2">
          div1
        </div>

        {/* div2 */}
        <div className="bg-blue-200 rounded-lg lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-3">
          div2
        </div>

        {/* div3 */}
        <div className="bg-blue-300 rounded-lg lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3">
          div3
        </div>

        {/* div4 */}
        <div className="bg-blue-400 rounded-lg lg:row-start-1 lg:row-end-2 lg:col-start-3 lg:col-end-4">
          div4
        </div>

        {/* div5 */}
        <div className="bg-blue-500 rounded-lg lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4">
          div5
        </div>

        {/* div6 */}
        <div className="bg-blue-600 rounded-lg lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4">
          div6
        </div>
      </div>
    </section>
  );
}
