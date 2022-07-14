import React from "react";
import styles from "./Dashboard.module.css";
import { Header } from "../components/index";


const Dashboard = () => {
    return (
        <React.Fragment>
            <Header />
            {/* Main Body */}
            <div>
                {/* aside */}
                <div>

                </div>
                {/* right */}
                <div>
                    <div>This is the dashboard page.</div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Dashboard;