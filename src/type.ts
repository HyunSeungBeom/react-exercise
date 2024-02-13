type buttonStateType = {
  showHome: boolean;
  type: string;
};

export type buttonStateContextType = {
  buttonState: buttonStateType;
  setButtonState: React.Dispatch<
    React.SetStateAction<{
      showHome: boolean;
      type: string;
    }>
  >;
};
