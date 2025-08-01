import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-4">
      <div className="container h-16 border backdrop-blur-3xl flex justify-between items-center">
        <Link to="/">
          <Logo></Logo>
        </Link>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost">
            <Link to="/login">SignIn</Link>
          </Button>
          <Button asChild>
            <Link to="/login">Start For Free</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
