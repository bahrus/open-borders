import {XtallatX} from 'xtal-element/xtal-latx.js';
import {hydrate} from 'trans-render/hydrate.js';

const target = 'target';
const be_born = 'be-born';

export class OpenBorders extends XtallatX(hydrate(HTMLElement)){
    static get observedAttributes(){
        return super.observedAttributes.concat([target]);
    }
    attributeChangedCallback(n: string, ov: string, nv: string){
        switch(n){
            case target:
                this._target = nv;
                break;
            case be_born:
                this._be_born = nv !== null;
        }
        this.onPropsChange();
    }
    _target: string;
    get target(){
        return this._target;
    }
    set target(nv){
        this.attr(target, nv);
    }
    _be_born: boolean;
    get beBorn(){
        return this._be_born;
    }
    _c: boolean;
    connectedCallback(){
        this._c = true;
        this.onPropsChange();
    }
    onPropsChange(){
        if(!this._c || this._disabled || !this._be_born) return;
        
    }
}