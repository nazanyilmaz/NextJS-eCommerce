import { IconType } from "react-icons";

interface ChoiceInputProps {
  text: string;
  icon: IconType;
  selected?: boolean;
  onClick: (value: string) => void;
}

const ChoiceInput: React.FC<ChoiceInputProps> = ({
  text,
  icon: Icon,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => {
        onClick(text);
      }}
      className={`flex items-center gap-2 justify-center my-2 h-16 border py-2 px-4 rounded-full cursor-pointer w-[150px] ${selected} ? "border-black " : "border-gray-200"`}
    >
      <Icon size={25} />
      <span className="font-semibold text-slate-700 text-lg">{text}</span>
    </div>
  );
};

export default ChoiceInput;
