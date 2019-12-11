import { XtallatX } from 'xtal-element/xtal-latx.js';
import { hydrate } from 'trans-render/hydrate.js';
import { cd } from 'xtal-shell/cd.js';
import { define } from 'trans-render/define.js';
const target = 'target';
const be_born = 'be-born';
export class OpenBorders extends XtallatX(hydrate(HTMLElement)) {
    static get is() { return 'open-borders'; }
    static get observedAttributes() {
        return super.observedAttributes.concat([target, be_born]);
    }
    attributeChangedCallback(n, ov, nv) {
        switch (n) {
            case target:
                this._target = nv;
                break;
            case be_born:
                this._be_born = nv !== null;
                break;
        }
        this.onPropsChange();
    }
    get target() {
        return this._target;
    }
    set target(nv) {
        this.attr(target, nv);
    }
    get beBorn() {
        return this._be_born;
    }
    set beBorn(nv) {
        this.attr(be_born, nv, '');
    }
    connectedCallback() {
        this._c = true;
        this.propUp([target, 'beBorn']);
        this.onPropsChange();
    }
    disconnectedCallback() {
        if (this._worldCitizen !== undefined) {
            this._worldCitizen.remove();
        }
    }
    onPropsChange() {
        if (!this._c || this._disabled || !this._be_born)
            return;
        const templ = this.querySelector('template');
        if (templ === null) {
            setTimeout(() => {
                this.onPropsChange();
            }, 50);
            return;
        }
        if (this._target !== undefined) {
            const targetEl = cd(this, this._target);
            targetEl.appendChild(templ.content.cloneNode(true));
            this._worldCitizen = targetEl.lastElementChild;
        }
    }
}
define(OpenBorders);
