import RadioButtonModel from "./RadioButtonModel";
import RadioButtonView from "./RadioButtonView";

export default class RadioButtonController {
    model: RadioButtonModel;
    view: RadioButtonView;

    constructor(label: string) {
        this.model = new RadioButtonModel(label);
        this.view = new RadioButtonView(this.model);
    }

    setSelected(v: boolean) {
        this.model.setSelected(v);
        this.view.update();
    }

    getElement() {
        return this.view.getElement();
    }
}
