import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

import Dashboard from "../pages/Dashboard/Dashboard";
import Emergency from "../pages/Emergency/Emergency";
import History from "../pages/History/History";
import Reports from "../pages/Reports/Reports";
import Profile from "../pages/Profile/Profile";
import Notifications from "../pages/Notifications/Notifications";

import ChatBox from "../components/ChatBox/ChatBox";

import LearnHub from "../pages/Learn/LearnHub/LearnHub";
import Medical from "../pages/Learn/Medical/Medical";
import Disaster from "../pages/Learn/Disaster/Disaster";
import EmergencyPreparedness from "../pages/Learn/EmergencyPreparedness/EmergencyPreparedness";
import FirstAid from "../pages/Learn/FirstAid/FirstAid";
import Healthcare from "../pages/Learn/Healthcare/Healthcare";
import SafetyAwareness from "../pages/Learn/SafetyAwareness/SafetyAwareness";

import AdminDashboard from "../pages/Admin/Dashboard/AdminDashboard";
import AdminEmergencies from "../pages/Admin/Emergencies/AdminEmergencies";
import AdminAlerts from "../pages/Admin/Alerts/AdminAlerts";
import AdminUsers from "../pages/Admin/Users/AdminUsers";
import AdminReports from "../pages/Admin/Reports/AdminReports";

import "./AppRoutes.css";

const WithNavbar = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

const ProtectedLayout = ({ children }) => {
    return (
        <div className="protected-layout">
            <Navbar />

            <Sidebar />

            <main className="protected-main">
                {children}
            </main>
        </div>
    );
};

const AppRoutes = () => {
    return (
        <Routes>

            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            <Route
                path="/learn"
                element={
                    <WithNavbar>
                        <LearnHub />
                    </WithNavbar>
                }
            />

            <Route
                path="/learn/medical"
                element={
                    <WithNavbar>
                        <Medical />
                    </WithNavbar>
                }
            />

            <Route
                path="/learn/disaster"
                element={
                    <WithNavbar>
                        <Disaster />
                    </WithNavbar>
                }
            />

            <Route
                path="/learn/emergency-preparedness"
                element={
                    <WithNavbar>
                        <EmergencyPreparedness />
                    </WithNavbar>
                }
            />

            <Route
                path="/learn/first-aid"
                element={
                    <WithNavbar>
                        <FirstAid />
                    </WithNavbar>
                }
            />

            <Route
                path="/learn/healthcare"
                element={
                    <WithNavbar>
                        <Healthcare />
                    </WithNavbar>
                }
            />

            <Route
                path="/learn/safety-awareness"
                element={
                    <WithNavbar>
                        <SafetyAwareness />
                    </WithNavbar>
                }
            />

            <Route element={<ProtectedRoute />}>

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedLayout>
                            <Dashboard />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/emergency"
                    element={
                        <ProtectedLayout>
                            <Emergency />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/history"
                    element={
                        <ProtectedLayout>
                            <History />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/reports"
                    element={
                        <ProtectedLayout>
                            <Reports />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/profile"
                    element={
                        <ProtectedLayout>
                            <Profile />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/notifications"
                    element={
                        <ProtectedLayout>
                            <Notifications />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/chat"
                    element={
                        <ProtectedLayout>
                            <ChatBox />
                        </ProtectedLayout>
                    }
                />

            </Route>

            <Route
                element={
                    <ProtectedRoute
                        allowedRoles={["admin"]}
                    />
                }
            >

                <Route
                    path="/admin"
                    element={
                        <Navigate
                            to="/admin/dashboard"
                            replace
                        />
                    }
                />

                <Route
                    path="/admin/dashboard"
                    element={<AdminDashboard />}
                />

                <Route
                    path="/admin/emergencies"
                    element={<AdminEmergencies />}
                />

                <Route
                    path="/admin/alerts"
                    element={<AdminAlerts />}
                />

                <Route
                    path="/admin/users"
                    element={<AdminUsers />}
                />

                <Route
                    path="/admin/reports"
                    element={<AdminReports />}
                />

            </Route>

            <Route
                path="*"
                element={
                    <Navigate
                        to="/"
                        replace
                    />
                }
            />

        </Routes>
    );
};

export default AppRoutes;