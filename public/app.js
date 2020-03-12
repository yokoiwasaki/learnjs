'use strict';
var learnjs = {};
learnjs.showView = function() {
    return $('<div class="problemView">') .text('Coming soon!');
}

learnjs.showView = function(hash) {
    '#problem': learnjs.problemView
};
var hashParts = hash.split("-");
var viewFn = routes[hashParts[0]];
if (viewFn) {
    $('.view-container') .empty() .append(viewFn(hashParts[1]))
}
    }

learnjs.problemView = function(problemNumber) {
    var title = 'Problem #' + problemNumber + ' Coming soon!';
    return $('<div class="problem-view'>) .text(title);
};

learnjs.appOnReady = function() {
    learnjs.showView(window.location.hash);
}

learnjs.appOnReady = function() {
    window.onhashchange = function() {
    learnjs.showView(window.location.hash);
    };
    learnjs.showView(window.location.hash);
}