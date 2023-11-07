const data = [
  {
    name: "Kumo 1",
    availability: "27-11-2024",
    city: "lisbon",
    price: 160,
    bedrooms: 3,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Hikari 2",
    availability: "04-12-2024",
    city: "barcelona",
    price: 307,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Ren 3",
    availability: "19-11-2024",
    city: "madrid",
    price: 150,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Ren 4",
    availability: "20-11-2023",
    city: "lisbon",
    price: 312,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Fumiko 5",
    availability: "03-12-2023",
    city: "madrid",
    price: 258,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "2.webp",
  },
  {
    name: "Akari 6",
    availability: "08-11-2023",
    city: "barcelona",
    price: 109,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: "2.webp",
  },
  {
    name: "Kaede 7",
    availability: "20-11-2023",
    city: "barcelona",
    price: 393,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Sakura 8",
    availability: "04-12-2023",
    city: "barcelona",
    price: 237,
    bedrooms: 2,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Ren 9",
    availability: "29-11-2023",
    city: "lisbon",
    price: 231,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Yuki 10",
    availability: "13-11-2023",
    city: "barcelona",
    price: 348,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Kaito 11",
    availability: "26-11-2023",
    city: "lisbon",
    price: 358,
    bedrooms: 3,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Kaede 12",
    availability: "10-11-2023",
    city: "barcelona",
    price: 316,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Ren 13",
    availability: "02-12-2023",
    city: "madrid",
    price: 244,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Aki 14",
    availability: "15-11-2023",
    city: "lisbon",
    price: 105,
    bedrooms: 3,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Yuki 15",
    availability: "10-11-2023",
    city: "madrid",
    price: 479,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Kaede 16",
    availability: "15-11-2023",
    city: "madrid",
    price: 273,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Akari 17",
    availability: "07-11-2023",
    city: "madrid",
    price: 345,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Haru 18",
    availability: "24-11-2023",
    city: "madrid",
    price: 207,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Asuka 19",
    availability: "03-12-2023",
    city: "madrid",
    price: 190,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Sakura 20",
    availability: "09-11-2023",
    city: "madrid",
    price: 153,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Fumiko 21",
    availability: "10-11-2023",
    city: "lisbon",
    price: 154,
    bedrooms: 1,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Ren 22",
    availability: "07-11-2023",
    city: "barcelona",
    price: 300,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Megumi 23",
    availability: "23-11-2023",
    city: "madrid",
    price: 218,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Asuka 24",
    availability: "04-12-2023",
    city: "barcelona",
    price: 233,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "2.webp",
  },
  {
    name: "Kaito 25",
    availability: "05-12-2023",
    city: "barcelona",
    price: 361,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "1.webp",
  },
  {
    name: "Kaze 26",
    availability: "23-11-2023",
    city: "madrid",
    price: 262,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Toki 27",
    availability: "23-11-2023",
    city: "madrid",
    price: 372,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Kenshin 28",
    availability: "17-11-2023",
    city: "madrid",
    price: 361,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Haru 29",
    availability: "08-11-2023",
    city: "barcelona",
    price: 133,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "2.webp",
  },
  {
    name: "Megumi 30",
    availability: "07-11-2023",
    city: "barcelona",
    price: 468,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "1.webp",
  },
  {
    name: "Kaze 31",
    availability: "23-11-2023",
    city: "madrid",
    price: 403,
    bedrooms: 1,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Ren 32",
    availability: "06-11-2023",
    city: "lisbon",
    price: 386,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Naoki 33",
    availability: "20-11-2023",
    city: "madrid",
    price: 395,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: "1.webp",
  },
  {
    name: "Izumi 34",
    availability: "05-12-2023",
    city: "lisbon",
    price: 201,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Yuki 35",
    availability: "30-11-2023",
    city: "lisbon",
    price: 448,
    bedrooms: 3,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Amaya 36",
    availability: "11-11-2023",
    city: "lisbon",
    price: 496,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Chihiro 37",
    availability: "13-11-2023",
    city: "barcelona",
    price: 405,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Kenshin 38",
    availability: "29-11-2023",
    city: "lisbon",
    price: 384,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Amaya 39",
    availability: "11-11-2023",
    city: "lisbon",
    price: 142,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "2.webp",
  },
  {
    name: "Megumi 40",
    availability: "18-11-2023",
    city: "madrid",
    price: 385,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Kaede 41",
    availability: "30-11-2023",
    city: "madrid",
    price: 319,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: "1.webp",
  },
  {
    name: "Naoki 42",
    availability: "18-11-2023",
    city: "barcelona",
    price: 432,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "1.webp",
  },
  {
    name: "Sakura 43",
    availability: "19-11-2023",
    city: "barcelona",
    price: 195,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Kaito 44",
    availability: "01-12-2023",
    city: "madrid",
    price: 400,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Hikari 45",
    availability: "09-11-2023",
    city: "lisbon",
    price: 111,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: "2.webp",
  },
  {
    name: "Yuki 46",
    availability: "22-11-2023",
    city: "barcelona",
    price: 498,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "1.webp",
  },
  {
    name: "Yuki 47",
    availability: "05-12-2023",
    city: "lisbon",
    price: 164,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Daiki 48",
    availability: "16-11-2023",
    city: "lisbon",
    price: 399,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Ren 49",
    availability: "05-12-2023",
    city: "madrid",
    price: 132,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Megumi 50",
    availability: "18-11-2023",
    city: "lisbon",
    price: 411,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Kaze 51",
    availability: "11-11-2023",
    city: "barcelona",
    price: 402,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "2.webp",
  },
  {
    name: "Fumiko 52",
    availability: "18-11-2023",
    city: "madrid",
    price: 293,
    bedrooms: 2,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Fumiko 53",
    availability: "04-12-2023",
    city: "lisbon",
    price: 234,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Megumi 54",
    availability: "13-11-2023",
    city: "lisbon",
    price: 203,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Kaito 55",
    availability: "17-11-2023",
    city: "barcelona",
    price: 221,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Daiki 56",
    availability: "29-11-2023",
    city: "lisbon",
    price: 209,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Naoki 57",
    availability: "07-11-2023",
    city: "barcelona",
    price: 234,
    bedrooms: 3,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Hikari 58",
    availability: "28-11-2023",
    city: "lisbon",
    price: 143,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Megumi 59",
    availability: "19-11-2023",
    city: "barcelona",
    price: 139,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "2.webp",
  },
  {
    name: "Hoshi 60",
    availability: "02-12-2023",
    city: "lisbon",
    price: 484,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "1.webp",
  },
  {
    name: "Fumiko 61",
    availability: "03-12-2023",
    city: "madrid",
    price: 488,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "2.webp",
  },
  {
    name: "Eiko 62",
    availability: "17-11-2023",
    city: "barcelona",
    price: 494,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Ren 63",
    availability: "11-11-2023",
    city: "barcelona",
    price: 386,
    bedrooms: 1,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Fumiko 64",
    availability: "09-11-2023",
    city: "barcelona",
    price: 330,
    bedrooms: 1,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Yuki 65",
    availability: "17-11-2023",
    city: "lisbon",
    price: 332,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Asuka 66",
    availability: "20-11-2023",
    city: "lisbon",
    price: 430,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Kenshin 67",
    availability: "13-11-2023",
    city: "lisbon",
    price: 402,
    bedrooms: 4,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Eiko 68",
    availability: "20-11-2023",
    city: "barcelona",
    price: 225,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Naoki 69",
    availability: "11-11-2023",
    city: "barcelona",
    price: 160,
    bedrooms: 2,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Megumi 70",
    availability: "20-11-2023",
    city: "lisbon",
    price: 184,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "2.webp",
  },
  {
    name: "Haru 71",
    availability: "21-11-2023",
    city: "barcelona",
    price: 410,
    bedrooms: 3,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Ren 72",
    availability: "27-11-2023",
    city: "madrid",
    price: 328,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Kaito 73",
    availability: "16-11-2023",
    city: "madrid",
    price: 299,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Kaito 74",
    availability: "05-12-2023",
    city: "barcelona",
    price: 153,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Toki 75",
    availability: "30-11-2023",
    city: "madrid",
    price: 417,
    bedrooms: 2,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Aki 76",
    availability: "23-11-2023",
    city: "madrid",
    price: 183,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Haru 77",
    availability: "13-11-2023",
    city: "madrid",
    price: 296,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "2.webp",
  },
  {
    name: "Kenshin 78",
    availability: "19-11-2023",
    city: "lisbon",
    price: 258,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Akari 79",
    availability: "16-11-2023",
    city: "barcelona",
    price: 232,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Toki 80",
    availability: "11-11-2023",
    city: "lisbon",
    price: 371,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Daiki 81",
    availability: "13-11-2023",
    city: "lisbon",
    price: 381,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Kaede 82",
    availability: "14-11-2023",
    city: "barcelona",
    price: 189,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Aki 83",
    availability: "14-11-2023",
    city: "lisbon",
    price: 484,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Amaya 84",
    availability: "30-11-2023",
    city: "lisbon",
    price: 169,
    bedrooms: 1,
    bathrooms: 1,
    imageUrl: "3.webp",
  },
  {
    name: "Izumi 85",
    availability: "09-11-2023",
    city: "lisbon",
    price: 124,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "2.webp",
  },
  {
    name: "Fumiko 86",
    availability: "08-11-2023",
    city: "barcelona",
    price: 306,
    bedrooms: 1,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Toki 87",
    availability: "23-11-2023",
    city: "madrid",
    price: 334,
    bedrooms: 3,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Naoki 88",
    availability: "04-12-2023",
    city: "lisbon",
    price: 142,
    bedrooms: 3,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Kaede 89",
    availability: "07-11-2023",
    city: "madrid",
    price: 289,
    bedrooms: 2,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Hoshi 90",
    availability: "13-11-2023",
    city: "lisbon",
    price: 233,
    bedrooms: 4,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Yuki 91",
    availability: "26-11-2023",
    city: "madrid",
    price: 181,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "2.webp",
  },
  {
    name: "Hikari 92",
    availability: "16-11-2023",
    city: "lisbon",
    price: 190,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Toki 93",
    availability: "25-11-2023",
    city: "barcelona",
    price: 318,
    bedrooms: 4,
    bathrooms: 2,
    imageUrl: "1.webp",
  },
  {
    name: "Akari 94",
    availability: "01-12-2023",
    city: "madrid",
    price: 457,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "2.webp",
  },
  {
    name: "Chihiro 95",
    availability: "23-11-2023",
    city: "barcelona",
    price: 400,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
  {
    name: "Kenshin 96",
    availability: "07-11-2023",
    city: "lisbon",
    price: 431,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "2.webp",
  },
  {
    name: "Amaya 97",
    availability: "04-12-2023",
    city: "lisbon",
    price: 250,
    bedrooms: 3,
    bathrooms: 3,
    imageUrl: "1.webp",
  },
  {
    name: "Kaze 98",
    availability: "23-11-2023",
    city: "lisbon",
    price: 352,
    bedrooms: 3,
    bathrooms: 1,
    imageUrl: "2.webp",
  },
  {
    name: "Fumiko 99",
    availability: "15-11-2023",
    city: "madrid",
    price: 234,
    bedrooms: 2,
    bathrooms: 2,
    imageUrl: "3.webp",
  },
  {
    name: "Hoshi 100",
    availability: "27-11-2023",
    city: "madrid",
    price: 342,
    bedrooms: 1,
    bathrooms: 3,
    imageUrl: "3.webp",
  },
];

function isWithinNextMonth(dateString) {
  const [day, month, year] = dateString.split("-").map(Number);

  const inputDate = new Date(year, month - 1, day);

  const today = new Date();
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1);

  return inputDate > today && inputDate < nextMonth;
}

export default function handler(req, res) {
  const { city, query, min, max, page, available } = req.query;

  const filteredData = data
    .filter((a) => a.city === city)
    .filter((a) =>
      query
        ? a.name
            .toLocaleLowerCase()
            .includes(decodeURIComponent(query).toLowerCase())
        : true
    )
    .filter((a) => (min ? a.price > min : true))
    .filter((a) => (max ? a.price < max : true))
    .filter((a) => (+available ? isWithinNextMonth(a.availability) : true))
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

  const pageData = filteredData.slice((page - 1) * 6, page * 6);

  res.status(200).json({
    data: pageData,
    total: filteredData.length,
  });
}