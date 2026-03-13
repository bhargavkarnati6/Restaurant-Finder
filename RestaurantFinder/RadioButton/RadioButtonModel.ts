export default class RadioButtonModel {
    label: string;
    selected: boolean = false;

    constructor(label: string) {
        this.label = label;
    }

    setSelected(v: boolean) {
        this.selected = v;
    }
}
