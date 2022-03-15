import { createContext, useState, ReactNode, useContext } from "react";

type SelectPageContextProps = {
    children: ReactNode;   
}

type SelectPageContextType = {
    page: number;
    setPage: (newState: number) => void;
}

const initialValue = {
    page: 0,
    setPage: () => {},
}

const SelectPageContext = createContext<SelectPageContextType>(initialValue);

export default function SelectPageContextProvider({ children }: SelectPageContextProps) {
    const [page, setPage] = useState(initialValue.page);

    return (
        <SelectPageContext.Provider value={{page, setPage}}>
            { children }
        </SelectPageContext.Provider>
    );
}

export function useSelectPage() {
    const context = useContext(SelectPageContext);
    const { page, setPage } = context;
    return { page, setPage };
}