/**
 * Created by Thinking on 09/22/2016.
 */
function Unit(title, subTitle, thumbnail, threads, views, categoryId, createdDate, time, type, attach) {
    this.unitTitle = title;
    this.unitSubTitle = subTitle;
    this.unitThumbnail = thumbnail;
    this.unitThreads = threads;
    this.unitViews = views;
    this.unitTime = time;
    this.unitType = type;
    this.attach = attach;
    
    this.createdDate = createdDate;
    this.categoryIdRef = categoryId;

}

module.exports = {
    init: (title, subTitle, thumbnail, threads, views, categoryId, createdDate, time, type, attach) => {
        return new Unit(title, subTitle, thumbnail, threads, views, categoryId, createdDate, time, type, attach);
    }
}