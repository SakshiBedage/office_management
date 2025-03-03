import { useState } from "react";
import { useLocation } from "react-router-dom";

import ServicesHeader from "./Header/ServicesHeader";
import ServicesMainContent from "./ServicesMainContent/ServicesMainContent";
import ServicesSidebar from "./Sidebar/ServicesSidebar";
import InboxEmail from "./Sidebar/SidebarFunctions/ServiceEmail/Inbox/InboxEmail";
import ReadEmail from "./Sidebar/SidebarFunctions/ServiceEmail/ReadEmail";
import ComposeEmail from "./Sidebar/SidebarFunctions/ServiceEmail/ComposeEmail";
import Chat from "../Chat";
import TasksTodoList from "./Sidebar/SidebarFunctions/Task/TasksTodoList";
import AddNewTask from "./Sidebar/SidebarFunctions/Task/AddNewTask";
import SuperAdminCalendar from "../SuperAdminCalendar";

const ServicesDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <div className="offcanvas-overlay"></div>
      <div className="wrapper">
        <ServicesHeader />

        <div className="main-wrapper">
          <ServicesSidebar setActiveComponent={setActiveComponent} />

          <div className="content-area">
            {activeComponent === "dashboard" && (
              <ServicesMainContent user={user} />
            )}
            {activeComponent === "inbox" && <InboxEmail />}
            {activeComponent === "read" && <ReadEmail />}
            {activeComponent === "compose" && <ComposeEmail />}
            {activeComponent === "chat" && <Chat />}
            {activeComponent === "tasks" && <TasksTodoList />}
            {activeComponent === "addtask" && <AddNewTask />}
            {activeComponent === "calendar" && <SuperAdminCalendar />}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesDashboard;
