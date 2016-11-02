"use strict";
/**
 * Created by Thinking on 09/24/2016.
 */
var Category = (function () {
    function Category(categoryId, categoryName, categoryThumbnail, categoryItems) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.categoryThumbnail = categoryThumbnail;
        this.categoryItems = categoryItems;
    }
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=category.model.js.map