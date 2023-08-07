import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

// context props and intial (default) values and creation of context

interface ColorContextProps {
  colorsReversed: boolean;
  setColorsReversed: Dispatch<SetStateAction<boolean>>;
}

const initialContextState: ColorContextProps = {
  colorsReversed: false,
  setColorsReversed: () => {},
};

const ColorContext = createContext(initialContextState);

// we will create a helper provider that auto injects the values that are required by the context

interface IColorStateProviderProps {
  children: React.ReactNode;
}

const ColorStateProvider = ({ children }: IColorStateProviderProps) => {
  const [colorsReversed, setColorsReversed] = useState<boolean>(false);
  return (
    <ColorContext.Provider
      value={{
        colorsReversed,
        setColorsReversed,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};

const useAppColor = () => useContext(ColorContext);

export { ColorStateProvider, useAppColor };
