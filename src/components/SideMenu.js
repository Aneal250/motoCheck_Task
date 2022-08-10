import React from "react";
import Logo from "../img/logo.png";
import Vector from "../img/Vector.png";
import AutoCenters from "../img/AutoCenters.png";
import Form from "../img/Forms.png";
import Resource from "../img/Resources.png";
import Dispatch from "../img/Dispatch.png";
import Group from "../img/Group.png";
import Report from "../img/Report.png";
import Setting from "../img/settings.png";

const SideMenu = () => {
	return (
		<div className=" w-64 bg-white m-4 rounded-md p-2">
			<div>
				<img src={Logo} alt="" className="my-4" />
				<hr />
			</div>
			<div className="flex flex-row mt-6 items-center active_bg py-2 mx-2 rounded-md">
				<div className="mx-4">
					<img src={Vector} alt="" srcset="" />
				</div>
				<div>
					<p className="active">Dashboard</p>
				</div>
			</div>

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md">
				<div className="mx-4">
					<img src={AutoCenters} alt="" srcset="" />
				</div>
				<div>
					<p>AutoCenters</p>
				</div>
			</div>

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md">
				<div className="mx-4">
					<img src={Form} alt="" srcset="" />
				</div>
				<div>
					<p>Forms</p>
				</div>
			</div>

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md">
				<div className="mx-4">
					<img src={Resource} alt="" srcset="" />
				</div>
				<div>
					<p>Resources</p>
				</div>
			</div>

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md">
				<div className="mx-4">
					<img src={Dispatch} alt="" srcset="" />
				</div>
				<div>
					<p>Dispatch</p>
				</div>
			</div>

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md">
				<div className="mx-4">
					<img src={Group} alt="" srcset="" />
				</div>
				<div>
					<p>Groups</p>
				</div>
			</div>

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md">
				<div className="mx-4">
					<img src={Report} alt="" srcset="" />
				</div>
				<div>
					<p>Report</p>
				</div>
			</div>

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md">
				<div className="mx-4">
					<img src={Setting} alt="" srcset="" />
				</div>
				<div>
					<p>Finance sheet</p>
				</div>
			</div>

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md">
				<div className="mx-4">
					<img src={Setting} alt="" srcset="" />
				</div>
				<div>
					<p>settings</p>
				</div>
			</div>
			<div className="h-20"></div>
		</div>
	);
};

export default SideMenu;
