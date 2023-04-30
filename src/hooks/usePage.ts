import { useContext } from 'react';
import { IPageContext, PageContext } from '../context/PageContext';

export function usePageContext(): IPageContext {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
