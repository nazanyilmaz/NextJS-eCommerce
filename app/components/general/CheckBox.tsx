import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckBoxProp {
  id: string;
  register: UseFormRegister<FieldValues>;
  label: string;
}

const CheckBox: React.FC<CheckBoxProp> = ({ id, register, label }) => {
  return (
    <div className="flex items-center gap-2 my-1 text-slate-600">
      <input type="checkbox" {...register(id)} />
      <label htmlFor="{id}" className="font-bold">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
