var form = document.getElementById("myForm");

form.addEventListener('submit', function(e){
  e.preventDefault();

  var search = document.getElementById("search").value;

  var realName = search.split(' ').join('');

  fetch("https://api.github.com/users/" + realName)
  .then((result) => result.json())
  .then((data) => {

    document.getElementById("result").innerHTML=`
    <a target="_blank" href="https://www.github.com/${realName}" class="link-danger">
	<img src="${data.avatar_url} class="card-img-top" style="width: 100%; height: 15vw; object-fit: cover;" "/><br>
	<div class="card-body" style="background-color:#000000; color:#7fffd4;">
		<br>View Github Profile
		</a><br/><br/>
		<p>Name : ${data.name}</p>
		<p>Bio : ${data.bio}</p>
		<p>Followers : ${data.followers}</p>
		<p>Following : ${data.following}</p>
	</div>
    `
  })
});
