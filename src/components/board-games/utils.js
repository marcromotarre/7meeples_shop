export const play_time_string = (play_time_min, play_time_max) =>
  play_time_min === play_time_max
    ? `${play_time_min} min`
    : `${play_time_min} - ${play_time_max} min`;
export const weight_string = (weight) => `${weight} / 5`;
export const age_string = (age) => `${age} años`;

export const round_weight = (weight) =>
  Math.round((weight + Number.EPSILON) * 100) / 100;
