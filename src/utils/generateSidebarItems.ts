import { USER_ROLE } from "@/constant/role";
import { DrawerItems, UserRole } from "@/types";

export const drawerItems = (role: UserRole) => {
  const roleMenus: DrawerItems[] = [];
  switch (role) {
    case USER_ROLE.SUPER_ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: "df",
        },
        {
          title: "Manage Users",
          path: `${role}/manage-users`,
          icon: "df",
        }
      );
      break;
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: "df",
        },
        {
          title: "Specialties",
          path: `${role}/specialties`,
          icon: "df",
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: "df",
        },
        {
          title: "Schedules",
          path: `${role}/Schedules`,
          icon: "df",
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: "df",
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: "df",
        }
      );
      break;
    case USER_ROLE.DOCTOR:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: "df",
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: "df",
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: "df",
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: "df",
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: "df",
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: "df",
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
