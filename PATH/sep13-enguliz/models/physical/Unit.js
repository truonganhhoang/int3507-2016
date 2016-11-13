/**
 * Created by Thinking on 09/22/2016.
 */
function Unit(title, subTitle, thumbnail, threads, views, categoryId, createdDate) {
    this.unitTitle = title;
    this.unitSubTitle = subTitle;
    this.unitThumbnail = thumbnail;
    this.unitThreads = threads;
    this.unitViews = views;

    this.createdDate = createdDate;
    this.categoryIdRef = categoryId;
}

module.exports = {
    init: (title, subTitle, thumbnail, threads, views, categoryId, createdDate) => {
        return new Unit(title, subTitle, thumbnail, threads, views, categoryId, createdDate);
    }
}