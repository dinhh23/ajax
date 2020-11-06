// jQuery ready function
$(() => {
    // call ajax and pass thru JSON object

    var user = {
        id: 0, userName: "xxxx", passWord: "xxxx",
        firstName: "xxx", lastName: "xxx",
        phoneNumber: "123", email: "123@help.com",
        reviewer: true, admin: true
    };

    $.ajax({
        method: "POST",
        url: "http://localhost:8080/api/users/",
        data: JSON.stringify(user), 
        contentType: "application/json"
    })
        .done(res => {                      //if ajax successful
            console.log(res);
            getAll();
        })
        .fail(err => {                      //if ajax fail
            console.error(err); 
        });

    const getAll = () => {
        // reading the database (get method)
        $.getJSON("http://localhost:8080/api/users/")
            .done(users => {
                console.log(users);
            });
    }
    console.log("After the getJSON call");

})
