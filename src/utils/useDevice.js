import { useMediaQuery } from "react-responsive";

const breakpoints = {
  mobile: "(max-width: 1024px)",
  desktop: "(min-width: 1025px)"
};

export const useDevice = () => {
  const isMobile = useMediaQuery({ query: breakpoints.mobile });
  const isDesktop = useMediaQuery({ query: breakpoints.desktop });

  return { isMobile, isDesktop };
};