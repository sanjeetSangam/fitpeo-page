const PageSectionCard = ({ title, children }: any) => {
	return (
		<div className="bg-layout p-5 rounded-md flex-1">
			{title && <h2 className="text-2xl font-bold">{title}</h2>}
			{children}
		</div>
	);
};

export default PageSectionCard;
