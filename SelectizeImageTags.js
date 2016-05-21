/**
 * Selectize
 * ============================================
 */

function lookup(array, prop, value) {
    for (var i = 0, len = array.length; i < len; i++)
        if (array[i] && array[i][prop] === value) return array[i];
}

$(document).ready(function () {

    for(var name in config.SelectizeImageTags) {
        // at this point, name is our fieldName, and field holds the selectize init object
        var field = config.SelectizeImageTags[name];

        if(field.create == true) {
            // each image has it's own tags field...
            thisTagsFields = $("." + name + " input[name^='tags_']");
            thisTagsFields.each(function() {

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

        $("." + name + " input[name^='tags_']").selectize(field);

    }

});


