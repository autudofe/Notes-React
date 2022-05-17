import {CATEGORY} from "../../../../reducers/helpers";



export const getStatistic = (data) => {
    let statistic = CATEGORY.map(category => ({
        category,
        archived: data.reduce((acc, note) => note.category === category ? acc + Number(note.archive) : acc, 0),
        active: data.reduce((acc, note) => note.category === category ? acc + Number(!note.archive) : acc, 0)
    }));


    return statistic;
}