document.getElementById('run').addEventListener('click', async function() {
	try {
  		let posts = await window.lib.getPosts();
      	posts.forEach(async function (post) {
          	try {
        	post.comment = await window.lib.getComments(post.id);
            } catch (err) {
      		console.log("Y a une erreur avec l'ID", err);
            }
        });
    console.log(posts);
    } catch(err) {
    console.log("Y A UNE IROUR", err);
    }
});




/* FARZOUM L ALIGATOR


document.getElementById('run').addEventListener('click', async () => {
    try {
        let posts = await window.lib.getPosts();
        if (posts.length === 0)
            return (console.log("Don't found any post..."));

        posts.forEach(async (post) => {
            try {
                post.comments = await window.lib.getComments(post.id);
            } catch (err) {
                console.log("Can't getComments for post " + post.id + "... Error:", err);
            }
        });
        console.log(posts);
    } catch (err) {
        console.log("Can't getPosts... Error:", err);
    }
});