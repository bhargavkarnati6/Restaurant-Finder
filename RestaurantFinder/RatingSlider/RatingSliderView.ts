import RatingSliderModel from "./RatingSliderModel";

export default class RatingSliderView {
    constructor(private model: RatingSliderModel) {}

    draw(ctx: CanvasRenderingContext2D) {
        const { x, y, width, handleX, currentRating } = this.model;

        ctx.font = "16px sans-serif";
        ctx.fillStyle = "black";
        ctx.fillText(`Min Rating: ⭐${currentRating.toFixed(1)}`, x, y - 15);

        ctx.strokeStyle = "#555";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + width, y);
        ctx.stroke();

        ctx.fillStyle = "gold";
        ctx.beginPath();
        ctx.arc(handleX, y, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}
