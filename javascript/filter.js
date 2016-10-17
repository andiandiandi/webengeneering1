var filter = function(){
	var keyword = document.getElementById("searchbar").value;
	var posts = document.getElementsByClassName("blog_post");
	for(post in posts)
		if(posts[post].children !== undefined)
			if(posts[post].children[0].text.toLowerCase().indexOf(keyword.toLowerCase()) === -1)
				 posts[post].style.display = 'none';
			else
				posts[post].style.display = 'block';

};
