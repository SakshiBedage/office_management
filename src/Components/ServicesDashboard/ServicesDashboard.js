import ServicesHeader from "./Header/ServicesHeader";
import ServicesMainContent from "./ServicesMainContent";
import ServicesSidebar from "./ServicesSidebar";

const ServicesDashboard = () => {
  return (
    <>
      <div className="offcanvas-overlay"></div>
      <div className="wrapper">
        <ServicesHeader />

        <div className="main-wrapper">
          <ServicesSidebar />

          <div className="content-area">
            <ServicesMainContent />
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesDashboard;
