import { logOutUser } from "@/services/actions/logOutUser";
import { getuserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();
  const userInfo = getuserInfo();

  const handleLogOut = () => {
    logOutUser(router);
  };
  return (
    <>
      {userInfo?.userId ? (
        <Button onClick={handleLogOut} color="error">
          Logout
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
