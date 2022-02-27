import {v4 as uuid} from "uuid";

class TileData {
    constructor(id,title, price,type, offer, desc ){
        this.id = id;
        this.title = title;
        this.price = price;
        this.type = type;
        this.offer = offer;
        this.desc = desc;
    }
}

export const subsArray = [

    new TileData(
        uuid(),
        "ANNUAL",
        79.99,
        "yearly",
        "SAVE 67%",
        "$79.99 billed yearly after free trial ends."
    ),
    new TileData(
        uuid(),
        "MONTHLY",
        19.99,
        "monthly",
        "",
        "$19.99 billed monthly after free trial ends."
    )
]