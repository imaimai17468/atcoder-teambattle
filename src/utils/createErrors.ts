export const charMinLimitError = (name: string, min: number) => {
  return `${name} must be at least ${min} character${min > 1 ? "s" : ""}.`;
};

export const charMaxLimitError = (name: string, max: number) => {
  return `${name} must be at most ${max} character${max > 1 ? "s" : ""}.`;
};
