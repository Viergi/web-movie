export default function Pagination({
  page,
  lastpage,
  handleNextButton,
  handlePrevButton,
  handleFirstPageButton,
  handleLastPageButton,
}) {
  return (
    <div className="flex justify-center items-center text-white gap-4 pb-4">
      {/* // ! ini make validasi supaya tidak muncul duluan sebelum card
       */}
      {lastpage ? (
        <div className="flex gap-10">
          <div className="flex gap-6">
            <button
              onClick={handleFirstPageButton}
              className="hover:text-slate-600"
            >
              First Page
            </button>
            <button onClick={handlePrevButton} className="hover:text-slate-600">
              Prev
            </button>
          </div>
          <h1>{`${page} of 500`}</h1>
          <div className="flex gap-6">
            <button onClick={handleNextButton} className="hover:text-slate-600">
              Next
            </button>
            <button
              onClick={handleLastPageButton}
              className="hover:text-slate-600"
            >
              Last Page
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
