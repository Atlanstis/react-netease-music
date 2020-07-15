export const flexCenter = ($direction = "row") => {
  return `
    display: flex;
    flex-direction: ${$direction};
    align-items: center;
    justify-content: center;
  `;
};

export const round = ($d) => {
  return `
    width: ${$d};
    height: ${$d};
    border-radius: 50%;
  `;
};
