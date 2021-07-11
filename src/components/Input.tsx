import { useRef } from 'react';

const Input: React.FC<{ onAddWeight: (enteredText: string) => void }> =
  props => {
    const weightTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
      e.preventDefault();

      const enteredText = weightTextInputRef.current!.value;

      if (enteredText?.trim().length === 0) {
        return;
      }

      props.onAddWeight(enteredText);
    };

    return (
      <form onSubmit={submitHandler}>
        <label htmlFor="text">Enter today's weight</label>
        <input type="text" id="text" ref={weightTextInputRef} />
        <button>Submit</button>
      </form>
    );
  };

export default Input;
