function getTestimoniData(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
  
      xhr.open("GET", url, true);
  
      xhr.onload = () => {
        resolve(xhr.response);
      };
  
      xhr.onerror = () => {
        reject("Network Error!");
      };
  
      xhr.send();
    });
  }


async function alltesti (){
    const Testimoni = JSON.parse(await getTestimoniData("https://api.npoint.io/b471ddd47fae55299c05"));

    const testimonialHTML = Testimoni.map((testimonial) => {
        return `<div class="testi-card">
        <p class="author">-${testimonial.author}-</p>
        <img src="${testimonial.image}" class="profilpic-testi" />
        <p class="comment">"${testimonial.comment}"</p>
        </div>`
    })

    document.getElementById("testimonial").innerHTML = testimonialHTML.join("")
}

async function ratingByCup(rating) {
    const Testimoni = JSON.parse(await getTestimoniData("https://api.npoint.io/b471ddd47fae55299c05"));

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