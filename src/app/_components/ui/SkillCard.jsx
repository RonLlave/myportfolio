// components/ui/SkillCard.jsx
import { getSkillIcon } from "../../lib/utils";
import Image from "next/image";
export default function SkillCard({ name, icon }) {
  return (
    <div className="bg-gray-900 px-3 py-2 rounded-md flex items-center gap-2 transition-transform hover:transform hover:scale-105">
      <Image src={icon} alt={name} width={30} height={30} />
      <span className="text-white">{name}</span>
    </div>
  );
}
