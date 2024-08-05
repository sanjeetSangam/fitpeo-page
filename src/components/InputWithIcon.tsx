import React from "react";
import { IconType } from "react-icons";

interface InputWithIconProps {
	icon: IconType;
	containerClasses?: string;
	iconClasses?: string;
	inputClasses?: string;
	iconSize?: number;
	placeholder?: string;
	type?: string;
	[key: string]: any;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
	icon: Icon,
	containerClasses = "",
	iconClasses = "",
	inputClasses = "",
	iconSize = 24,
	placeholder,
	type = "text",
	...props
}) => {
	return (
		<div className={`relative flex items-center ${containerClasses}`}>
			{Icon && (
				<Icon className={`absolute left-5 ${iconClasses}`} style={{ fontSize: iconSize }} />
			)}
			<input
				type={type}
				placeholder={placeholder}
				className={`w-full h-full ${inputClasses} focus:outline-none `}
				style={{
					paddingLeft: Icon !== null ? `${iconSize + 12}px` : "12px",
				}}
				{...props}
			/>
		</div>
	);
};

export default InputWithIcon;
