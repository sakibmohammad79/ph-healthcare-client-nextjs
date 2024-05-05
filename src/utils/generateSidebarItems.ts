import { USER_ROLE } from "@/constant/role";
import { DrawerItems, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const drawerItems = (role: UserRole) => {
  const roleMenus: DrawerItems[] = [];
  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: DashboardIcon,
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: DashboardIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/Schedules`,
          icon: DashboardIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: DashboardIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: DashboardIcon,
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: DashboardIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: DashboardIcon,
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: DashboardIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: DashboardIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: DashboardIcon,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
