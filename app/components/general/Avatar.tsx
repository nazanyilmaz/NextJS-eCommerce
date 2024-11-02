import { RxAvatar } from "react-icons/rx";
interface AvatarProps {
  image?: string;
}
const Avatar: React.FC<AvatarProps> = ({ image }) => {
  if (image)
    return <img src={image} alt="Avatar" className="w-10 h-10 rounded-full" />;
  return (
    <div className="w-10 h-10 rounded-full bg-slate-400">
      <RxAvatar size={40} />
    </div>
  );
};

export default Avatar;
