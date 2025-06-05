import { Outlet } from "react-router-dom";
import WorkshopSidebar from "./WorkshopSidebar";
import '../../styles/Workshop.css'

function WorkshopLayout() {
    return(
        <section className="workshop-page-layout">
            <WorkshopSidebar />
            <Outlet />
        </section>
    );
}

export default WorkshopLayout