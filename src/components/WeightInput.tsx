import { useRef } from 'react';

const Input: React.FC<{ onSubmitWeight: (enteredText: string) => void }> = ({
  onSubmitWeight,
}) => {
  const weightTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = weightTextInputRef.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    onSubmitWeight(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" id="text" ref={weightTextInputRef} />
      <button>Submit</button>
    </form>
  );
};

export default Input;
