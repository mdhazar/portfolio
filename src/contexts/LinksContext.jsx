import { createContext, useContext } from 'react';

const LinksContext = createContext();

export const useLinks = () => useContext(LinksContext);

// eslint-disable-next-line react/prop-types
export const LinksProvider = ({ children }) => {
  const links = {
    github: 'https://github.com/mdhazar',
    project1: 'https://pizza-order-orpin.vercel.app/',
    project2: 'https://fsweb-s10g3-redux-watchlist-solution-murex.vercel.app/',
    project3: 'https://fsweb-s10g2-redux-filmler-solution-kappa.vercel.app/movies',
    email: 'mailto:m.derya.hazar@gmail.com',
    linkedin: 'https://www.linkedin.com/in/deryahazar/',
  };

  return (
    <LinksContext.Provider value={links}>
      {children}
    </LinksContext.Provider>
  );
};
