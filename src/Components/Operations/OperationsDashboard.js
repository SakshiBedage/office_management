import OperationsHeader from "./OperationsHeader";
import OperationsMainContent from "./OperationsMaincontent";
import OperationsSidebar from "./OperationsSidebar";

const OperationsDashboard = () => {
  return (
    <>
      <div className="offcanvas-overlay"></div>
      <div className="wrapper">
        <OperationsHeader />
        <div className="main-wrapper">
          <OperationsSidebar />

          <div className="content-area">
            <OperationsMainContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationsDashboard;
