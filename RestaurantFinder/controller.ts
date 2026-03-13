import { Restaurant } from "./model";
import RestaurantFinderView from "./view";
import RadioButtonGroup from "./RadioButton/RadioButtonGroup";

export default class RestaurantFinderController {
    private restaurants: Restaurant[] = [];
    private currentFiltered: Restaurant[] = [];

    private typeGroup: RadioButtonGroup;

    constructor(
        model: { restaurants: Restaurant[] },
        private view: RestaurantFinderView
    ) {
        this.restaurants = model.restaurants;

        this.typeGroup = new RadioButtonGroup(
            ["All", "Chinese", "Indian", "Pizza", "Japanese", "Mexican", "Burgers", "Canadian"],
            document.getElementById("typeRadioGroup")!
        );

        this.setupFilters();
        this.applyFilters();
    }

    setupFilters() {
        const priceFilter = document.getElementById("priceFilter") as HTMLInputElement;
        const ratingFilter = document.getElementById("ratingFilter") as HTMLInputElement;

        this.typeGroup.onChange(() => this.applyFilters());

        priceFilter.addEventListener("input", () => {
            document.getElementById("priceValue")!.innerText = "$" + priceFilter.value;
            this.applyFilters();
        });

        ratingFilter.addEventListener("input", () => {
            document.getElementById("ratingValue")!.innerText = ratingFilter.value;
            this.applyFilters();
        });
    }

    applyFilters() {
        const typeVal = this.typeGroup.getSelected();
        const maxPrice = Number((document.getElementById("priceFilter") as HTMLInputElement).value);
        const minRating = Number((document.getElementById("ratingFilter") as HTMLInputElement).value);

        this.currentFiltered = this.restaurants.filter(res => {
            const typeOkay = (typeVal === "All" || res.type === typeVal);
            const priceOkay = res.avg_price <= maxPrice;
            const ratingOkay = res.ratings >= minRating;
            return typeOkay && priceOkay && ratingOkay;
        });

        this.view.updateMap(this.currentFiltered);
    }
}
