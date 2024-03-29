document.getElementById('myForm').addEventListener('submit', async function (event) {
    event.preventDefault();
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
            localStorage.setItem("Connect", "Connect");
        } 
        else {
            console.log("Form failed");
            localStorage.setItem("Fail", "Fail");
        }
    } catch (error) {
        console.log(`Error while submitting form ${error}`);
        let nError = document.getElementById("nError");
        nError.style.display = "block";
    }
});