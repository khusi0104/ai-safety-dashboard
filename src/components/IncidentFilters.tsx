import React from 'react';
import { motion } from 'framer-motion';
import { Search, SortAsc, SortDesc, Filter } from 'lucide-react';

interface IncidentFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  filter: "All" | "Low" | "Medium" | "High";
  setFilter: (value: "All" | "Low" | "Medium" | "High") => void;
  sortOrder: "Newest" | "Oldest";
  setSortOrder: (value: "Newest" | "Oldest") => void;
}

const IncidentFilters: React.FC<IncidentFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  filter,
  setFilter,
  sortOrder,
  setSortOrder
}) => {
  return (
    <div className="filters-container">
      <div className="search-bar">
        <Search className="search-icon" />
        <input
          type="text"
          placeholder="Search incidents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search incidents"
        />
        {searchTerm && (
          <motion.button
            className="clear-search"
            onClick={() => setSearchTerm('')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Clear search"
          >
            ×
          </motion.button>
        )}
      </div>
      
      <div className="filter-controls">
        <div className="filter-group">
          <Filter className="filter-icon" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as "All" | "Low" | "Medium" | "High")}
            aria-label="Filter by severity"
          >
            <option value="All">All Severities</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        
        <div className="filter-group">
          {sortOrder === "Newest" ? (
            <SortDesc className="sort-icon" />
          ) : (
            <SortAsc className="sort-icon" />
          )}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "Newest" | "Oldest")}
            aria-label="Sort order"
          >
            <option value="Newest">Newest First</option>
            <option value="Oldest">Oldest First</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default IncidentFilters;