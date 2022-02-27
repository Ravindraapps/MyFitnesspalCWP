import {v4 as uuid}  from "uuid"

class SliderTile {
    constructor( id, name, desc, img_num){
        this.id  = id;
        this.img_num = img_num;
        this.name = name;
        this.desc = desc;
    }
}

export const sliderData = [
    new SliderTile(
        uuid(),
        "Na'Quisha",
        `"It's truly changed my life and it allowed me to get some direction in my weight loss journey."`,
        1
    ),
    new SliderTile(
        uuid(),
        "Eric",
        `"Once I lost 10 pounds, then another 10 pounds, it blew me away."`,
        2
    ),
    new SliderTile(
        uuid(),
        "Molly",
        `"I love the app because it allows for balance."`,
        3
    ),
    new SliderTile(
        uuid(),
        "Matt",
        `"I loved how MyFitnessPal could give you a basic rundown of how many calories you needed to lose fat."`,
        4
    ),
    new SliderTile(
        uuid(),
        "Eden",
        `"MyFitnessPal alerted me every day, and that became a reminder to live a healthy life."`,
        5
    ),
    new SliderTile(
        uuid(),
        "Tim",
        `"Keep tracking and you'll find that you'll be able to do more than you could before."`,
        6
    ),
]