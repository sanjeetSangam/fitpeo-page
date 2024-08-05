import { Avatar, Rating } from "@mui/material";
import { MdOutlineStarPurple500 } from "react-icons/md";

export interface RatingCardProps {
	username: string;
	avatar: string;
	rating: number;
	info: string;
}

const RatingCard = ({ username = "", avatar = "", rating = 0, info = "" }: RatingCardProps) => {
	return (
		<div className="rating-card py-4">
			<div className="user-info flex items-center gap-3 mb-2">
				<Avatar src={avatar} />
				{username.split("_").join(" ").toUpperCase()}
			</div>
			<Rating
				name="read-only"
				value={rating}
				readOnly
				emptyIcon={<MdOutlineStarPurple500 style={{ opacity: 0.55 }} fontSize="inherit" />}
			/>
			<p className="rating-content text-light-gray mt-2 text-sm line-clamp-5">{info}</p>
		</div>
	);
};

export default RatingCard;
