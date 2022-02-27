class TableData {
    constructor(id, name, desc, free, premium) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.free = free;
        this.premium = premium

    }
}
export const tableData = [

    new TableData(
        1,
        "Nutrition Tracking",
        "Log your food from our extensive database.",
        true,
        true
    ),
    new TableData(
        2,
        "Customizable Carbs, Protein & Fat Goals",
        "Track your macros by gram or percentage.",
        false,
        true
    ),
    new TableData(
        3,
        "Guided Fitness & Nutrition Plans",
        "Get coaching and content to achieve your goals.",
        false,
        true
    ),
    new TableData(
        4,
        "Custom Home Screen Dashboard",
        "Reach goals faster by seeing what’s important to you.",
        false,
        true
    ),
    new TableData(
        5,
        "Food Analysis & Insights",
        "Follow your progress through your data.",
        false,
        true
    ),
    new TableData(
        6,
        "Meals & Recipes",
        "Learn how to eat with your goals in mind.",
        false,
        true
    ),
    new TableData(
        7,
        "Ad-Free Experience",
        "Focus on your fitness and nutrition without ads.",
        false,
        true
    ),
    new TableData(
        8,
        "Subtract Exercise Calories",
        "Adjust your day's calorie goal automatically.",
        false,
        true
    ),
    new TableData(
        9,
        "Quick-Add Carbs, Fat & Protein",
        "Log your meals quickly and easily.",
        false,
        true
    ),
    new TableData(
        10,
        "File Export",
        "Download CSV files of all your progress.",
        false,
        true
    ),


]

// console.log(tableData)