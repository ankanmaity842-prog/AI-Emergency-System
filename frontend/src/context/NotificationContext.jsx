
import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import {
    getNotifications,
    markNotificationAsRead,
    markAllNotificationsAsRead
} from "../services/notifications";

import {
    getAlerts,
    markAlertAsRead
} from "../services/alerts";

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch notifications
    const fetchNotifications = async () => {
        try {
            const data = await getNotifications();

            setNotifications(
                Array.isArray(data) ? data : []
            );

            return data;
        } catch (error) {
            console.error(
                "Failed to fetch notifications:",
                error
            );

            setNotifications([]);
        }
    };

    // Fetch alerts
    const fetchAlerts = async () => {
        try {
            const data = await getAlerts();

            setAlerts(
                Array.isArray(data) ? data : []
            );

            return data;
        } catch (error) {
            console.error(
                "Failed to fetch alerts:",
                error
            );

            setAlerts([]);
        }
    };

    // Load notifications and alerts
    const refreshNotifications = async () => {
        setLoading(true);

        try {
            await Promise.all([
                fetchNotifications(),
                fetchAlerts()
            ]);
        } finally {
            setLoading(false);
        }
    };

    // Mark notification as read
    const readNotification = async (notificationId) => {
        try {
            await markNotificationAsRead(notificationId);

            setNotifications((previous) =>
                previous.map((notification) =>
                    notification.id === notificationId
                        ? {
                              ...notification,
                              is_read: true
                          }
                        : notification
                )
            );
        } catch (error) {
            console.error(
                "Failed to mark notification as read:",
                error
            );
        }
    };

    // Mark alert as read
    const readAlert = async (alertId) => {
        try {
            await markAlertAsRead(alertId);

            setAlerts((previous) =>
                previous.map((alert) =>
                    alert.id === alertId
                        ? {
                              ...alert,
                              is_read: true
                          }
                        : alert
                )
            );
        } catch (error) {
            console.error(
                "Failed to mark alert as read:",
                error
            );
        }
    };

    // Mark all notifications as read
    const readAllNotifications = async () => {
        try {
            await markAllNotificationsAsRead();

            setNotifications((previous) =>
                previous.map((notification) => ({
                    ...notification,
                    is_read: true
                }))
            );
        } catch (error) {
            console.error(
                "Failed to mark all notifications as read:",
                error
            );
        }
    };

    // Number of unread notifications
    const unreadNotifications = notifications.filter(
        (notification) => !notification.is_read
    ).length;

    // Number of unread alerts
    const unreadAlerts = alerts.filter(
        (alert) => !alert.is_read
    ).length;

    // Total unread count
    const unreadCount =
        unreadNotifications + unreadAlerts;

    const value = {
        notifications,
        alerts,

        loading,

        unreadNotifications,
        unreadAlerts,
        unreadCount,

        fetchNotifications,
        fetchAlerts,
        refreshNotifications,

        readNotification,
        readAlert,
        readAllNotifications
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotificationContext = () => {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error(
            "useNotificationContext must be used inside NotificationProvider"
        );
    }

    return context;
};

export default NotificationContext;

