import { XtallatX, define } from 'xtal-element/xtal-latx.js';
import { hydrate } from 'trans-render/hydrate.js';
import { cd } from 'xtal-shell/cd.js';
const templTarget = Symbol();
const linkTemplate = ({ disabled, self, beBorn }) => {
    if (disabled)
        return;
    const templ = self.querySelector('template');
    if (templ === null) {
        setTimeout(() => {
            linkTemplate(self);
        }, 50);
        return;
    }
    self.template = templ;
};
const linkWorldCitizen = ({ disabled, beBorn, target, template, self }) => {
    if (disabled || template === undefined || beBorn !== true || target === undefined)
        return;
    if (template[templTarget] === target)
        return;
    template[templTarget] = target;
    const targetEl = cd(self, target);
    if (self.worldCitizen) {
        targetEl.appendChild(self.worldCitizen);
    }
    else {
        targetEl.appendChild(template.content.cloneNode(true));
        self.worldCitizen = targetEl.lastElementChild;
    }
};
let OpenBorders = /** @class */ (() => {
    class OpenBorders extends XtallatX(hydrate(HTMLElement)) {
        constructor() {
            super(...arguments);
            this.propActions = [
                linkTemplate,
                linkWorldCitizen
            ];
        }
        disconnectedCallback() {
            if (this.worldCitizen !== undefined) {
                this.worldCitizen.remove();
            }
        }
    }
    OpenBorders.is = 'open-borders';
    OpenBorders.attributeProps = ({ target, beBorn, worldCitizen, template, disabled }) => ({
        bool: [disabled, beBorn],
        str: [target],
        obj: [worldCitizen, template],
        reflect: [disabled, beBorn, target],
    });
    return OpenBorders;
})();
export { OpenBorders };
define(OpenBorders);
