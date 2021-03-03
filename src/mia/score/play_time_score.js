export const get_playtime_score = (play_time_1, play_time_2) => {
  if (play_time_1.min === play_time_1.max) {
    if (play_time_2.min === play_time_2.max) {
      if (play_time_1.min === play_time_2.min) {
        return 1;
      } else {
        const time_difference = Math.abs(play_time_1.min - play_time_2.min);
        if (time_difference <= 5) return 0.9;
        if (time_difference <= 10) return 0.75;
        if (time_difference <= 15) return 0.5;
        if (time_difference <= 20) return 0.3;
        if (time_difference <= 30) return 0.1;
        if (time_difference <= 60) return 0.05;
        return 0;
      }
    } else {
      if (
        play_time_1.min >= play_time_2.min &&
        play_time_1.min <= play_time_2.max
      ) {
        return 0.9;
      }
    }
  } else {
    if (play_time_2.min === play_time_2.max) {
      const time_difference = Math.abs(play_time_1.min - play_time_2.min);
      if (time_difference <= 5) return 0.9;
      if (time_difference <= 10) return 0.75;
      if (time_difference <= 15) return 0.5;
      if (time_difference <= 20) return 0.3;
      if (time_difference <= 30) return 0.1;
      if (time_difference <= 60) return 0.05;
      return 0;
    }
  }

  return 0;
};
