import { Restaurant } from "./model";

export default class RestaurantFinderView {
    private map: L.Map;
    private markerLayer: L.LayerGroup;

    constructor() {
        this.map = L.map("map").setView([45.9636, -66.6431], 12);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
        }).addTo(this.map);

        this.markerLayer = L.layerGroup().addTo(this.map);
    }

    private getEmojiForType(type: string): string {
        switch (type) {
            case "Chinese": return "🥡";
            case "Indian": return "🍛";
            case "Pizza": return "🍕";
            case "Japanese": return "🍣";
            case "Mexican": return "🌮";
            case "Burgers": return "🍔";
            case "Canadian": return "🍁";
            default: return "🍽️";
        }
    }

    private getRatingColor(r: number): string {
        if (r >= 4) return "green";
        if (r >= 2.5) return "gold";
        return "red";
    }

    updateMap(restaurants: Restaurant[]) {
        this.markerLayer.clearLayers();

        restaurants.forEach(res => {
            const emoji = this.getEmojiForType(res.type);
            const color = this.getRatingColor(res.ratings);

            const icon = L.divIcon({
                className: "emojiMarker",
                html: `<div style="
                    font-size: 26px;
                    border: 3px solid ${color};
                    border-radius: 50%;
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background:white;">
                    ${emoji}
                </div>`,
                iconSize: [42, 42],
                iconAnchor: [21, 21],
            });

            const marker = L.marker([res.latitude, res.longitude], { icon }).addTo(this.markerLayer);

            marker.bindTooltip(res.name);

            marker.on("click", () => {
                this.showRestaurantDetails(res);
                this.map.panTo([res.latitude, res.longitude]);
            });
        });
    }

    showRestaurantDetails(r: Restaurant) {
        const panel = document.getElementById("detail-panel")!;
        panel.innerHTML = `
            <h2>${r.name}</h2>
            <p><strong>Rating:</strong> ${r.ratings}</p>
            <p><strong>Price:</strong> $${r.avg_price}</p>
            <p><strong>Type:</strong> ${r.type}</p>
            <p><strong>Address:</strong> ${r.address}</p>

            <p><strong>Features:</strong><br>
                ${r.features.map(f => "• " + f).join("<br>")}
            </p>

            <p><em>${r.description}</em></p>
        `;
    }
}
