import { CiWallet } from "react-icons/ci";
import { FaBlogger } from "react-icons/fa";
import { LuClipboardCheck } from "react-icons/lu";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { TbShoppingBagCheck } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import IconWithBackground from "./IconWithBackground";

const Sidebar = () => {
	return (
		<section className="sidebar-container bg-layout w-max flex flex-col justify-between sticky top-0 left-0 h-full z-10">
			<div className="sidebar-nav-menus py-2 flex flex-col gap-5">
				<div className="w-[6rem] px-5 nav-logo flex justify-center items-center">
					<IconWithBackground
						icon={FaBlogger}
						iconColorClass="text-secondary"
						iconSize={35}
					/>
				</div>
				<div className="relative side-menu-item px-5  h-max">
					<div className="absolute inset-y-0 left-0 w-1 h-full bg-secondary rounded-full"></div>
					<IconWithBackground
						icon={TiHome}
						iconSize={30}
						iconColorClass="text-secondary"
					/>{" "}
				</div>
				<div className="relative side-menu-item px-5 h-max">
					<IconWithBackground icon={MdOutlineAnalytics} iconSize={30} iconColorClass="" />{" "}
				</div>
				<div className="relative side-menu-item px-5 h-max">
					<IconWithBackground icon={LuClipboardCheck} iconSize={30} iconColorClass="" />{" "}
				</div>
				<div className="relative side-menu-item px-5 h-max">
					<IconWithBackground icon={CiWallet} iconSize={30} iconColorClass="" />{" "}
				</div>
				<div className="relative side-menu-item px-5 h-max">
					<IconWithBackground icon={TbShoppingBagCheck} iconSize={30} iconColorClass="" />{" "}
				</div>
			</div>

			<div className="sidebar-menu-item-logout py-2 flex flex-col gap-5 mb-10">
				<div className="relative side-menu-item px-5 h-max">
					<IconWithBackground icon={RiLogoutCircleRLine} iconSize={30} />
				</div>
			</div>
		</section>
	);
};

export default Sidebar;
