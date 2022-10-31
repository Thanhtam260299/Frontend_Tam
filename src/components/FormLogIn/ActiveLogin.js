import { createContext, useState } from "react";

export const ActiveContext = createContext();

export function ActiveProvider({ children }) {
  const [active, setActive] = useState("off");
  const toggleActive = () => {
    setActive(active === "active" ? "off" : "active");
  };

  const valueActive = { active, toggleActive };

  return (
    <ActiveContext.Provider value={valueActive}>
      {children}
    </ActiveContext.Provider>
  );
}
