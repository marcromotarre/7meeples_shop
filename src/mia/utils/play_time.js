import { sequential } from "../../utils/array";

export const PLAY_TIME_TYPES = {
  REALLY_SHORT: {
    value: 0,
    minimum: -1,
    maximum: 15,
  },
  SHORT: {
    value: 1,
    minimum: 15,
    maximum: 30,
  },
  MEDIUM: {
    value: 2,
    minimum: 30,
    maximum: 60,
  },
  LONG: {
    value: 3,
    minimum: 60,
    maximum: 120,
  },
  EXTRA_LONG: {
    value: 4,
    minimum: 120,
    maximum: 9999,
  },
};

export const isType = (TYPE, playTime) => {
  return playTime > TYPE.minimum && playTime <= TYPE.maximum ? true : false;
};

export const getTypeByPlayTime = (playTime) => {
  if (isType(PLAY_TIME_TYPES.REALLY_SHORT, playTime)) {
    return PLAY_TIME_TYPES.REALLY_SHORT;
  } else if (isType(PLAY_TIME_TYPES.SHORT, playTime)) {
    return PLAY_TIME_TYPES.SHORT;
  } else if (isType(PLAY_TIME_TYPES.MEDIUM, playTime)) {
    return PLAY_TIME_TYPES.MEDIUM;
  } else if (isType(PLAY_TIME_TYPES.LONG, playTime)) {
    return PLAY_TIME_TYPES.LONG;
  } else if (isType(PLAY_TIME_TYPES.EXTRA_LONG, playTime)) {
    return PLAY_TIME_TYPES.EXTRA_LONG;
  }
};

const getKeyByValue = (value) => {
  const keys = Object.keys(PLAY_TIME_TYPES);
  return keys.find((key) => PLAY_TIME_TYPES[key].value === value);
};

export const getTypesByPlayTimeMinMax = (playTimeMin, playTimeMax) => {
  const playTimeMinType = getTypeByPlayTime(playTimeMin);
  const playTimeMaxType = getTypeByPlayTime(playTimeMax);

  const seq = sequential({
    from: playTimeMinType.value,
    to: playTimeMaxType.value,
  });
  return seq.map((value) => PLAY_TIME_TYPES[getKeyByValue(value)]);
};
