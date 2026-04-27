import { useNavigate } from "react-router-dom";
import { TfiFaceSad } from "react-icons/tfi";

export default function Error() {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="h-full py-30 flex flex-col items-center justify-center bg-blue-300 text-black md:px-20 lg:px-40">
      <div className="text-8xl p-10 pb-5">Error 404</div>
      <div className="text-6xl p-10 pt-5">
        Page not found
        <TfiFaceSad className="mx-5" />
      </div>
      <div className="text-gray-700 text-center text-lg px-5">
        I am still struggling to work some of the pages, please check out the
        other pages by clicking the tabs in the header. You may also drop me an email
        to add the page you wanted to be here by clicking the mail icon at the
        footer.
      </div>
      {/* <div className="text-gray-700 text-5xl px-5">
        Thank You.
      </div>
      <div className="text-2xl p-10 pt-5">
        <button
          className="bg-blue-700 hover:bg-blue-300 text-white font-bold p-5 rounded"
          onClick={clickHandler}
        >
          Back To Homepage
        </button>
      </div> */}
    </div>
  );
}
