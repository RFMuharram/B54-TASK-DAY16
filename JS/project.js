var dataProject = [];

function addProject(event) {
    event.preventDefault();

    let title = document.getElementById("title").value;
    let startdate = document.getElementById("startdate").value;
    let enddate = document.getElementById("enddate").value;
    let description = document.getElementById("description").value;
    let checkbox = document.getElementById("technologies").value;
    let image = document.getElementById("input-image").files[0];
    // let imageURL = URL.createObjectURL(image);
    


    if (title === "") {
        return alert("PLEASE ENTERED YOUR TITLE!!")
    } else if (startdate === "") {
        return alert("PLEASE ENTERED THE START DATE!!")
    } else if (enddate === "") {
        return alert("PLEASE ENTERED THE END DATE!!")
    } else if (description === "") {
        return alert("PLEASE ENTERED THE DESCRIPTION!!")
    } else if (checkbox === "") {
        return alert("PLEASE CHOOSE YOUR TECHNOLOGIES!!")
    } else if (image=== "") {
        return alert("PLEASE UPLOAD YOUR IMAGE!!")
    }


    if (enddate < startdate) {
        return alert("E R R O R !!! PLEASE CHECK AGAIN YOUR START DATE AND END DATE!!!!")
    }

    let startDatePart = startdate.split("/")
    let endDatePart = enddate.split("/")

    let formatStartDate = startDatePart[2] + "-" + startDatePart[1] + "-" + startDatePart[0]
    let formatEndtDate = endDatePart[2] + "-" + endDatePart[1] + "-" + endDatePart[0]

    let newStartDate = new Date(formatStartDate)
    let newEndtDate = new Date(formatEndtDate)

    let timeDifference = newEndtDate - newStartDate
    let differenceInDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    let differenceInMonths = Math.floor(differenceInDays / 30.44)
    let differenceInYears = Math.floor(differenceInMonths / 12)

    let duration;

    if (differenceInYears > 0) {
        duration = `${differenceInYears} years`
    } else if (differenceInMonths > 0) {
        duration = `${differenceInMonths} month`
    } else {
        duration = `${differenceInDays} days`
    }

    dataProject.push({
        title: title,
        startdate: startdate,
        enddate: enddate,
        description: description,
        image: image,
        checkbox: checkbox,
        duration: duration
    })

    console.log(dataProject);

  newData()
}

function newData() {
    document.getElementById("div-3").innerHTML = ""

    for (let i = 0; i < dataProject.length; i++) {
        const project = dataProject[i]


        document.getElementById("div-3").innerHTML += `
    <div id="div-3">
     <div class="card">
        <a href="./project.html"><img class="logo" src="${project.image}" alt="dumbways"></a>
            <h2>${project.title}</h2>
            <p class="duration"> Duration : ${project.duration}</p>
            <p>${project.description}</p>
            <div>
            <img
            class="image"
            src="./assets/appstore.png"
            alt="playstore"
          />
          <img
            class="image"
            src="./assets/androidlogo.png"
            alt="android"
          />
          <img class="image" src="./assets/javalogo.png" alt="java" />
            </div>
            <div>
                <button class="edit" id="editbutton">edit</button>
                <button class="delete">delete</button>
            </div>
     </div>
     </div
    
    `
    }

}