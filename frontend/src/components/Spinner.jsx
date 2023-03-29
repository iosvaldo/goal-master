import ClipLoader from "react-spinners/ClipLoader";

function Spinner() {
  return (
    <div className="loadingSpinnerContainer">
      <div >
        <ClipLoader color="#36d7b7" size={80} />
      </div>
    </div>
  );
}

export default Spinner;
