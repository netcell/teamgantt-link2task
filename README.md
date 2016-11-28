# teamgantt-link2task

> Bookmarklet to insert a link to highlight the task on TeamGantt

This bookmarklet will insert a link in each task line on TeamGantt. It links to the current page, but scroll to and highlight the task line. Just right click and copy the link to share.

![image](http://i.imgur.com/AR6Z2Cc.png)

The bookmarket code:

```js
javascript:!function(){function a(){$(".task[task_id]").not(".super_quick_add").each(function(){var a=$(this),b=a.attr("task_id"),c=a.children(".get_url");c.remove(),a.prepend(\'<a class="get_url" href="\'+window.location.href+\'&onload=highlight-task,\'+b+\'&" style="position:absolute; left: 0;">Link</a>\')})}($=window.jQuery)?a():(script=document.createElement("script"),script.src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js",script.onload=a,document.body.appendChild(script))}()
```
