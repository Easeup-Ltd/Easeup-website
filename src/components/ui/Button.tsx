import {motion} from "framer-motion"
type ButtonProps = {
  name: string;// Making 'to' parameter optional
}

function Button({name}:ButtonProps) {
  return <motion.button whileHover={{scale:1.1}} className="py-3 px-10 lg:px-12 font-medium bg-foreground rounded-full text-[#EBEBEB]">{name}</motion.button>;
}

export default Button;
