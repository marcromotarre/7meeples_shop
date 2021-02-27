export const play_time_string = (play_time_min, play_time_max) =>
  play_time_min === play_time_max
    ? `${play_time_min} min`
    : `${play_time_min} - ${play_time_max} min`;
export const weight_string = (weight) => `${round_weight(weight)} / 5`;
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

export const age_group_string = (age) => {
  if (age < 8) {
    return "és un juego infantil";
  } else if (age < 10) {
    return "és un juego infantil";
  } else if (age < 12) {
    return "és un juego juvenil";
  } else if (age < 12) {
    return "és un juego para mayores";
  } else {
    return "és un juego para adultos";
  }
};

export const weight_group_string = (weight) => {
  if (weight < 2) {
    return "és un juego fácil";
  } else if (weight < 3) {
    return "és un juego de dureza media";
  } else if (weight < 4) {
    return "és un juego rebuscado";
  } else {
    return "és un juego muy complicado. Solo apto para reales jugones";
  }
};
