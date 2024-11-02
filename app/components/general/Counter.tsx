import { CardProductProps } from "../detail/DetailClient";

interface CounterProps {
  cardProduct: CardProductProps;
  increaseFun: () => void;
  decreaseFun: () => void;
}

const Counter: React.FC<CounterProps> = ({
  cardProduct,
  increaseFun,
  decreaseFun,
}) => {
  const buttonStyle =
    "w-8 h-8 rounded-md border flex items-center justify-center cursor-pointer text-lg shadow-lg hover:bg-slate-200 transition-all duration-300";
  return (
    <div className="flex items-center gap-3">
      <div className={buttonStyle} onClick={decreaseFun}>
        -
      </div>
      <div className="text-lg md:text-xl">{cardProduct.quantity}</div>
      <div className={buttonStyle} onClick={increaseFun}>
        +
      </div>
    </div>
  );
};

export default Counter;
