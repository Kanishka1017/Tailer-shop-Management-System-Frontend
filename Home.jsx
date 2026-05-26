import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // Sample Data
  const stats = [
    { title: "Total Orders", value: "128", icon: "📋", color: "#f8a5c2", path: "/orders" },
    { title: "Customers", value: "85", icon: "👥", color: "#f9ca9a", path: "/customers" },
    { title: "Appointments", value: "24", icon: "📅", color: "#a8d8ea", path: "/appointments" },
    { title: "Employees", value: "12", icon: "👤", color: "#a8e6cf", path: "/employees" },
    { title: "Pending Orders", value: "18", icon: "⏳", color: "#ffd3b6", path: "/orders" },
    { title: "Revenue", value: "Rs. 125,000", icon: "💰", color: "#b8b8ff", path: "/payments" },
    { title: "Materials", value: "45 Items", icon: "🧶", color: "#ffd1dc", path: "/materials" },
    { title: "Measurements", value: "63", icon: "📏", color: "#c7f2a4", path: "/measurements" },
  ];

  const menuItems = [
    { title: "Orders", icon: "📋", path: "/orders", desc: "Manage all orders" },
    { title: "Customers", icon: "👥", path: "/customers", desc: "Customer details" },
    { title: "Appointments", icon: "📅", path: "/appointments", desc: "Schedule appointments" },
    { title: "Employees", icon: "👤", path: "/employees", desc: "Staff management" },
    { title: "Measurements", icon: "📏", path: "/measurements", desc: "Customer measurements" },
    { title: "Payments", icon: "💳", path: "/payments", desc: "Payment records" },
    { title: "Materials", icon: "🧶", path: "/materials", desc: "Stock management" },
    { title: "Reports", icon: "📊", path: "/reports", desc: "View reports" },
  ];

  // Recent Orders
  const recentOrders = [
    { id: "ORD-001", customer: "Kamala Perera", service: "Dress Stitching", status: "In Progress", price: "Rs. 3,500" },
    { id: "ORD-002", customer: "Nimal Silva", service: "Suit Tailoring", status: "Pending", price: "Rs. 8,500" },
    { id: "ORD-003", customer: "Sandya Fernando", service: "Alterations", status: "Completed", price: "Rs. 1,500" },
    { id: "ORD-004", customer: "Kumari Jayawardena", service: "Blouse Stitching", status: "Pending", price: "Rs. 2,000" },
  ];

  // Today's Appointments
  const todayApts = [
    { time: "09:00 AM", customer: "Kamala Perera", service: "Dress Fitting" },
    { time: "11:00 AM", customer: "Nimal Silva", service: "Measurement" },
    { time: "02:00 PM", customer: "Sandya Fernando", service: "Alteration Check" },
  ];

  const getStatusStyle = (status) => {
    switch(status) {
      case "Pending": return { bg: "#fff3cd", color: "#856404" };
      case "In Progress": return { bg: "#d1ecf1", color: "#0c5460" };
      case "Completed": return { bg: "#d4edda", color: "#155724" };
      default: return { bg: "#eee", color: "#333" };
    }
  };

  return (
    <div className="home-container">

      {/* Header */}
      <div className="header">
        <div className="header-left">
          <h1>🧵 SAKUNI</h1>
          <p>Fashion Management System</p>
        </div>
        <div className="header-right">
          <span className="date-text">
            📅 {new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <button className="logout-btn" onClick={() => navigate("/")}>
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Welcome */}
      <div className="welcome">
        <h2>👋 Welcome Back!</h2>
        <p>Here's what's happening at SAKUNI today.</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div
            className="stat-card"
            key={index}
            onClick={() => navigate(stat.path)}
            style={{ borderLeft: `5px solid ${stat.color}` }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section */}
      <div className="middle-section">

        {/* Recent Orders */}
        <div className="section-card">
          <div className="section-header">
            <h3>📋 Recent Orders</h3>
            <button onClick={() => navigate("/orders")}>View All →</button>
          </div>
          <table className="mini-table">
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Status</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, i) => (
                <tr key={i}>
                  <td><strong>{order.id}</strong></td>
                  <td>{order.customer}</td>
                  <td>{order.service}</td>
                  <td>
                    <span className="mini-status" style={{
                      background: getStatusStyle(order.status).bg,
                      color: getStatusStyle(order.status).color
                    }}>
                      {order.status}
                    </span>
                  </td>
                  <td><strong>{order.price}</strong></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Today's Appointments */}
        <div className="section-card">
          <div className="section-header">
            <h3>📅 Today's Appointments</h3>
            <button onClick={() => navigate("/appointments")}>View All →</button>
          </div>
          <div className="apt-list">
            {todayApts.map((apt, i) => (
              <div className="apt-item" key={i}>
                <div className="apt-time">{apt.time}</div>
                <div className="apt-details">
                  <strong>{apt.customer}</strong>
                  <p>{apt.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Quick Access Menu */}
      <h3 className="menu-title">⚡ Quick Access</h3>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div className="menu-card" key={index} onClick={() => navigate(item.path)}>
            <span className="menu-icon">{item.icon}</span>
            <p className="menu-name">{item.title}</p>
            <p className="menu-desc">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;