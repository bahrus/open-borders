import {XtallatX, define, AttributeProps} from 'xtal-element/xtal-latx.js';
import {hydrate} from 'trans-render/hydrate.js';
import { cd } from 'xtal-shell/cd.js';

const templTarget = Symbol();

const linkTemplate = ({disabled, self, beBorn}: OpenBorders) => {
    if(disabled || !beBorn) return;
    const templ = self.querySelector('template');
    if(templ === null){
        setTimeout(() =>{
            linkTemplate(self);
        }, 50);
        return;
    }
    self.template = templ;
}
const linkWorldCitizen = ({disabled, beBorn, target, template, self}: OpenBorders) =>{
    if(disabled || template === undefined || beBorn !== true || target === undefined) return;
    if((<any>template)[templTarget] === target) return;
    (<any>template)[templTarget] = target;
    const targetEl = cd(self, target);
    if(self.worldCitizen){
        targetEl.appendChild(self.worldCitizen)
    }else{
        targetEl.appendChild(template.content.cloneNode(true));
        self.worldCitizen = targetEl.lastElementChild as HTMLElement;
    }

}

export class OpenBorders extends XtallatX(hydrate(HTMLElement)){
    static is = 'open-borders';

    static attributeProps = ({target, beBorn, worldCitizen, template, disabled}: OpenBorders) => ({
        bool: [disabled, beBorn],
        str: [target],
        obj: [worldCitizen, template],
        reflect: [disabled, beBorn, target],
    } as AttributeProps);

    propActions = [
        linkTemplate,
        linkWorldCitizen
    ];

    target: string | undefined;

    beBorn: boolean;

    worldCitizen: HTMLElement | undefined;

    template: HTMLTemplateElement | undefined;

    disconnectedCallback(){
        if(this.worldCitizen !== undefined){
            this.worldCitizen.remove();
        }
    }
    
}
define(OpenBorders);