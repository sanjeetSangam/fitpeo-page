import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { SiShopify } from "react-icons/si";
import IconWithBackground from "../components/IconWithBackground";
import StatsCard from "../components/StatsCard";
// import Progress from "react-circle-progress-bar";
import { CircularProgressbar } from "react-circular-progressbar";
import BarChartComponent from "../components/BarChartComponent";
import PageSectionCard from "../components/PageSectionCard";
import { Button } from "@mui/material";
import { BiDish, BiTargetLock } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { GiHamburger } from "react-icons/gi";
import TableComponent from "../components/TableComponent";
import RatingCard, { RatingCardProps } from "../components/RatingCard";

const Dashboard = () => {
	return (
		<section className="dashboard-container p-10 w-full h-full ">
			<h1 className=" font-bold text-3xl">Dashboard</h1>

			<div className="dashboard-layout mt-10 h-full">
				<div className="top-stats-header flex gap-4 w-full flex-wrap">
					{TOP_PICKS.map((item) => {
						return (
							<StatsCard key={item.title}>
								<div className="stats-icon">
									<IconWithBackground
										icon={SiShopify}
										backgroundColorClass="bg-secondary"
										iconColorClass="bg-secondary"
										iconSize={30}
										backgroundSize="w-[3rem] h-[3rem]"
									/>
									<h3>{item.title}</h3>
								</div>

								<div className="top-pics-datas mt-3 flex items-center justify-between">
									<h1 className="text-3xl font-bold ">{item.statsNumber}</h1>
									<p
										className={`${
											item.hike > 0 ? "text-light-green" : "text-light-red"
										} font-bold h-max flex items-center`}
									>
										{item.hike > 0 ? (
											<IconWithBackground
												icon={IoMdArrowDropup}
												backgroundColorClass="!h-auto !w-auto"
											/>
										) : (
											<IconWithBackground
												backgroundColorClass="!h-auto !w-auto"
												icon={IoMdArrowDropdown}
											/>
										)}
										{item.hike}%
									</p>
								</div>
							</StatsCard>
						);
					})}
				</div>
				<div className="net-profit">
					<StatsCard>
						<div className="flex justify-between">
							<div className="top-pics-datas mt-3 flex flex-col justify-around">
								<h2>Net Profit</h2>
								<h1 className="text-3xl font-bold ">$6759.25</h1>
								<p className={"text-light-green font-bold h-max flex items-center"}>
									<IconWithBackground
										icon={IoMdArrowDropup}
										backgroundColorClass="!h-auto !w-auto"
									/>
									{3}%
								</p>
							</div>
							<div className="progress w-[7rem] h-[7rem]">
								<CircularProgressbar value={70} text="70%" strokeWidth={10} />
							</div>
						</div>
					</StatsCard>
				</div>
				<div className="activity relative">
					<PageSectionCard title="Activity">
						<div className="absolute top-10 right-10">
							<Button
								variant="contained"
								sx={{
									backgroundColor: "gray",
									color: "white",
									borderRadius: "1rem",
								}}
								endIcon={<IoMdArrowDropdown />}
							>
								Send
							</Button>
						</div>
						<BarChartComponent />
					</PageSectionCard>
				</div>
				<div className="goals-all">
					<StatsCard>
						<div className="goals flex items-center justify-between ">
							<div className="flex items-center gap-4">
								<IconWithBackground
									icon={BiTargetLock}
									backgroundColorClass="bg-red "
									iconColorClass="text-light-red"
									backgroundSize="w-[5rem] h-[5rem]"
								/>
								<h2 className="title text-xl">Goals</h2>
							</div>
							<IconWithBackground
								icon={RiArrowRightSLine}
								backgroundColorClass="bg-gray"
							/>
						</div>
						<div className="goals flex items-center justify-between mt-5">
							<div className="flex items-center gap-4">
								<IconWithBackground
									icon={GiHamburger}
									backgroundColorClass="bg-dark-secondary "
									iconColorClass="text-secondary"
									backgroundSize="w-[5rem] h-[5rem]"
								/>
								<h2 className="title text-xl">Popular Dishes</h2>
							</div>
							<IconWithBackground
								icon={RiArrowRightSLine}
								backgroundColorClass="bg-gray"
							/>
						</div>
						<div className="goals flex items-center justify-between mt-5">
							<div className="flex items-center gap-4">
								<IconWithBackground
									icon={BiDish}
									backgroundColorClass="bg-light-green "
									iconColorClass="text-green"
									backgroundSize="w-[5rem] h-[5rem]"
								/>
								<h2 className="title text-xl">Menus</h2>
							</div>
							<IconWithBackground
								icon={RiArrowRightSLine}
								backgroundColorClass="bg-gray"
							/>
						</div>
					</StatsCard>
				</div>
				<div className="recent-orders w-full">
					<PageSectionCard title="Recent Orders">
						<TableComponent />
					</PageSectionCard>
				</div>
				<div className="customer-feedback h-auto sm:max-h-[31rem] overflow-y-auto">
					<PageSectionCard title="Customer's Feedback">
						{ratingCards.map((ratingCard, index: number) => {
							return (
								<section key={ratingCard.username}>
									{index !== 0 && <hr className="text-gray" />}
									<RatingCard
										username={ratingCard.username}
										avatar={ratingCard.avatar}
										info={ratingCard.info}
										rating={ratingCard.rating}
									/>
								</section>
							);
						})}
					</PageSectionCard>
				</div>
			</div>
		</section>
	);
};

