import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

const App = () => {
	return (
		<div className="app-container bg-body text-primary h-screen flex">
			<Sidebar />
			<div className="main_layout flex h-full flex-col w-full">
				<Navbar />
				<div className="overflow-y-auto">
					<Dashboard />
				</div>
			</div>
		</div>
	);
};

export default App;
