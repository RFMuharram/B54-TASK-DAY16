let dataProject = [];

function addBlog(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const startdate = document.getElementById("startdate").value;
    const enddate = document.getElementById("enddate").value;
    const description = document.getElementById("description").value;
    const checkbox = document.getElementById("technologies").value;
    const imageInput = document.getElementById("input-image");
   
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
    } else if (!imageInput.files || imageInput.files.length === 0) {
        return alert("PLEASE UPLOAD YOUR IMAGE!!")
    }


    if (enddate < startdate) {
        return alert("E R R O R !!! PLEASE CHECK AGAIN YOUR START DATE AND END DATE!!!!")
    }

    const image = URL.createObjectURL(imageInput.files[0]);


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
        <div
        class="card d-flex flex-row my-5 mx-auto w-75 border-0"
        style="
          background-color: #7b3535;
          border-radius: 10px;
          box-shadow: 2px 2px 20px black;
        "
        id="div-3"
      >
        <img
          src="${project.image}"
          class="card-img-top w-50"
          alt="content photo"
          style="border-top-left-radius: 10px; border-top-right-radius: 0px; border-bottom-left-radius: 10px"
        />
        <div class="card-body">
          <h5
            class="card-title text-center h3 fw-bold"
            style="color: bisque; font-family: copperplate"
          >
          ${project.title}
          </h5>
          <p class="card-text text-center h6 fw-light" style="color: #d4d4d4">
            <small>${project.duration}</small>
          </p>
          <p class="card-text text-justify" style="color: bisque">
          ${project.description}
          </p>
          <div class="w-100 d-flex justify-content-evenly">
            <a
              href="#"
              class="btn btn-primary mx-2 w-100 border-0"
              style="background-color: #8d6e63; color: bisque"
              id="btn-edit"
              >Edit</a
            >
            <a
              href="#"
              class="btn btn-warning w-100"
              style="color: #7b3535"
              id="btn-delete"
              >Delete</a
            >
          </div>
        </div>
      </div>
    `
    }

}