export default Dashboard;

const TOP_PICKS = [
	{
		title: "Total Orders",
		statsNumber: "75",
		hike: 3,
	},
	{
		title: "Total Delivered",
		statsNumber: "70",
		hike: -3,
	},
	{
		title: "Total Cancelled",
		statsNumber: "5",
		hike: 3,
	},
	{
		title: "Total Revenue",
		statsNumber: "$12k",
		hike: -3,
	},
];

const ratingCards: RatingCardProps[] = [
	{
		username: "john_doe",
		avatar: "https://example.com/avatars/john_doe.jpg",
		rating: 4.5,
		info: "John is a dedicated member, consistently providing quality feedback and engaging in thoughtful discussions. His positive attitude and helpful nature make him a valued community member.",
	},
	{
		username: "jane_smith",
		avatar: "https://example.com/avatars/jane_smith.jpg",
		rating: 4.8,
		info: "Jane is always helpful, offering insightful comments and guidance. Her enthusiasm and willingness to assist new members make her a highly respected and appreciated member of our community.",
	},
	{
		username: "alice_jones",
		avatar: "https://example.com/avatars/alice_jones.jpg",
		rating: 4.2,
		info: "Alice regularly contributes valuable feedback and engages actively in discussions. Her thoughtful insights and positive demeanor greatly enrich our community. A highly respected member.",
	},
	{
		username: "bob_brown",
		avatar: "https://example.com/avatars/bob_brown.jpg",
		rating: 3.9,
		info: "Bob is a good member, known for his constructive feedback and occasional valuable contributions. While not the most active, his input is always appreciated and respected.",
	},
	{
		username: "charlie_black",
		avatar: "https://example.com/avatars/charlie_black.jpg",
		rating: 4.0,
		info: "Charlie is an engaged member, often participating in discussions and providing useful insights. His balanced and thoughtful comments are highly valued within our community.",
	},
	{
		username: "diana_green",
		avatar: "https://example.com/avatars/diana_green.jpg",
		rating: 4.7,
		info: "Diana is a highly active member, consistently offering helpful advice and insightful comments. Her friendly and supportive nature makes her a cherished member of our community.",
	},
	{
		username: "edward_white",
		avatar: "https://example.com/avatars/edward_white.jpg",
		rating: 4.3,
		info: "Edward is known for his thoughtful feedback and active participation in discussions. His constructive comments and positive attitude make him a respected member of our community.",
	},
	{
		username: "frank_red",
		avatar: "https://example.com/avatars/frank_red.jpg",
		rating: 3.8,
		info: "Frank is a reliable member, providing useful feedback and occasionally contributing to discussions. His input is valued, although he could engage more frequently with the community.",
	},
	{
		username: "grace_blue",
		avatar: "https://example.com/avatars/grace_blue.jpg",
		rating: 4.6,
		info: "Grace is an enthusiastic member, always eager to help others and share her insights. Her positive energy and helpful contributions make her a beloved member of our community.",
	},
	{
		username: "henry_yellow",
		avatar: "https://example.com/avatars/henry_yellow.jpg",
		rating: 4.1,
		info: "Henry is a dedicated member, known for his balanced feedback and active participation. His constructive comments and willingness to help others are greatly appreciated.",
	},
];
