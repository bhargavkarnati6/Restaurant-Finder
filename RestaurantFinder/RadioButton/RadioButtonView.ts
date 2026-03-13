import RadioButtonModel from "./RadioButtonModel";

export default class RadioButtonView {
    root: HTMLDivElement;
    circle: HTMLDivElement;
    labelEl: HTMLSpanElement;

    constructor(private model: RadioButtonModel) {
        this.root = document.createElement("div");
        this.root.style.display = "flex";
        this.root.style.alignItems = "center";
        this.root.style.cursor = "pointer";
        this.root.style.gap = "6px";
        this.root.style.userSelect = "none";

        this.circle = document.createElement("div");
        this.circle.style.width = "16px";
        this.circle.style.height = "16px";
        this.circle.style.borderRadius = "50%";
        this.circle.style.border = "2px solid black";

        this.labelEl = document.createElement("span");
        this.labelEl.textContent = this.model.label;

        this.root.appendChild(this.circle);
        this.root.appendChild(this.labelEl);

        this.update();
    }

    update() {
        this.circle.style.background = this.model.selected ? "dodgerblue" : "white";
    }

    getElement() {
        return this.root;
    }
}
