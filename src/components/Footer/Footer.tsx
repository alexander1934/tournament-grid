import useTheme from "../../hooks/useTheme";
import cn from "classnames";

const Footer = () => {

  const {type} = useTheme();

  return <footer className={cn("flex items-center w-full h-16 justify-center", {
    "bg-gray-600 text-white": type === "dark"
  })}>
    Created by &copy;Alexander Kovalenko
  </footer>
}

export default Footer;