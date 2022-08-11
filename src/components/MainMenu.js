import React from "react";
import Avatar from "../img/Avatar.png";
import Drop_Down from "../img/Drop_Down.png";
import Polygon from "../img/Polygon.png";
import Icon1 from "../img/Icon_1.png";
import Icon2 from "../img/Icon_2.png";
import Icon3 from "../img/Icon_3.png";
import Arrow from "../img/Arrow.png";
import Profile from "../img/Profile.png";

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
			<h3 className="mt-8 mb-4 text-gray-400  text-2xl font-medium">
				Overview
			</h3>
			<div className="h-34 bg-white my-4 w-[768px] rounded-md flex flex-row">
				<div class="basis-1/3 py-8 px-6 border-r border-gray-200 bg ">
					<div className="flex flex-row items-center">
						<div>
							<p className="text-3xl font-bold"> 228</p>
						</div>
						<div className="ml-4 mr-2 ">
							<img src={Polygon} alt="alt" className="" />
						</div>
						<div>
							<p className="text-gray-400 text-sm">+3</p>
						</div>
					</div>
					<p className="">Autocenter</p>
				</div>

				{/* Check out things */}

				<div class="basis-1/3 py-8 px-6 border-r border-gray-200 bg ">
					<div className="flex flex-row items-center">
						<div>
							<p className="text-3xl font-bold"> 44</p>
						</div>
					</div>
					<p className="">Form Created</p>
				</div>

				<div class="basis-1/3 py-8 px-6  bg ">
					<div className="flex flex-row items-center">
						<div>
							<p className="text-3xl font-bold"> QWG3032K</p>
						</div>
					</div>
					<p className="">Organization Key</p>
				</div>
			</div>

			<h3 className="mt-8 mb-4 text-gray-400  text-2xl font-medium">
				Key actions
			</h3>

			<div className="flex flex-row">
				<div className="h-[90px] w-[300px] rounded-md card_1 p-4 mr-4">
					<div className="flex flex-row items-center">
						<div>
							<img src={Icon1} alt="" />
						</div>
						<div className="mx-4">
							<p className="text-sm">Create new</p>
							<h6 className="font-medium">Form</h6>
						</div>
						<div className="ml-[100px] mt-8">
							<img src={Arrow} alt="" />
						</div>
					</div>
				</div>

				<div className="h-[90px] w-[300px] rounded-md card_2 p-4 mr-4">
					<div className="flex flex-row items-center">
						<div>
							<img src={Icon2} alt="" />
						</div>
						<div className="mx-4">
							<p className="text-sm">Create new</p>
							<h6 className="font-medium">AutoCenter</h6>
						</div>
						<div className="ml-[100px] mt-8">
							<img src={Arrow} alt="" />
						</div>
					</div>
				</div>

				<div className="h-[90px] w-[300px] rounded-md card_3 p-4 mr-4">
					<div className="flex flex-row items-center">
						<div>
							<img src={Icon3} alt="" />
						</div>
						<div className="mx-4">
							<p className="text-sm">Create new</p>
							<h6 className="font-medium">Dispatch</h6>
						</div>
						<div className="ml-[100px] mt-8">
							<img src={Arrow} alt="" />
						</div>
					</div>
				</div>
			</div>

			<h3 className="mt-8 mb-4 text-gray-400  text-2xl font-medium">
				Activity Log
			</h3>
			<div className="w-[960px] bg-white rounded-md p-4">
				<div>
					<div className="flex flex-row mb-6">
						<div className="w-1/3">
							<p className="font-medium">User</p>
						</div>
						<div className="w-1/3">
							<p className="font-medium">Event</p>
						</div>
						<div className="w-1/3">
							<p className="font-medium">Date/Time</p>
						</div>
					</div>

					<div className="flex flex-row my-4">
						<div className="w-1/3 flex flex-row">
							<img src={Profile} alt="" />
							<p className="font-medium ml-4">Slab Center 1</p>
						</div>
						<div className="w-1/3">
							<p className="active font-medium">Added 500 Agents</p>
						</div>
						<div className="w-1/3">
							<p>02/05/2019 - 10.30pm</p>
						</div>
					</div>
					<hr />

					<div className="flex flex-row my-4">
						<div className="w-1/3 flex flex-row">
							<img src={Profile} alt="" />
							<p className="font-medium ml-4">Slab Center 1</p>
						</div>
						<div className="w-1/3">
							<p className="active font-medium">Added 500 Agents</p>
						</div>
						<div className="w-1/3">
							<p>02/05/2019 - 10.30pm</p>
						</div>
					</div>
					<hr />

					<div className="flex flex-row my-4">
						<div className="w-1/3 flex flex-row">
							<img src={Profile} alt="" />
							<p className="font-medium ml-4">Slab Center 1</p>
						</div>
						<div className="w-1/3">
							<p className="active font-medium">Added 500 Agents</p>
						</div>
						<div className="w-1/3">
							<p>02/05/2019 - 10.30pm</p>
						</div>
					</div>
					<hr />

					<div className="flex flex-row my-4">
						<div className="w-1/3 flex flex-row">
							<img src={Profile} alt="" />
							<p className="font-medium ml-4">Slab Center 1</p>
						</div>
						<div className="w-1/3">
							<p className="active font-medium">Added 500 Agents</p>
						</div>
						<div className="w-1/3">
							<p>02/05/2019 - 10.30pm</p>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default MainMenu;
