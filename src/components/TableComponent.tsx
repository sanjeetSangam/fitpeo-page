import { Avatar } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface CustomerType {
	name: string;
	avatarUrl: string;
}

function createData(customer: CustomerType, order_number: number, amount: number, status: boolean) {
	return { customer, order_number, amount, status };
}

const rows = [
	createData({ name: "Frozen yoghurt", avatarUrl: "" }, 159, 6.0, true),
	createData({ name: "Ice cream sandwich", avatarUrl: "" }, 237, 9.0, false),
	createData({ name: "Eclair", avatarUrl: "" }, 262, 16.0, true),
	createData({ name: "Cupcake", avatarUrl: "" }, 305, 3.7, false),
	createData({ name: "Gingerbread", avatarUrl: "" }, 356, 16.0, true),
];

const TableComponent = () => {
	return (
		<TableContainer>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell align="left">Customer</TableCell>
						<TableCell align="center">Order No.</TableCell>
						<TableCell align="center">Amount</TableCell>
						<TableCell align="center">Status</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.customer.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell
								align="left"
								sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
							>
								<Avatar src={row.customer.avatarUrl} /> {row.customer.name}
							</TableCell>
							<TableCell align="center">{row.order_number}</TableCell>
							<TableCell align="center">{row.amount}</TableCell>
							<TableCell align="center">
								{row.status ? (
									<Badges title="Delivered" variant="completed" />
								) : (
									<Badges title="Pending" />
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default TableComponent;

const Badges = ({ variant, title }: any) => {
	const style = variant === "completed" ? "bg-green text-light-green" : "bg-red text-light-red";
	return <div className={`rounded-md m-auto text-center px-1 w-max ${style}`}> {title} </div>;
};
