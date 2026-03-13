import RadioButtonController from "./RadioButtonController";

export default class RadioButtonGroup {
    private buttons: RadioButtonController[] = [];
    private selected: RadioButtonController | null = null;
    private callback: (() => void) | null = null;

    constructor(labels: string[], container: HTMLElement) {
        labels.forEach((label, index) => {
            const btn = new RadioButtonController(label);

            btn.getElement().addEventListener("click", () => {
                this.select(btn);
            });

            this.buttons.push(btn);
            container.appendChild(btn.getElement());

            if (index === 0) {
                this.select(btn);
            }
        });
    }

    select(btn: RadioButtonController) {
        this.buttons.forEach(b => b.setSelected(b === btn));
        this.selected = btn;

        if (this.callback) this.callback();
    }

    getSelected(): string {
        return this.selected ? this.selected.model.label : "All";
    }

    onChange(cb: () => void) {
        this.callback = cb;
    }
}
