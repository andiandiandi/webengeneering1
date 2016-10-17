var filter = function(){
	//var keyword = document.getElementById("searchbar").value;
	var keyword = "asdf"
	var posts = document.getElementsByClassName("blog_post");
	for(post in posts)
		if(posts[post].tagName=="DIV" && posts[post] != undefined)
			if(posts[post].firstElementChild.children[0].innerText.includes(keyword))
				posts[post].style.visibility = "visible";
			else
				posts[post].style.visibility = "hide";
};