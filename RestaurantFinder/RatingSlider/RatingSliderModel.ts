export default class RatingSliderModel {
    x: number;
    y: number;
    width: number = 200;
    minRating: number = 1.0;
    maxRating: number = 5.0;
    currentRating: number = 3.0;
    handleX: number;
    dragging: boolean = false;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.handleX = this.valueToX(this.currentRating);
    }

    valueToX(value: number) {
        return this.x + ((value - this.minRating) / (this.maxRating - this.minRating)) * this.width;
    }

    xToValue(px: number): number {
        const ratio = (px - this.x) / this.width;
        return Math.min(this.maxRating, Math.max(this.minRating, ratio * 4 + 1));
    }
}
