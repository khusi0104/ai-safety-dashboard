import { useState } from "react";
import { Incident } from "./types/incident";
import { initialIncidents } from "./types/incident";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import DashboardStats from "./components/DashboardStats";
import IncidentFilters from "./components/IncidentFilters";
import IncidentCard from "./components/IncidentCard";
import IncidentForm from "./components/IncidentForm";

// Styles
import "./styles/App.css";

function App() {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [filter, setFilter] = useState<"All" | "Low" | "Medium" | "High">("All");
  const [sortOrder, setSortOrder] = useState<"Newest" | "Oldest">("Newest");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleExpand = (id: number) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const handleSubmitIncident = (newIncidentData: Omit<Incident, 'id'>) => {
    const newIncident: Incident = {
      id: incidents.length + 1,
      ...newIncidentData
    };

    setIncidents([newIncident, ...incidents]);
  };

  const filteredIncidents = incidents
    .filter((incident) =>
      filter === "All" ? true : incident.severity === filter
    )
    .filter((incident) =>
      incident.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const sortedIncidents = [...filteredIncidents].sort((a, b) =>
    sortOrder === "Newest"
      ? new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
      : new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
  );

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <ToastContainer 
        position="top-center" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />

      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container">
        <div className="dashboard-header">
          <h1>AI Safety Incident Dashboard</h1>
          <p className="dashboard-subtitle">
            Monitor and manage AI safety incidents in real-time
          </p>
        </div>

        <DashboardStats incidents={incidents} />

        <IncidentFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filter={filter}
          setFilter={setFilter}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <section className="incident-list">
          <h2 className="section-title">
            <span>Incident Reports</span> 
            <span className="badge count">{sortedIncidents.length}</span>
          </h2>
          
          {sortedIncidents.length > 0 ? (
            sortedIncidents.map((incident) => (
              <IncidentCard
                key={incident.id}
                incident={incident}
                isExpanded={expandedId === incident.id}
                toggleExpand={toggleExpand}
              />
            ))
          ) : (
            <div className="no-incidents">
              <p>No incidents found matching your criteria</p>
            </div>
          )}
        </section>

        <IncidentForm onSubmit={handleSubmitIncident} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
