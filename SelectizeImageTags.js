/**
 * Selectize
 * ============================================
 */

function initSelectizeImageTags() {

    for(var name in config.SelectizeImageTags) {

        // get inputfields
        var thisTagsFields = $("." + name);
        // get inputfields inside repeaters
        var thisRepeaterTagsFields = $("li[class*='" + name + "_repeater']").filter(function() {
            var re = new RegExp("\\b" + name + "_repeater");
            return this.className.match(re);
        });
        // get the inputs inside those inputfields
        var thisTagsInputs = thisTagsFields.add(thisRepeaterTagsFields).find("input[name^='tags_']");

        // at this point, name is our fieldName, and field holds the selectize init object
        var field = config.SelectizeImageTags[name];

        if(field.create == true) {

            // each image has it's own tags field...
            thisTagsInputs.each(function() {

                var thisTagsField = $(this);
                var thisTags = thisTagsField.val();

                if(thisTags) {
                    var thisTagsArr = thisTags.split(" ");
                    $(thisTagsArr).each(function(i, ttag) {
                        if(lookup(field.options, "value", ttag)) return;
                        field.options.push ({ "value": ttag, "text": ttag});
                    });
                }

            });

        } // end if value.create

        thisTagsInputs.selectize(field);

    }
}

function lookup(array, prop, value) {
    for (var i = 0, len = array.length; i < len; i++)
        if (array[i] && array[i][prop] === value) return array[i];
}

// Init on DOM ready
$(document).ready(function () {
    initSelectizeImageTags();
});

// Init on AJAX-loading of image field
$(document).on('reloaded', '.InputfieldImage', function() {
    initSelectizeImageTags();
});

// Init on image uploaded
$(document).on('AjaxUploadDone', '.gridImages', function() {
    initSelectizeImageTags();
});
