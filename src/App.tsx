// import React from 'react'
import BillCalculator from "./components/BillCalculator/BillCalculator";
import Result from "./components/Result/Result";
import Logo from "./assets/logo.svg";
import { useState } from "react";

export default function App() {
  const [totalAmount, setTotalAmount] = useState<number | undefined>(undefined);
  const [tipAmount, setTipAmount] = useState<number | undefined>(undefined);
  const [numberOfPeople, setNumberOfPeople] = useState<number | undefined>(undefined);

  return (
    <>
      <div className="bg-Lightgrayishcyan w-screen h-screen flex items-center justify-center flex-col font-SpaceMono">
        <img src={Logo} alt="LOGO" className="mb-20" />
        <div className="flex  justify-between bg-White w-3/5 h-3/5 p-6 rounded-3xl">
          <BillCalculator
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            tipAmount={tipAmount}
            setTipAmount={setTipAmount}
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople}
          />
          <Result
            totalAmount={totalAmount}
            setTotalAmount={setTotalAmount}
            tipAmount={tipAmount}
            setTipAmount={setTipAmount}
            numberOfPeople={numberOfPeople}
            setNumberOfPeople={setNumberOfPeople} 
          />
        </div>
      </div>
    </>
  );
}
