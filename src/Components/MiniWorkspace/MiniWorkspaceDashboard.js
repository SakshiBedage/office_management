import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ServicesSidebar from "../ServicesDashboard/Sidebar/ServicesSidebar";
import MiniWorkspaceHeader from "./MiniWorkspaceHeader";
import MiniWorkspace from "./MiniWorkspace";
import InboxEmail from "../ServicesDashboard/Sidebar/SidebarFunctions/ServiceEmail/Inbox/InboxEmail";
import ReadEmail from "../ServicesDashboard/Sidebar/SidebarFunctions/ServiceEmail/ReadEmail";
import ComposeEmail from "../ServicesDashboard/Sidebar/SidebarFunctions/ServiceEmail/ComposeEmail";
import Chat from "../Chat";
import TasksTodoList from "../ServicesDashboard/Sidebar/SidebarFunctions/Task/TasksTodoList";
import AddNewTask from "../ServicesDashboard/Sidebar/SidebarFunctions/Task/AddNewTask";
import SuperAdminCalendar from "../SuperAdminCalendar";

const MiniWorkspaceDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("dashboard");
  const location = useLocation();
  const user = location.state?.user;

  return (
    <>
      <div className="offcanvas-overlay"></div>
      <div className="wrapper">
        <MiniWorkspaceHeader />
        <div className="main-wrapper">
          <ServicesSidebar setActiveComponent={setActiveComponent} />
          <div className="content-area">
            {activeComponent === "dashboard" && <MiniWorkspace user={user} />}
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

export default MiniWorkspaceDashboard;
