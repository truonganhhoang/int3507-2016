/**
 * Created by Thinking on 09/22/2016.
 */
function Unit(title, subTitle, thumbnail, threads, views, categoryId, createdDate, time, type) {
    this.unitTitle = title;
    this.unitSubTitle = subTitle;
    this.unitThumbnail = thumbnail;
    this.unitThreads = threads;
    this.unitViews = views;
    this.unitTime = time;
    this.unitType = type;

    this.createdDate = createdDate;
    this.categoryIdRef = categoryId;

}

module.exports = {
    init: (title, subTitle, thumbnail, threads, views, categoryId, createdDate, time, type) => {
        return new Unit(title, subTitle, thumbnail, threads, views, categoryId, createdDate, time, type);
    }
}