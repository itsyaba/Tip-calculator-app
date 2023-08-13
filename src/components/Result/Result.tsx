// import React from 'react'
import { useEffect, useState } from "react";

interface Props {
  totalAmount: number | undefined;
  tipAmount: number | undefined;
  numberOfPeople: number | undefined;
  setTotalAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setTipAmount: React.Dispatch<React.SetStateAction<number | undefined>>;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<number | undefined>>;
}

export default function Result({
  totalAmount,
  tipAmount,
  numberOfPeople,
  setTipAmount , 
  setTotalAmount , 
  setNumberOfPeople
}: Props) {
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(parseFloat(0).toFixed(2));
  const [totalAmountPerPerson, setTotalAmountPerPerson] = useState<number>(parseFloat(0).toFixed(2));
  const [totalTipAmount, setTotalTipAmount] = useState(0);
  const [disable , setDisable] = useState(true)
  // const [totalAmountAfterCC, setTotalAmountAfterCC] = useState();

  useEffect(() => {
    if (totalAmount && numberOfPeople) {
      if (tipAmount) {
        const tipAmountRes = totalAmount * (tipAmount / 100);
        const finaleTip = tipAmountRes / numberOfPeople;
        setTotalTipAmount(tipAmountRes);

        // console.log(tipAmountRes , finaleTip);
        setTipAmountPerPerson(parseFloat(finaleTip).toFixed(2));
      }
      if (!tipAmount) {
        const ttAmountAfterCC = totalAmount / numberOfPeople;
        setTotalAmountPerPerson(parseFloat(ttAmountAfterCC).toFixed(2));
      }

      // total per person
      const TPP = (totalAmount + totalTipAmount) / numberOfPeople;
      setTotalAmountPerPerson(parseFloat(TPP).toFixed(2));

      setDisable(false)

    }
  }, [numberOfPeople, tipAmount, totalAmount, totalTipAmount]);

  const resetHandeler = () => { 
    setNumberOfPeople("")
    setTipAmount("")
    setTotalAmount("")
    setTipAmountPerPerson(parseFloat(0).toFixed(2))
    setTotalAmountPerPerson(parseFloat(0).toFixed(2))
    setDisable(true)
    
  }
  
  return (
    <div className="bg-Verydarkcyan text-White h-full w-3/5 rounded-3xl pt-10 pl-9 pr-8  flex flex-col justify-between text-center">
      <div>
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1>Tip Amount</h1>
            <p className="text-Darkgrayishcyan">/ person</p>
          </div>
          <h1 className="text-strongcyan text-5xl">${tipAmountPerPerson}</h1>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1>Total</h1>
            <p className="text-Darkgrayishcyan">/ person</p>
          </div>
          <h1 className="text-strongcyan text-5xl">${totalAmountPerPerson}</h1>
        </div>
      </div>
      <div className="">
        <button
          className={` mb-8 w-full p-3 rounded-xl hover:opacity-80 transition-all active:opacity-50 uppercase text-xl tracking-widest ${
            disable ? "bg-Darkgrayishcyan" : "bg-strongcyan"
          } `}
          disabled={disable}
          onClick={resetHandeler}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
