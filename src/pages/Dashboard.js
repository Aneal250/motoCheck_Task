import React from "react";
import MainMenu from "../components/MainMenu";
import SideMenu from "../components/SideMenu";

const Dashboard = () => {
	return (
		<div className="flex  ">
			<SideMenu />
			<MainMenu />
		</div>
	);
};

export default Dashboard;
