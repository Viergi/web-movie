export default function Pagination({
  page,
  lastpage,
  handleNextButton,
  handleNPrevButton,
}) {
  return (
    <div className="flex justify-center items-center text-white gap-4 pb-4">
      {lastpage ? (
        <div className="flex gap-4">
          <div className="flex gap-2">
            <button
              onClick={handleNPrevButton}
              className="hover:text-slate-600"
            >
              Prev
            </button>
            <button onClick={handleNextButton} className="hover:text-slate-600">
              Next
            </button>
          </div>
          <h1>{`${page} of ${lastpage}`}</h1>
        </div>
      ) : null}
    </div>
  );
}
