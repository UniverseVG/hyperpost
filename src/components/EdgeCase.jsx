import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const EdgeCase = () => {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status);
  const authenticateAndNavigate = () => {
    if (authStatus) {
      navigate("/add-post");
    } else navigate("/login");
  };
  return (
    <div className="p-2 w-full">
      <div className="flex items-center justify-center">
        <img
          src="https://img.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg?size=626&ext=jpg&ga=GA1.1.1803636316.1712188800&semt=ais"
          width={400}
          height={200}
        />
      </div>

      <div className="flex-column items-center justify-center py-8 space-y-4">
        <p className="text-gray-700 text-xl">
          No blogs found? {authStatus ? "Create one" : "Login to create one"}
        </p>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded shadow"
          onClick={authenticateAndNavigate}
        >
          {authStatus ? "Add Post" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default EdgeCase;
