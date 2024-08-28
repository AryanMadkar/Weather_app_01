import moment from "moment";

export const kelvintodeg = (kelvin: number) => {
  return Math.round(kelvin - 273.15);
};

export const airqualitytext = [
  {
    rating: 20,
    description: "Good",
  },
  {
    rating: 40,
    description: "fair",
  },
  {
    rating: 60,
    description: "Moderate",
  },
  {
    rating: 80,
    description: "Unhealthy",
  },
  {
    rating: 100,
    description: "Very Unhealthy",
  },
];

export const unixtotime = (unix: number, timezone: number) => {
  return moment
    .unix(unix)
    .utcOffset(timezone / 60)
    .format("HH:mm");
};

export const unixtoday  = (unix: number)=>{
  return moment.unix(unix).format("ddd")
}