class Destination{
    name;
    images = [];
    dateModifiled;

    constructor(name){
        this.name = name;
        this.dateModified = new Date().toISOString();
    }

    set newImage(image){
        this.images.push(image);
        this.dateModified = new Date().toISOString();
    }

    get info(){
        return`
        Địa điểm: ${this.name},
        Review địa điểm: ${this.images},
        Được cập nhật: ${this.dateModified}
        `
    }
}

export{Destination};