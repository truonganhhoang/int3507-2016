/**
 * Created by Thinking on 09/22/2016.
 */
function Unit(title, subTitle, thumbnail, threads, views, categoryId, createdDate, time) {
    this.unitTitle = title;
    this.unitSubTitle = subTitle;
    this.unitThumbnail = thumbnail;
    this.unitThreads = threads;
    this.unitViews = views;
    this.unitTime = time;

    this.createdDate = createdDate;
    this.categoryIdRef = categoryId;
}

module.exports = {
    init: (title, subTitle, thumbnail, threads, views, categoryId, createdDate) => {
        return new Unit(title, subTitle, thumbnail, threads, views, categoryId, createdDate);
    }
}