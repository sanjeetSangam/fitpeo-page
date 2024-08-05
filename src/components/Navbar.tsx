import { Avatar } from "@mui/material";
import { CiMail } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import IconWithBackground from "./IconWithBackground";
import InputWithIcon from "./InputWithIcon";

const Navbar = () => {
	return (
		<nav className="bg-layout flex flex-col md:flex-row items-center md:items-start w-full py-4 px-5 gap-4 sticky top-0">
			<div className="nav-content flex flex-col md:flex-row justify-between w-full gap-4">
				<InputWithIcon
					containerClasses="w-full md:w-[20rem]"
					type="text"
					icon={FiSearch}
					placeholder="Search"
					inputClasses="bg-gray p-2 !pl-[3rem] rounded-md "
					iconSize={20}
					iconClasses=""
				/>
				<div className="nav-actions flex items-center justify-center gap-2 ">
					<IconWithBackground
						icon={CiMail}
						backgroundColorClass="bg-gray"
						iconColorClass=""
						iconSize={24}
					/>
					<IconWithBackground
						icon={MdOutlineSettings}
						backgroundColorClass="bg-gray"
						iconColorClass=""
						iconSize={24}
					/>
					<IconWithBackground
						icon={IoMdNotificationsOutline}
						backgroundColorClass="bg-gray"
						iconColorClass=""
						iconSize={24}
						notification
					/>
					<Avatar
						src="https://media.licdn.com/dms/image/D5603AQGR8w2SFJUFuQ/profile-displayphoto-shrink_200_200/0/1721791941043?e=2147483647&v=beta&t=O3z9HR2xG8eY0jUcteKxhiXNRVpMSPvQ864jsrwL_a0"
						sx={{ width: 40, height: 40 }}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
