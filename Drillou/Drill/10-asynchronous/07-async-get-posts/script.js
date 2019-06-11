document.getElementById('run').addEventListener('click', async () => {
	try {
  		let posts = await window.lib.getPosts();
      	console.log(posts);
    }catch(err) {
      console.log("Y A UNE IROUR", err);
    }
});

