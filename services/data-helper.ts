export type Passenger = {
    id: number;
    passenger_name: string;
    passenger_avatar: string;
    origin: string;
    destination: string;
  };

export default function listCategoriesHelper(data: Passenger[]) {
  const countryMap: { [key: string]: Passenger[] } = {};

  data.forEach((passenger) => {
    if (!countryMap[passenger.origin]) {
      countryMap[passenger.origin] = [];
    }
    countryMap[passenger.origin].push(passenger);

    if (!countryMap[passenger.destination]) {
      countryMap[passenger.destination] = [];
    }
    countryMap[passenger.destination].push(passenger);
  });

  const groupedData = Object.keys(countryMap)
    .sort() 
    .map((country) => ({
      category: `${country} (${countryMap[country].length} passageiros)`,
      data: countryMap[country],
    }));

  return groupedData;
}