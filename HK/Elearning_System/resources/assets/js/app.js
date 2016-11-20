window.$ = window.jQuery = require('jquery');
require('bootstrap-sass');

// add word answer
$(document).ready(function () {
    var i = 0;
    var tmp = 0;

    $('#add').click(function () {
        if ($('div[class*=answer]').length > 4) {
            alert($(this).attr('data-msg-add-more-word'));
        } else {
            var rowAnswer = $("<div class='answer row' />");
            var md1 = $("<div class='col-md-6' />");
            var md2 = $("<div class='col-md-6' />");
            var formGroup1 = $("<div class='form-group' />");
            var formGroup2 = $("<div class='form-group' />");
            var content = $("<input class='form-control content-answer' placeholder='Please Enter Answer Content' name=\"word[][answer]\" type='text' id='' />");
            var labelCorrect = $("<label for='correct' style=\"margin-left: 20px;\" >Is Correct</label>");
            var inputCorrectHidden = $("<input name=\"word[][correct]\" type='hidden' id='correct' value='0' style=\"margin-left: 20px;\" />");
            var inputCorrect = $("<input name=\"word[][correct]\" type='radio' id='correct' value='1' style=\"margin-left: 20px;\" />");
            var removeButton = $("<input type=\"button\" class=\"remove btn btn-danger\" value=\"Remove\" style=\"margin-left: 40px;\"/>");
            removeButton.click(function () {
                $(this).parent().parent().parent().remove();
            });
            formGroup1.append(content);
            formGroup2.append(labelCorrect);
            formGroup2.append(inputCorrectHidden);
            formGroup2.append(inputCorrect);
            formGroup2.append(removeButton);
            md1.append(formGroup1);
            md2.append(formGroup2);
            rowAnswer.append(md1);
            rowAnswer.append(md2);
            $('.answerDiv').append(rowAnswer);
            i++;
        }
    });

    var utils = (function() {
        var validateContent = function(args) {
            if (args == null || typeof args == 'undefined') {
                throw new Exception('not valid input for validate');
            } else {
                var _eleArray = args;

                if (_eleArray.length == 0) {
                    return false;
                } else {
                    var _check = true;

                    for (var i = 0; i < _eleArray.length; i++) {
                        var _e = $(_eleArray[i]);
                        if (_e.length > 0) {
                            if (!_e.val()) {
                                _check = false;
                                break;
                            }
                        } continue;

                        }
                    }
                    return _check;
                }
            }

        return {
            validateContent : validateContent
        }
    }())

    // Check radio choose true answer and content
    $('#form-add-word').submit(function(event) {
        if (!utils.validateContent($('input[name="word[][answer]"]'))) {
            alert($(this).attr('required_content'));
            return false;
        } else if (!$("input[type='radio']:checked").is(":checked")) {
            alert($(this).attr('required_true_word'));
            $(this).find('button[type=submit]').prop('disabled', true);
            return false;
        }
        return true;

    });
    var interval = setInterval(function() {
        var len =  $('input[type=radio]').length;

        if (len > 0) {
            $('input[type=radio]').on('change', function(e) {
                $('#form-add-word').find('button[type=submit]').prop('disabled', false);
            });
            clearInterval(this);
        }
    }, 200);

    //check all word when do lesson
    $('#do-lesson').submit(function(e) {
        if ($('input[type=radio]:checked').length == $('.lesson-word').length) {
            return true;
        } else {
            alert($(this).attr('required_complete_lesson'));
            return false;
        }
    });
});
