declare class CreateCmment {
    orderNumber: number;
    cList: any[];
    list: any[];
    config: {
        time: number;
        useTemplate: boolean;
        template: never[];
        orderPlay: boolean;
    };
    constructor(option: {
        time: number;
        useTemplate: boolean;
        template: [];
    });
    init(): void;
    clear(): void;
    create(): void;
    getNumber(): number;
    checkList(list: any): void;
    random(min: number, max: number): number;
    isArray(data: any): boolean;
    isString(data: any): boolean;
}
export default CreateCmment;
