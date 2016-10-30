/**
 * Created by Thinking on 09/22/2016.
 */
function RespCategory(categoryId, categoryName, categoryThumbnail, categoryItems) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.categoryThumbnail = categoryThumbnail;
    this.categoryItems = categoryItems;
}

function RespItem(unitId, unitTitle, unitSubTitle, unitThumbnail, unitViews, unitActionUrl) {
    this.unitId = unitId;
    this.unitTitle = unitTitle;
    this.unitSubTitle = unitSubTitle;
    this.unitThumbnail = unitThumbnail;
    this.unitViews = unitViews;
    this.unitActionUrl = unitActionUrl;
}

module.exports = {
    resCategory: (categoryId, categoryName, categoryThumbnail, categoryItems) => { 
        return new RespCategory(categoryId, categoryName, categoryThumbnail, categoryItems);
    },
    resItem: (unitId, unitTitle, unitSubTitle, unitThumbnail, unitViews, unitActionUrl) => {
        return new RespItem(unitId, unitTitle, unitSubTitle, unitThumbnail, unitViews, unitActionUrl);
    }
}