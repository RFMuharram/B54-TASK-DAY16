class Testimoni{
    image =""
    comment =""
    author =""

    constructor(image, comment, author){

        this.image = image
        this.comment = comment
        this.author = author
    }

    html() {
        return `<div class="testi-card">
        <p class="author">-${this.author}-</p>
        <img src="${this.image}" class="profilpic-testi" />
        <p class="comment">"${this.comment}"</p>
        </div>`
    }

}

const Testimoni1 = new Testimoni("https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=600", "Nothing Special", "Nebula")
const Testimoni2 = new Testimoni("https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&w=600", "mantap aja, hehe", "Aurora")
const Testimoni3 = new Testimoni("https://images.pexels.com/photos/1276429/pexels-photo-1276429.jpeg?auto=compress&cs=tinysrgb&w=600", "LUAR BINASSSAAAA!!!", "Moon")

const Testimonial = [Testimoni1, Testimoni2, Testimoni3]


let testimonialHTML = ""

for(index = 0; index < Testimonial.length; index++) {
    testimonialHTML += Testimonial[index].html()
}

document.getElementById("testimonial").innerHTML = testimonialHTML