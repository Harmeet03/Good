document.getElementById('myForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    try {
        const response = await fetch('http://localhost:4040/form', {
            method: 'POST',
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formDataObject)
        });

        if (response.ok) {
            console.log("Form Submitted");
        } 
        else {
            console.log("Form failed");
        }
    } catch (error) {
        console.log(`Error while submitting form ${error}`);
        let nError = document.getElementById("nError");
        nError.style.display = "block";
    }
});