import { useState, createContext } from 'react';

export interface IPageContext {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
}

const PageContext = createContext<IPageContext>({} as IPageContext);

const PageProvider: React.FC<{ children: any }> = ({ children }: any) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <PageContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
export { PageContext };
