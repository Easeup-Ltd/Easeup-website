import { Link } from "lucide-react";
type ButtonProps = {
  name: string;// Making 'to' parameter optional
}

function Button({name}:ButtonProps) {
  return <button className="py-2 px-8 bg-foreground rounded-full text-[#EBEBEB]">{name}</button>;
}

export default Button;
