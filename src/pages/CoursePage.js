import React, { useEffect } from "react";

const CoursePage = () => {
    return (
        <div>
            <header style={headerStyles}>
                <div style={logoStyles}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/6/64/University_of_Indonesia_%28UI%29_logo.svg"
                        alt="University Logo"
                        style={{ height: "40px", marginRight: "10px" }}
                    />
                    <h1 style={{ display: "inline", fontSize: "1.2rem" }}>
                        Student Centered E-learning Environment Fakultas Ilmu Komputer
                    </h1>
                </div>
                <div style={userInfoStyles}>
                    <span>User Name - ID Number</span>
                    <img
                        src="https://via.placeholder.com/40"
                        alt="User Avatar"
                        style={{ borderRadius: "50%", marginLeft: "10px" }}
                    />
                </div>
            </header>

            <div style={containerStyles}>
                <aside style={asideStyles}>
                    <div className="section">
                        <h3>Clock</h3>
                        <p>Server: <strong>Wed 00:35:24</strong></p>
                    </div>
                    <div className="section">
                        <h3>Calendar</h3>
                    </div>
                </aside>

                <main style={mainStyles}>
                    <div style={breadcrumbStyles}>
                        Home  My courses  PROG. IK INTERNASIONAL  INT [IK] - Gasal 2024/2025  [KI] Scientific Writing & Research Methodology...
                    </div>
                    <h2>General</h2>
                    <div style={courseInfoStyles}>
                        <h3>Lecturer:</h3>
                        <p>Kung Fu Panda (po@cs.ui.ac.id)</p>
                        <p>Shifu (shifu@cs.ui.ac.id)</p>
                        <h3>Teaching Assistant:</h3>
                        <p>Noodles (noodles@gmail.com)</p>
                        <p>Jade Palace (jade@ui.ac.id)</p>
                    </div>
                    <div style={materialsStyles}>
                        <ul>
                            <li><span>Announcements</span></li>
                            <li><span>Syllabus</span> <span style={doneStatusStyles}>Done</span></li>
                            <li><span>Concept Map of Scientific Writing & Research Method</span> <span style={statusStyles}>Mark as done</span></li>
                            <li><span>LINE Group</span> <span style={statusStyles}>Mark as done</span></li>
                            <li><span>Final Assignment - Mini Research Project</span></li>
                        </ul>
                    </div>
                </main>

                <aside style={quickAccessStyles}>
                    <div className="section">
                        <h3>Latest announcements</h3>
                        <p>(No announcements have been posted yet.)</p>
                    </div>
                    <div className="section">
                        <h3>Upcoming events</h3>
                        <p>There are no upcoming events</p>
                        <a href="#">Go to calendar...</a>
                    </div>
                    <div className="section">
                        <h3>Recent activity</h3>
                        <p>Activity since Monday, 4 November 2024, 12:35 AM</p>
                        <a href="#">Full report of recent activity...</a>
                    </div>
                </aside>
            </div>
        </div>
    );
};

// CSS styles as JS objects
const headerStyles = {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
};

const logoStyles = {
    display: "flex",
    alignItems: "center"
};

const userInfoStyles = {
    display: "flex",
    alignItems: "center"
};

const containerStyles = {
    display: "flex",
    margin: "20px"
};

const asideStyles = {
    width: "20%",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    marginRight: "10px"
};

const mainStyles = {
    flex: 1,
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    marginRight: "10px"
};

const quickAccessStyles = {
    width: "20%",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ddd"
};

const breadcrumbStyles = {
    fontSize: "0.8rem",
    color: "#888",
    marginBottom: "10px"
};

const courseInfoStyles = {
    fontSize: "1rem",
    color: "#333"
};

const materialsStyles = {
    listStyleType: "none",
    paddingLeft: 0
};

const statusStyles = {
    marginLeft: "auto",
    fontSize: "0.8rem",
    padding: "2px 5px",
    borderRadius: "3px",
    cursor: "pointer",
    backgroundColor: "#ffc107",
    color: "#fff"
};

const doneStatusStyles = {
    ...statusStyles,
    backgroundColor: "#28a745"
};

export default CoursePage;
