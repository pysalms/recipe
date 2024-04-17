export class Recipe {
    public name: string;
    public desc: string;
    public imgURL: string
    constructor(name: string, desc: string, imgURL: string) {
        this.name = name;
        this.desc = desc;
        this.imgURL = imgURL;
    }
}