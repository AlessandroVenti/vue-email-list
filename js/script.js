function apiEmail() {
  for (let i = 0; i < 10; i++) {
    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/mail",
      method: 'GET',
      success: function(data) {
          let singleEmail = data.response;
          $('#jslist').append(`<li>${singleEmail}</li>`); 
          console.log(singleEmail);
      },
      error: function() {
          console.log('error');
      } 
    });
  };
}

// function view(singleEmail) {
//   $('#jslist').append(`<li>${singleEmail}</li>`); 
// }

$(document).ready(apiEmail);