import { getTypesByPlayTimeMinMax } from "../utils/play_time";

const scores = {
  ONE_ONE: (difference) => {
    if (difference === 0) {
      return 1;
    } else if (difference === 1) {
      return 0.5;
    } else if (difference === 2) {
      return 0.25;
    } else if (difference === 3) {
      return 0.05;
    } else if (difference === 3) {
      return 0;
    }
  },
  ONE_TWO: (difference) => {
    if (difference === 0) {
      return 0.9;
    } else if (difference === 1) {
      return 0.3;
    }
    return 0;
  },
  ONE_THREE: (difference) => {
    if (difference === 0) {
      return 0.8;
    }
    return 0;
  },
  ONE_FOUR: () => 0,
  ONE_FIVE: () => 0,
  TWO_TWO: (equal_types) => {
    if (equal_types.length === 2) {
      return 0.9;
    } else if (equal_types.length === 1) {
      return 0.5;
    }
    return 0;
  },
  TWO_THREE: (equal_types) => {
    if (equal_types.length === 3) {
      return 0.8;
    } else if (equal_types.length === 2) {
      return 0.6;
    }
    return 0;
  },
  TWO_FOUR: () => 0,
  TWO_FIVE: () => 0,
  THREE_THREE: (equal_types) => {
    if (equal_types.length === 3) {
      return 0.6;
    } else if (equal_types.length === 2) {
      return 0.2;
    }
    return 0;
  },
};

export const get_playtime_score = (play_time_1, play_time_2) => {
  const play_time_1_TYPES = getTypesByPlayTimeMinMax(
    play_time_1.min,
    play_time_1.max
  ).map(({ value }) => value);

  const play_time_2_TYPES = getTypesByPlayTimeMinMax(
    play_time_2.min,
    play_time_2.max
  ).map(({ value }) => value);

  const play_time_TYPES_equal = play_time_1_TYPES.filter((mechanism) =>
    play_time_2_TYPES.includes(mechanism)
  );

  if (play_time_1_TYPES.length === 1 && play_time_2_TYPES.length === 1) {
    return scores.ONE_ONE(
      Math.abs(play_time_2_TYPES[0] - play_time_1_TYPES[0])
    );
  }
  if (play_time_1_TYPES.length === 1 || play_time_2_TYPES.length === 1) {
    const difference = Math.abs(play_time_2_TYPES[0] - play_time_1_TYPES[0]);
    if (play_time_1_TYPES.length === 2 || play_time_2_TYPES.length === 2) {
      return scores.ONE_TWO(difference);
    } else if (
      play_time_1_TYPES.length === 3 ||
      play_time_2_TYPES.length === 3
    ) {
      return scores.ONE_THREE(difference);
    }
  } else if (play_time_1_TYPES.length === 2 || play_time_2_TYPES.length === 2) {
    if (play_time_1_TYPES.length === 2 && play_time_2_TYPES.length === 2) {
      return scores.TWO_TWO(play_time_TYPES_equal);
    } else if (
      play_time_1_TYPES.length === 3 ||
      play_time_2_TYPES.length === 3
    ) {
      scores.TWO_THREE(play_time_TYPES_equal);
    } else if (
      play_time_1_TYPES.length === 4 ||
      play_time_2_TYPES.length === 4
    ) {
      scores.TWO_FOUR(play_time_TYPES_equal);
    }
  } else if (play_time_1_TYPES.length === 3 || play_time_2_TYPES.length === 3) {
    if (play_time_1_TYPES.length === 3 && play_time_2_TYPES.length === 3) {
      return scores.THREE_THREE(play_time_TYPES_equal);
    }
  }
  return 0;
};
