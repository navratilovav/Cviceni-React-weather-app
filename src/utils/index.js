export const cities = [
    "Abuja",
    "Amsterdam",
    "Aswān",
    "Athens",
    "Bangkok",
    "Barcelona",
    "Belgrade",
    "Brno",
    "Budapest",
    "Buenos Aires",
    "Cape Town",
    "Dakar",
    "El Alto",
    "Hanoi",
    "Harbin",
    "Kingston",
    "Kuala Lumpur",
    "Kuwait",
    "Kyiv",
    "Lagos",
    "Ljubljana",
    "London",
    "Madrid",
    "Melbourne",
    "Miami",
    "Minsk",
    "Moscow",
    "New Delhi",
    "New York",
    "Norilsk",
    "Paris",
    "Porto",
    "Prague",
    "Reykjavik",
    "Seoul",
    "Skopje",
    "Sofia",
    "Split",
    "Sydney",
    "São Paulo",
    "Tallinn",
    "Tenerife",
    "Tirana",
    "Toronto",
    "Vancouver",
    "Vienna",
    "Vilnius",
    "Warsaw",
    "Winnipeg",
    "Yakutsk",
  ]; 

export const convertDate = (dateStamp) => {
    const dateObject = new Date(dateStamp * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dateFormat = days[(dateObject.getDay())] + ", " + (dateObject.getDate()) + " " + months[(dateObject.getMonth())];
    return dateFormat;
}

export const convertTime = (unix) => {
    const hours = new Date(unix * 1000).getHours();
    const minutes = new Date(unix * 1000).getMinutes();
    const timeFormat = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    return timeFormat;
};

export const getFiveDaysweatherForecast = (array) => {
    return array.filter((e, i) => (i + 1) % 8 === 0);
}
