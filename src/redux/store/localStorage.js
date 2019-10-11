export const getLocalStorage = () => {
  const appoimentStorage = localStorage.getItem("appoiment");

  if (appoimentStorage === null) {
    return;
  }

  return JSON.parse(appoimentStorage);
};

export const setLocalStorage = sate => {
  const appoimentState = JSON.stringify(sate);
  localStorage.setItem("appoiment", appoimentState);
};
