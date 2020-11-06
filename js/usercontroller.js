const baseurl = "http://localhost:8080/api/users/";

$(() => {
    $("#pkbutton").on("click", () => {
        getPk();
    });
})

const getAll = () => {
    $.getJSON(`${baseurl}`)
    .done(res => {
        console.log(res);
        display(res);
    });
}

const getPk = () => {
    let id = $("#ppk").val();
    $.getJSON(`${baseurl}${id}`)
        .done(res => {
            console.log(res);
            displaySingle(res);
        });
}

const displaySingle = (user) => {
    $("#pid").val(user.id);
    $("#pusername").val(user.userName);
    $("#pfirstname").val(user.firstName);
    $("#plastname").val(user.lastName);
    $("#ppassword").val(user.passWord);
    $("#pphonenumber").val(user.phoneNumber);
    $("#pemail").val(user.email);
    $("#previewer").val(user.reviewer);
    $("#padmin").val(user.admin);


}

const displayAll = (users) => {

}

// user.userName/firstName is from constant variables from Java
// tr/tdId/tdusername is anything name in jQuery (This Page)
const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        let tdusername = $(`<td>${user.userName}</td>`);
        let tdfirstname = $(`<td>${user.firstName}</td>`);
        let tdlastname = $(`<td>${user.lastName}</td>`);
        let tdpassword = $(`<td>${user.passWord}</td>`);
        let tdphonenumber = $(`<td>${user.phoneNumber}</td>`);
        let tdemail = $(`<td>${user.email}</td>`);
        let tdreviewer = $(`<td>${user.reviewer}</td>`);
        let tdadmin = $(`<td>${user.admin}</td>`);
        
        // this match the variables names from jQuery
        tr.append(tdId)
        .append(tdusername).append(tdfirstname).append(tdlastname)
        .append(tdpassword).append(tdphonenumber).append(tdemail)
        .append(tdreviewer).append(tdadmin);
        tbody.append(tr);
    }
}

// getAll();