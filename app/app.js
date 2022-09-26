// $(document).ready(function() {
//     console.log("ready");
//     console.log("this is another change");
// });

// $(window).on("load", function (){
// console.log("loaded");
// // $(".modal").css("display", "none");
// Swal.fire('You Rock!')
// // Swal.fire({
// //     title: 'You Rock!',
// //     text: 'Modal with a custom image.',
// //     imageUrl: 'https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg',
// //     imageWidth: 300,
// //     imageHeight: 200,
// //     imageAlt: 'Custom image',
// //   })

// });

// // function fire(paramObj: Object){

// // }

function init () {
    $("#submit").on("click", function (e){
e.preventDefault();
let fn = $("#fName").val();
let ln = $("#lName").val();

if (fn != "" && ln != "") {
    console.log("You need to enter first or last name")
}else{
    alert("you need to enter your first or last name")
}
    });
}

$(document).ready(function () {
    init();
});

