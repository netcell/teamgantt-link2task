# teamgantt-link2task

![image](http://i.imgur.com/AR6Z2Cc.png)

> **Update:** Chrome extension that allows you: get link to a task, and open the task quick edit screen when you go to that link!

## Chrome Extension

1. Get `TeamGantt-Link2Task.crx` at the [latest release](https://github.com/netcell/teamgantt-link2task/releases/latest);
2. Navigate to [chrome://extensions/](chrome://extensions/).
3. Ensure the checkbox labeled `Developer mode` is enabled.
4. Drag and drop `TeamGantt-Link2Task.crx` file into the Extensions window.
5. Select `Add Extension`.

## Bookmarklet

> Bookmarklet to insert a link to highlight the task on TeamGantt

This bookmarklet will insert a link in each task line on TeamGantt. It links to the current page, but scroll to and highlight the task line. Just right click and copy the link to share.

1. Go to [https://netcell.github.io/teamgantt-link2task/](https://netcell.github.io/teamgantt-link2task/)
2. Drag the bookmarklet link on that page to your bookmark bar.
3. Go to your TeamGantt page and click on that bookmark.
4. Enjoy!

### The bookmarket code:

```js
javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3B%24('.task%5Btask_id%5D').not('.super_quick_add').each(function()%20%7Bvar%20el%20%3D%20%24(this)%3Bvar%20id%20%3D%20el.attr('task_id')%3Bvar%20prevLink%20%3D%20el.children('.get_url')%3BprevLink.remove()%3Bvar%20search%20%3D%20location.search%20%3F%20location.search.slice(1)%20%3A%20''%3Bsearch%20%3D%20search.replace(%2Fonload%3Dhighlight-task%2C%5B0-9%5D%2B%26*%2Fg%2C%20'')%3Burl%20%3D%20location.protocol%2B'%2F%2F'%2Blocation.hostname%2B(location.port%3F%22%3A%22%2Blocation.port%3A%22%22)%2Blocation.pathname%2B'%3Fonload%3Dhighlight-task%2C'%2Bid%2B'%26'%2Bsearch%3Bel.prepend('%3Ca%20class%3D%22get_url%22%20href%3D%22'%2Burl%2B'%22%20style%3D%22position%3Aabsolute%3B%20left%3A%200%3B%22%3ELink%3C%2Fa%3E')%7D)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```

### Raw code without jQuery

```js
$('.task[task_id]').not('.super_quick_add')
		.each(function() {
			var el = $(this);
			var id = el.attr('task_id');
			var prevLink = el.children('.get_url');
			prevLink.remove();
			var search = location.search ? location.search.slice(1) : '';
			search = search.replace(/onload=highlight-task,[0-9]+&*/g, '');
			url = location.protocol+'//'+location.hostname+(location.port?":"+location.port:"")+location.pathname+'?onload=highlight-task,'+id+'&'+search;
			el.prepend('<a class="get_url" href="'+url+'" style="position:absolute; left: 0;">Link</a>')
		})
```
