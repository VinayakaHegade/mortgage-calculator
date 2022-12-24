import React from 'react';
import SliderComponent from './SliderComponent';

const SliderSelect = () => {
  return (
    <>
      <SliderComponent
        min={1000}
        max={10000}
        defaultValue={3000}
        step={100}
        amount={3000}
        currency="$"
        label="Home Value"
      />
      <SliderComponent
        min={100}
        max={500}
        defaultValue={300}
        step={100}
        amount={300}
        currency="$"
        label="Down Payment"
      />
      <SliderComponent
        min={100}
        max={500}
        defaultValue={300}
        step={100}
        amount={300}
        currency="$"
        label="Loan Amount"
      />
      <SliderComponent
        min={2}
        max={18}
        defaultValue={4.5}
        step={0.5}
        amount={4.5}
        currency="%"
        label="Interest"
      />
    </>
  );
}

export default SliderSelect