$(function() {
    var $ages = $('#ages');
    var $agesRange = $('#ages-range');

    $("#ages-range").slider({
        range: true,
        min: 0,
        max: 90,
        values: [25, 85],
        slide: function(event, ui) {
            $ages.val('$' + ui.values[0] + ' -$' + ui.values[1]);
        }
    });
    $ages
        .val('$' + $agesRange.slider('values', 0) +
            ' -$' + $agesRange.slider('values', 1));
});