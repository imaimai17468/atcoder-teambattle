export const charMinLimitError = (name: string, min: number) => {
  return `${name} must be at least ${min} character${min > 1 ? "s" : ""}.`;
};

export const charMaxLimitError = (name: string, max: number) => {
  return `${name} must be at most ${max} character${max > 1 ? "s" : ""}.`;
};

export const arrayMinLimitError = (name: string, min: number) => {
  return `${name} must have at least ${min} item${min > 1 ? "s" : ""}.`;
};

export const arrayMaxLimitError = (name: string, max: number) => {
  return `${name} must have at most ${max} item${max > 1 ? "s" : ""}.`;
};

export const dateMinLimitError = (name: string, min: Date) => {
  return `${name} must be at least ${min.toLocaleDateString()}.`;
};
