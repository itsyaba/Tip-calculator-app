import { useState } from "react";
import iconDollar from "../../assets/icon-dollar.svg";
import iconPerson from "../../assets/icon-person.svg";

interface Props {
  totalAmount: number | undefined;
  tipAmount: number | undefined;
  numberOfPeople: number | undefined;
  setTotalAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setTipAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function BillCalculator({
  totalAmount,
  tipAmount,
  numberOfPeople,
  setTipAmount,
  setTotalAmount,
  setNumberOfPeople,
}: Props) {
  const [TipList] = useState([5, 10, 15, 25, 50]);
  const [customTip, setCustomTip] = useState<number>();
  const handleTotalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : undefined;
    // console.log(typeof value);
    setTotalAmount(value);
  };

  const handelPersonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : undefined;
    // console.log(typeof value);
    setNumberOfPeople(value);
  };

  const handelTipChange = (num: number) => {
    setTipAmount(num);
  };

    // console.log(tipAmount);

  const handelCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : undefined;
    // console.log(typeof value);
    setCustomTip(value); 
    if (customTip) {
      setTipAmount(customTip)
    }
  };

  return (
    <div className="text-Darkgrayishcyan flex flex-col items-start justify-between mr-8">
      <form className="w-full">
        <h1 className="mb-4">Bill</h1>
        <div className="flex gap-2 items-center border-White border-2 hover:border-strongcyan rounded-xl p-1 bg-Lightgrayishcyan ">
          <img src={iconDollar} alt="Dollar" className="pl-2" />
          <input
            type="number"
            placeholder="0"
            required
            min={1}
            className="placeholder:text-right pr-4 focus:outline-none active:border-none p-2 w-full bg-transparent "
            value={totalAmount}
            onChange={(e) => handleTotalChange(e)}
          />
        </div>
      </form>
      <div className="">
        <h1 className="text-base mb-4">Select Tip %</h1>
        <div className="grid grid-cols-3 gap-2">
          {TipList.map((number) => (
            <button
              className="bg-Verydarkcyan mr-4 text-White px-10 py-2 rounded-md text-xl focus:bg-Darkgrayishcyan transition-all"
              key={number}
              onClick={() => handelTipChange(number)}
            >
              {number}%
            </button>
          ))}
          <input
            type="number"
            placeholder="Custom"
            className="placeholder:text-2xl w-11/12 tex"
            value={customTip}
            onChange={(e) => handelCustomTip(e)}
          />
        </div>
      </div>
      <form className="w-full">
        <h1 className="mb-4">Number of People</h1>
        <div className="flex gap-2 items-center border-White border-2 hover:border-strongcyan rounded-xl p-1 bg-Lightgrayishcyan ">
          <img src={iconPerson} alt="Person" className="pl-2" />
          <input
            type="number"
            placeholder="0"
            required
            min={1}
            className="placeholder:text-right pr-4 focus:outline-none active:border-none p-2 w-full bg-transparent "
            value={numberOfPeople}
            onChange={(e) => handelPersonChange(e)}
          />
        </div>
      </form>
    </div>
  );
}
