export type ProductType = {
    id:  number | null | undefined;
    name:String;
    shortDescription:String;
    description:String;
    price:number;
    sizes:string[];
    colors:string[];
    images:Record<string, string>
}

export type ProductsType = ProductType[]