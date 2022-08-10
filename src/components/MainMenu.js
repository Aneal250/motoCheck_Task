import React from "react";
import Avatar from "../img/Avatar.png";
import Drop_Down from "../img/Drop_Down.png";

const MainMenu = () => {
	return (
		<div className="flex-auto m-4 rounded-md p-2 ">
			<div className="h-12 bg-white rounded-md flex flex-row items-center space-x-[750px]">
				<div className="px-4">
					<p>Dashboard</p>
				</div>
				<div className="px-2">
					<div className="flex row items-center">
						<div className="mx-4">
							<img src={Avatar} alt="image" />
						</div>
						<div className="mx-4">
							<img src={Drop_Down} alt="image" />
						</div>
					</div>
				</div>
			</div>

			{/* Overview */}

			<div className="flex flex-row my-2 items-center py-1 mx-2 rounded-md"></div>
		</div>
	);
};

export default MainMenu;
