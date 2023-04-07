import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-[bg-gray-300] z-50 flex items-center justify-center">
      <div>
        <ClipLoader color="#36d7b7" size={80} />
      </div>
    </div>
  );
}

export default Spinner;
