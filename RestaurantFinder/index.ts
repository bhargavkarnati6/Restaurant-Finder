import rawData from "../fredericton_restaurants.json";
import { Restaurant } from "./model";
import RestaurantFinderController from "./controller";
import RestaurantFinderView from "./view";

const restaurants: Restaurant[] = rawData as Restaurant[];

const view = new RestaurantFinderView();
const model = { restaurants };

new RestaurantFinderController(model, view);
