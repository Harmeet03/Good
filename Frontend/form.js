document.getElementById('myForm').addEventListener('submit', async function (event) {
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });
    try {
        const response = await fetch('https://good-wt15.onrender.com/form', {
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
            event.preventDefault();
        }
    } catch (error) {
        event.preventDefault();
        console.log(`Error while submitting form ${error}`);
        let nError = document.getElementById("nError");
        nError.style.display = "block";
    }
});