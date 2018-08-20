export class PortfolioItem {

    constructor() {
        this._id = '';
        this.name = '';
        this.url = '';
        this.image = '';
        this.description = '';
        this.writeup = '';
        this.techStack = [];
    }

    _id: string;
    name: string;
    url: string;
    image: string;
    description: string;
    writeup: string;
    techStack?: Array<string>;
}