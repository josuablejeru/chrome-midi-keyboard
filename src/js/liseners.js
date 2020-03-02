export const noteON = input => {
  input.addListener("noteon", "all", e => {
    console.log(e.note);
  });
};
