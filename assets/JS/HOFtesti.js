const Testimoni = [
    {
        image:
        "https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=600",
        comment:
        "Nothing special",
        author:
        "Nebula",
        rating: 1,
    },
    {
        image:
        "https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&w=600",
        comment:
        "mantap aja, HEHE",
        author:
        "Aurora",
        rating: 4,
    },
    {
        image:
        "https://images.pexels.com/photos/1276429/pexels-photo-1276429.jpeg?auto=compress&cs=tinysrgb&w=600",
        comment:
        "LUAR BINASSSAAAA!!!",
        author:
        "Moon",
        rating:
        5,
    },
    {
        image:
        "https://images.pexels.com/photos/3279307/pexels-photo-3279307.jpeg?auto=compress&cs=tinysrgb&w=600",
        comment:
        "AJIBB BENER!!",
        author:
        "STARS",
        rating: 5,

    },
    {
        image:
        "https://media.istockphoto.com/id/545999322/id/foto/latar-belakang-ilmiah-abstrak-planet-bersinar-di-ruang-angkasa-nebula-dan.jpg?s=612x612&w=0&k=20&c=hhKG3vSwwGe6T7XECernkmCdw_ziqVOJKNyGY3L0JvQ=",
        comment:
        "dabest!!",
        author:
        "Saturn",
        rating: 5,
    }
]

function alltesti (){
    const testimonialHTML = Testimoni.map((testimonial) => {
        return `<div class="testi-card">
        <p class="author">-${testimonial.author}-</p>
        <img src="${testimonial.image}" class="profilpic-testi" />
        <p class="comment">"${testimonial.comment}"</p>
        </div>`
    })

    document.getElementById("testimonial").innerHTML = testimonialHTML.join("")
}

function ratingByCup(rating) {
    const ratingByCup = Testimoni.filter(testimonial => testimonial.rating == rating)
    
    const testimonialHTML = ratingByCup.map((testimonial) => {
        return `<div class="testi-card">
        <p class="author">-${testimonial.author}-</p>
        <img src="${testimonial.image}" class="profilpic-testi" />
        <p class="comment">"${testimonial.comment}"</p>
        </div>`
        
    });
    document.getElementById("testimonial").innerHTML = testimonialHTML.join("")

    if(ratingByCup.length <= 0){
        return document.getElementById("testimonial").innerHTML = "<h1>No one pick this cup</h1>"
    }
}


alltesti();