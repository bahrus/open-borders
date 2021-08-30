import {XE} from 'xtal-element/src/XE.js';
import {OpenBordersActions, OpenBordersProps} from './types';
import {cd} from 'xtal-shell/cd.js';

export class OpenBordersCore extends HTMLElement{
    findTemplate({}: this){
        const templ = this.querySelector('template');
        if(templ === null){
            setTimeout(() =>{
                this.findTemplate(this);
            }, 50);
            return;
        }
        this.template = templ;        
    }

    createRoamingElement({target, template, roamingElement}: this){
        const targetEl = cd(this, target);
        if(roamingElement){
            targetEl.appendChild(roamingElement)
        }else{
            targetEl.appendChild(template.content.cloneNode(true));
            this.roamingElement = targetEl.lastElementChild;
        }
        
    }

    disconnectedCallback(){
        if(this.roamingElement !== undefined){
            this.roamingElement.remove();
        }
    }
}

export interface OpenBordersCore extends OpenBordersProps{}

const xe = new XE<OpenBordersProps, OpenBordersActions>({
    config:{
        tagName: 'open-borders',
        propDefaults:{
            beBorn: false,
            target: '',
            disabled: false,
            isC: true,
        },
        actions:{
            findTemplate:{
                ifAllOf: ['isC'],
                ifNoneOf: ['disabled']
            },
            createRoamingElement:{
                ifAllOf: ['template', 'target', 'beBorn'],
                ifNoneOf: ['disabled']
            }
        },
        style:{
            display: 'none'
        }
    },
    superclass: OpenBordersCore
});
