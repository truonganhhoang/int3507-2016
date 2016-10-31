/**
 * Created by Thinking on 09/22/2016.
 */
function Category(name, thumbnail) {
    this.categoryName = name;
    this.categoryThumbnail = thumbnail;
}

module.exports = {
    init: (name, thumbnail) => { return new Category(name, thumbnail);}
}