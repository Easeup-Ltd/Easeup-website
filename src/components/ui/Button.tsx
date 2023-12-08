import { Link } from "lucide-react";
type ButtonProps = {
  name: string;// Making 'to' parameter optional
}

function Button({name}:ButtonProps) {
  return <button className="py-3 px-10 lg:px-12 font-medium bg-foreground rounded-full text-[#EBEBEB]">{name}</button>;
}

export default Button;
