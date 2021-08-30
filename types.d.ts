export interface OpenBordersProps {
    roamingElement: Element;
    beBorn: boolean;
    disabled: boolean;
    target: string;
    template: HTMLTemplateElement;
    isC: boolean;
}

export interface OpenBordersActions {
    findTemplate(self: this): void;
    createRoamingElement(self: this): void;
}