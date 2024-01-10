// import all images from assets/images directory
import img01 from "../all-images/cars-img/img01.jpg";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/img01.jpg";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import img08 from "../all-images/cars-img/mercedes-offer.png";

const carData = [
  {
    id: 1,
    brand: "TOYOTA",
    rating: 112,
    carName: "LANDCRUISER",
    imgUrl: img01,
    model: "ZX V8",
    price: 30000,
     speed: "Yr.2016",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Petrol",
    description:
      "Classy Car for all Your needs",
  },

  {
    id: 2,
    brand: "RANGE ROVER",
    rating: 112,
    carName: "RANGE ROVER",
    imgUrl: img03,
    model: "Sports",
    price: 30000,
    speed: "Yr.2017",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Petrol",
    description:
      " 7 Seater 2017 Range Rover Sports",
  },

  {
    id: 3,
    brand: "MERCEDES",
    rating: 94,
    carName: "MERCEDES BENZ",
    imgUrl: img05,
    model: "G350D",
    price: 30000,
    speed: "2017",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Diesel",
    description:
      " Classy 2017 Mercedes Benz G350D ,",
  },

  {
    id: 4,
    brand: "LEXUS",
    rating: 119,
    carName: "LEXUS 570",
    imgUrl: img06,
    model: "White",
    price: 15000,
    speed: "2016",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Diesel",
    description:
      "Perfect Car for every activity ",
  },

  {
    id: 5,
    brand: "LEXUS",
    rating: 82,
    carName: "LEXUS 570",
    imgUrl: img07,
    model: "Black",
    price: 9000,
    speed: "2016",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      "Luxurious Black 2016 LX570 for all your needs ",
  },


  {
    id: 6,
    brand: "NISSAN",
    rating: 52,
    carName: "NISSAN X-TRAIL",
    imgUrl: img08,
    model: "Mini SUV",
    price: 9000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
{/*
  {
    id: 7,
    brand: "MAZDA",
    rating: 102,
    carName: "MAZDA CX-5",
    imgUrl: img01,
    model: "Mini SUV",
    price: 9000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  }, 

  {
    id: 8,
    brand: "TOYOTA",
    rating: 102,
    carName: "RAV-4",
    imgUrl: img03,
    model: "Mini SUV",
    price: 9000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  }, 

  {
    id: 9,
    brand: "TOYOTA",
    rating: 102,
    carName: "VANGUARD",
    imgUrl: img01,
    model: "Mini SUV",
    price: 9000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  }, 

  {
    id: 10,
    brand: "TOYOTA",
    rating: 102,
    carName: "ALPHARD VELFIRE",
    imgUrl: img04,
    model: "7 Seater",
    price: 14000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 11,
    brand: "TOYOTA",
    rating: 102,
    carName: "NOAH",
    imgUrl: img08,
    model: "7 Seater",
    price: 8500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 12,
    brand: "TOYOTA",
    rating: 102,
    carName: "TOYOTA VOXY",
    imgUrl: img02,
    model: "7 Seater",
    price: 8500,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 13,
    brand: "TOYOTA",
    rating: 99,
    carName: "MARK X",
    imgUrl: img01,
    model: "Saloon Car",
    price: 8000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Confortable and Safe Saloon car.",
  },

    {
    id: 14,
    brand: "TOYOTA",
    rating: 99,
    carName: "TOYOTA CROWN",
    imgUrl: img01,
    model: "Saloon Car",
    price: 8000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Confortable and Safe Saloon car.",
  },

    {
    id: 15,
    brand: "TOYOTA",
    rating: 99,
    carName: "TOOTA FIELDER",
    imgUrl: img01,
    model: "Saloon Car",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Confortable and Safe Saloon car.",
  },

    {
    id: 16,
    brand: "TOYOTA",
    rating: 99,
    carName: "TOYOTA ALLION",
    imgUrl: img03,
    model: "Saloon Car",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Confortable and Safe Saloon car.",
  },

    {
    id: 17,
    brand: "TOYOTA",
    rating: 99,
    carName: "TOYOTA PREMIO",
    imgUrl: img08,
    model: "Saloon Car",
    price: 5000,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Confortable and Safe Saloon car.",
  },

    {
    id: 18,
    brand: "TOYOTA",
    rating: 99,
    carName: "TOYOTA AXIO",
    imgUrl: img03,
    model: "Saloon Car",
    price: 5000,
    speed: "70kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Confortable and Safe Saloon car.",
  },

  {
    id: 19,
    brand: "MAZDA",
    rating: 99,
    carName: "MAZDA DEMIO",
    imgUrl: img01,
    model: "Small Car",
    price: 4000,
    speed: "70kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description: " Confortable and Safe Small car.",
  },

  {
    id: 20,
    brand: "TOYOTA",
    rating: 99,
    carName: "TOYOTA VITZ",
    imgUrl: img03,
    model: "Small Car",
    price: 4000,
    speed: "70kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Confortable and Safe Saloon car.",
  },

  {
    id: 21,
    brand: "NISSAN",
    rating: 99,
    carName: "NISSAN NOTE",
    imgUrl: img03,
    model: "Small Car",
    price: 4000,
    speed: "70kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Confortable and Safe Saloon car.",
  },

  
*/}
];

export default carData;
