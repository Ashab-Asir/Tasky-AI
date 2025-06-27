import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthSyncPage = () => {
  const navigate = useNavigate();
  const { isSignedIn, isLoaded, userId } = useAuth();
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    if (!isSignedIn) {
      if (!isSignedIn) {
        if (localStorage.getItem("clerkUserId")) {
          localStorage.removeItem("clerkUserId");
        }
      }
      navigate("/");
      return;
    }
    if (isSignedIn) {
      localStorage.setItem("clerkUserId", userId);
      navigate("/app/inbox");
    }
  }, [isLoaded, isSignedIn, userId, navigate]);
  return <div>fdj</div>;
};

export default AuthSyncPage;
