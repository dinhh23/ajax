// jQuery ready function
$(() => {

    // reading the database (get method)
    $.getJSON("http://localhost:8080/api/users/1")
        .done(users => {
            console.log(users);
        });

    console.log("After the getJSON call");

})
  