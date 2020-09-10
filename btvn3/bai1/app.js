import{Park} from "./park.js";
import{Museum} from "./museum.js";
import{Restaurant} from "./restaurant.js";
import{DestinationList} from "./destinationList.js"

let park = new Park('vườn thủ đô', 200000);
park.newImage = 'https://www.google.com/url?sa=i&url=http%3A%2F%2Fvietdiamondtravel.vn%2Freview-tron-ven-1-ngay-o-rung-quoc-gia-ba-vi-pn.html&psig=AOvVaw3bbyD9iyn74-bwwq_G683Y&ust=1598882930127000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJC0m6WNw-sCFQAAAAAdAAAAABAY';
console.log(park.info);

let museum = new Museum('viện bảo tàng', 100000);
museum.newImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FVi%25E1%25BB%2587n_b%25E1%25BA%25A3o_t%25C3%25A0ng&psig=AOvVaw1EYkOecEJ5sM6zVuOf3grK&ust=1598883087197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCND8n-iNw-sCFQAAAAAdAAAAABAD';
console.log(museum.info);

let restaurant = new Restaurant('nhà hàng', 250000);
restaurant.newImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftoplist.vn%2Ftop-list%2Fnha-hang-5-sao-sang-trong-bac-nhat-o-ha-noi-16347.htm&psig=AOvVaw2P3cD03bWD2P7JUmIadyN9&ust=1598883186456000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIiQvpaOw-sCFQAAAAAdAAAAABAD';
console.log(restaurant.info);

let des = new DestinationList();
des.addDestination(park);
des.addDestination(museum);
des.addDestination(restaurant);

des.findDestination('vườn thủ đô');
des.findDestination('nghĩa địa');

console.log(`Tổng giá ${des.totalPrice}`);
