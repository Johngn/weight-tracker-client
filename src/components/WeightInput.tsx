import { useRef } from 'react';

const Input: React.FC<{ onSubmitWeight: (enteredText: string) => void }> =
  props => {
    const weightTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();

      const enteredText = weightTextInputRef.current!.value;

      if (enteredText?.trim().length === 0) {
        return;
      }

      props.onSubmitWeight(enteredText);
    };

    return (
      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="text"
          data-testid="input-1"
          ref={weightTextInputRef}
        />
        <button>Submit</button>
      </form>
    );
  };

export default Input;
