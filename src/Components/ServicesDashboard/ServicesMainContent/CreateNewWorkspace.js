import { Link } from "react-router-dom";

const CreateNewWorkspace = () => {
  return (
    <div class="project-box d-flex align-items-center justify-content-center mb-30">
      <Link
        to="/workspacepage"
        class="bold font-14 black d-flex align-items-center"
      >
        <img src="assets/img/svg/plus.svg" alt="" class="svg mr-2" />
        Create New Board
      </Link>
    </div>
  );
};

export default CreateNewWorkspace;
