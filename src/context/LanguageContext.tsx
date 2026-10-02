import React, { createContext, useState } from 'react';

export type Language = 'es';

export interface LanguageContextType {
  lang: Language;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
}
