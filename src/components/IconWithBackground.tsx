import React from "react";
import { IconType } from "react-icons";

interface IconWithBackgroundProps {
	icon: IconType;
	backgroundColorClass?: string;
	iconColorClass?: string;
	iconSize?: number;
	backgroundSize?: string;
	dotColorClass?: string;
	dotSize?: string;
	dotPosition?: string;
	notification?: boolean;
	[key: string]: any;
}

const IconWithBackground: React.FC<IconWithBackgroundProps> = ({
	icon: Icon,
	backgroundColorClass = "bg-gray-400",
	iconColorClass = "text-white",
	iconSize = 24,
	backgroundSize = "w-10 h-10",
	dotColorClass = "bg-secondary",
	dotSize = "w-2 h-2 ",
	dotPosition = "top-3 right-3",
	notification = false,
	...props
}) => {
	return (
		<div
			className={`relative flex items-center justify-center rounded-full ${backgroundColorClass} ${backgroundSize}`}
			{...props}
		>
			<Icon className={`${iconColorClass}`} size={iconSize} />
			{notification && (
				<div
					className={`absolute ${dotPosition} ${dotSize} rounded-full ${dotColorClass} flex items-center justify-center text-white text-xs font-semibold`}
				></div>
			)}
		</div>
	);
};

export default IconWithBackground;
