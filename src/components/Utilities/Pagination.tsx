import Link from "next/link";

interface Props {
  page: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ page, lastPage, onPageChange }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNext = () => {
    if (page < lastPage) {
      onPageChange(page + 1);
    }
    scrollTop();
  };

  const handlePrev = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
    scrollTop();
  };

  return (
    <div className="flex justify-center items-center gap-8 py-4 px-2 text-light text-lg md:text-2xl">
      <button
        onClick={handlePrev}
        className="transition-all hover:text-primary"
      >
        Prev
      </button>
      <p> 
      {page} of {lastPage}
      </p>
      <button
        onClick={handleNext}
        className="transition-all hover:text-primary"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
