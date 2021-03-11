import { useCallback, useState, useEffect } from "react";

export const MOBILE_SIZE = 480;
export const TABLET_SIZE = 768;
export const LAPTOP_SIZE = 1024;
export const DESKTOP_SIZE = 1200;
export const DESKTOP_LARGE_SIZE = 9999;

export const MOBILE = "MOBILE";
export const TABLET = "TABLET";
export const LAPTOP = "LAPTOP";
export const DESKTOP = "DESKTOP";
export const DESKTOP_LARGE = "DESKTOP_LARGE";
export const DEVICES = {
  MOBILE,
  TABLET,
  LAPTOP,
  DESKTOP,
  DESKTOP_LARGE,
};

export const getDevice = () => {
  const MOBILE_QUERY = useMediaQuery(MOBILE_SIZE);
  const TABLET_QUERY = useMediaQuery(TABLET_SIZE);
  const LAPTOP_QUERY = useMediaQuery(LAPTOP_SIZE);
  const DESKTOP_QUERY = useMediaQuery(DESKTOP_SIZE);
  const DESKTOP_LARGE_QUERY = useMediaQuery(DESKTOP_LARGE_SIZE);

  const devices = [
    MOBILE_QUERY,
    TABLET_QUERY,
    LAPTOP_QUERY,
    DESKTOP_QUERY,
    DESKTOP_LARGE_QUERY,
  ];

  return [MOBILE, TABLET, LAPTOP, DESKTOP, DESKTOP_LARGE][
    devices.findIndex((el) => el)
  ];
};

export const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
