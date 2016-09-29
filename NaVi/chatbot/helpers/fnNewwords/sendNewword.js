'use strict';

module.exports = function (recipientId) {
    // New words functionality is not implemented yet.
    // Send error message instead
    require('../sendErrorMessage')(recipientId, "Tính năng Học từ mới đang được phát triển. Bạn thử lại sau nhé!");

    // New words functionality should be implemented here
};