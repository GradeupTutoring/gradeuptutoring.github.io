


/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    autoplaySpeed: 100,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Password//
document.getElementById("downloadLink").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default action of the link

    // Prompt the user for the password
    var password = prompt("Enter the password:");

    // Check if the password is correct
    if (password === "gradeup_za") {
        // Redirect the user to the download link
        window.location.href = "https://drive.google.com/drive/folders/1TV43iTQf2yj9oZHa4FDhZ51sh8jV6jZ-?usp=sharing";
    } else {
        alert("Incorrect password. Please try again. Email 'gradeup.tutoring@hotmail.com' if you forgot your password.");
    }
});

