# teamgantt-link2task

> Bookmarklet to insert a link to highlight the task on TeamGantt

This bookmarklet will insert a link in each task line on TeamGantt. It links to the current page, but scroll to and highlight the task line. Just right click and copy the link to share.

### Result:

![image](http://i.imgur.com/AR6Z2Cc.png)

### How to get it

1. Go to [https://netcell.github.io/teamgantt-link2task/](https://netcell.github.io/teamgantt-link2task/)
2. Drag the bookmarklet link on that page to your bookmark bar.
3. Go to your TeamGantt page and click on that bookmark.
4. Enjoy!

### The bookmarket code:

```js
javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3B%24('.task%5Btask_id%5D').not('.super_quick_add').each(function()%20%7Bvar%20el%20%3D%20%24(this)%3Bvar%20id%20%3D%20el.attr('task_id')%3Bvar%20prevLink%20%3D%20el.children('.get_url')%3BprevLink.remove()%3Bel.prepend('%3Ca%20class%3D%22get_url%22%20href%3D%22'%2Bwindow.location.url%2B'%26onload%3Dhighlight-task%2C'%2Bid%2B'%26%22%20style%3D%22position%3Aabsolute%3B%20left%3A%200%3B%22%3ELink%3C%2Fa%3E')%7D)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()
```

### Raw code without jQuery

```js
$('.task[task_id]').not('.super_quick_add')
		.each(function() {
			var el = $(this);
			var id = el.attr('task_id');
			var prevLink = el.children('.get_url');
			prevLink.remove();
			el.prepend('<a class="get_url" href="'+window.location.url+'&onload=highlight-task,'+id+'&" style="position:absolute; left: 0;">Link</a>')
		})
```
