export const addAppoinmet = appoiment => {
  return {
    type: "ADD_APPOIMENT",
    payload: appoiment
  };
};

export const removeAppoiment = id => {
  return {
    type: "REMOVE_APPOIMENT",
    payload: id
  };
};

