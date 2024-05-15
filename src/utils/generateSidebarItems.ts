import { USER_ROLE } from "@/constant/role";
import { DrawerItems, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HealingIcon from "@mui/icons-material/Healing";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicationIcon from "@mui/icons-material/Medication";
import GroupIcon from "@mui/icons-material/Group";
import PaymentIcon from "@mui/icons-material/Payment";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import SummarizeIcon from "@mui/icons-material/Summarize";

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
          icon: GroupIcon,
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
          icon: HealingIcon,
        },
        {
          title: "Doctors",
          path: `${role}/doctors`,
          icon: LocalHospitalIcon,
        },
        {
          title: "Schedules",
          path: `${role}/schedules`,
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: SummarizeIcon,
        },
        {
          title: "Reviews",
          path: `${role}/reviews`,
          icon: StarBorderPurple500Icon,
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
          icon: CalendarMonthIcon,
        },
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: SummarizeIcon,
        }
      );
      break;
    case USER_ROLE.PATIENT:
      roleMenus.push(
        {
          title: "Appointments",
          path: `${role}/appointments`,
          icon: SummarizeIcon,
        },
        {
          title: "Prescriptions",
          path: `${role}/prescriptions`,
          icon: ReceiptLongIcon,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: PaymentIcon,
        }
      );
      break;

    default:
      break;
  }
  return [...roleMenus];
};
