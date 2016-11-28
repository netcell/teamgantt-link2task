var urlPath = location.protocol+'//'+location.hostname+(location.port?":"+location.port:"")+location.pathname;

var search = location.search ? location.search.slice(1) : '';

var currentId = search.match(/onload=highlight-task,[0-9]+&*/);
if (currentId) {
    currentId = currentId[0].match(/[0-9]+/)[0];
}

search = search.replace(/onload=highlight-task,[0-9]+&*/g, '');

function getLink(id) {
    return urlPath + '?onload=highlight-task,' + id + '&' + search;
}

function addLink(el) {
    if (!el) return;
    el = $(el);
    var id = el.attr('task_id');

    var prevLink = el.children('.get_url');
        prevLink.remove();
    var url = getLink(id);

    if (currentId) {
        if (id == currentId) {
            el.find('.quick_edit').click();
        }
    }

    el.prepend('<a class="get_url" href="'+url+'" style="position:absolute; left: 0;">Link</a>');
}

function tryAddLink(target) {
    var el = $(target);
    if (el.hasClass('task') && !el.hasClass('super_quick_add') && el.attr('task_id')) {
        addLink(el);
    }
}

function alterLink(target) {
    var el = $(target);

    if (el.hasClass('task')) {
        let id = el.attr('task_id');
        if (!id) return;
        var link = el.children('.get_url');
        if (!link) return;
        var url = getLink(id);
        link.attr('href', url);
    }
}

$(function() {

    $('.task[task_id]').not('.super_quick_add').each(addLink);

    $(document).bind('DOMNodeInserted', function(e) {
        tryAddLink(e.target)
    });

    var callback = function (mutations) {
        mutations.forEach(function (mutation) {
            var target = mutation.target;

            switch (mutation.type) {
                case 'attributes':
                    if (mutation.attributeName == 'task_id')
                        tryAddLink(target);
            }
        });
    };

    var mo = new MutationObserver(callback);
        mo.observe(document.documentElement, {
            childList: true,
            attributes: true,
            characterData: false,
            subtree: true,
            attributeOldValue: true,
            characterDataOldValue: false,
        });

})