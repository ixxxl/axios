export const getFakePhoto = (): string => {
  const links: string[] = [
    "https://cdn-icons-png.flaticon.com/512/9835/9835854.png",
    "https://cdn-icons-png.flaticon.com/512/9835/9835816.png",
    "https://cdn-icons-png.flaticon.com/512/9835/9835813.png",
    "https://cdn-icons-png.flaticon.com/512/9835/9835818.png",
  ];
  return links[Math.floor(Math.random() * links.length)];
};

// export const geDataBirthDay = (): string => {

//   return "01.04.2000";
// };

export const geDataBirthDay = () => {
  //d = new Date(start.getTime() + Math.random() * (end.getTime() -                     start.getTime())),
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  const d = new Date(timestamp);
  let month = "" + (d.getMonth() + 1);
  let day = "" + d.getDate();
  const year = d.getFullYear();
  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  const birth = [day, month, year].join(".");
  //   const birth = d.getDate() + ".0" + d.getMonth() + "." + d.getFullYear();
  return console.log(birth);
};
