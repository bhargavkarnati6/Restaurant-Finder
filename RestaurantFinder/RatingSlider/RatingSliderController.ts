import RatingSliderModel from "./RatingSliderModel";
import RatingSliderView from "./RatingSliderView";

export default class RatingSliderController {
    model: RatingSliderModel;
    view: RatingSliderView;

    constructor(x: number, y: number) {
        this.model = new RatingSliderModel(x, y);
        this.view = new RatingSliderView(this.model);
    }

    draw(ctx: CanvasRenderingContext2D) {
        this.view.draw(ctx);
    }

    onMouseDown(event: MouseEvent): boolean {
        const rect = (event.target as HTMLCanvasElement).getBoundingClientRect();
        const mx = event.clientX - rect.left;
        const my = event.clientY - rect.top;

        const dx = mx - this.model.handleX;
        const dy = my - this.model.y;

        if (Math.hypot(dx, dy) < 12) {
            this.model.dragging = true;
            return true;
        }
        return false;
    }

    onMouseMove(event: MouseEvent) {
        if (!this.model.dragging) return;
        const rect = (event.target as HTMLCanvasElement).getBoundingClientRect();
        const mx = event.clientX - rect.left;
        this.model.handleX = Math.min(this.model.x + this.model.width, Math.max(this.model.x, mx));
        this.model.currentRating = this.model.xToValue(mx);
    }

    onMouseUp() {
        this.model.dragging = false;
    }

    getValue(): number {
        return this.model.currentRating;
    }
}
