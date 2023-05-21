async function postJSON() {
  
    const response = await fetch("http://localhost/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        "user_id":204,
        "name": "Arvid",
        "contactInfo":{"phone":5045054,"email":"Arvid@gmail.com"}
    
    }
      ),
    });

    const result = await response.json();
    
    let element = document.getElementById("element")
    element.innerHTML=result.name + " " + result.user_id + " " + result.contactInfo.phone
    console.log(result);

}

postJSON();