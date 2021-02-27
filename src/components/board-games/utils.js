export const play_time_string = (play_time_min, play_time_max) =>
  play_time_min === play_time_max
    ? `${play_time_min} min`
    : `${play_time_min} - ${play_time_max} min`;
export const weight_string = (weight) => `${weight} / 5`;
export const age_string = (age) => `${age} años`;

export const round_weight = (weight) =>
  Math.round((weight + Number.EPSILON) * 100) / 100;

export const duration_string = (play_time_min, play_time_max) => {
  if (play_time_max < 30) {
    return "és un juego de duración media";
  }
  if (play_time_max >= 30 && play_time_max < 90 && play_time_min < 30) {
    return "és un juego de duración entre corta y media";
  }
  if (play_time_max >= 30 && play_time_max < 90 && play_time_min >= 30) {
    return "és un juego de duración media";
  }
  if (play_time_max >= 90 && play_time_min < 90) {
    return "és un juego de duración entre media y larga";
  }

  if (play_time_max >= 90 && play_time_min >= 90) {
    return "és un juego de duración entre larga";
  }
};
