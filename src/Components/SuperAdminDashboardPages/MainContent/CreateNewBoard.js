import { Link } from "react-router-dom";

const CreateNewBoard = () => {
  return (
    <div className="project-box d-flex align-items-center justify-content-center mb-30">
      <Link
        to="/workspacepage"
        className="bold font-14 black d-flex align-items-center"
      >
        <img src="assets/img/svg/plus.svg" alt="" className="svg mr-2" />
        Create New Board
      </Link>
    </div>
  );
};

export default CreateNewBoard;
