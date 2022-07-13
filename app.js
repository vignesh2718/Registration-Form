let enrolledNumbers = [];
let Users = [];

let formContainer = document.getElementById('form');

let resultContainer = document.getElementById('outputDisplay');
resultContainer.classList.add('d-none');

function Registration(){
    let enrollNumber = document.getElementById('enrollNum').value;
    let userName = document.getElementById('Username').value;

    if(enrolledNumbers.includes(enrollNumber)){
        let redAlert= document.getElementById('redAlert');
        redAlert.classList.remove('d-none');
        redAlert.innerHTML = "Enroll Number is not valid";
        setTimeout(()=>{
            redAlert.classList.add('d-none');   
        },3000)
        

    }
    else{
        let alert = document.getElementById('Alert');
        alert.classList.remove('d-none');
        alert.innerHTML = "Successfully Enrolled";

        setTimeout(()=>{
            alert.classList.add('d-none');
        }, 2000)
    }{
        enrolledNumbers.push(enrollNumber);
        Users.push(userName);
        
        let resultEnrollNum = document.createElement('h4');
        resultEnrollNum.classList.add('result-number');
        resultEnrollNum.innerHTML = "Enrollment Number: " + enrollNumber;

        let resultUserName = document.createElement('h4');
        resultUserName.classList.add('result-name');
        resultUserName.innerHTML = "Name: " + userName;

        resultContainer.classList.remove('d-none');
        resultContainer.classList.add('output-container')
        resultContainer.appendChild(resultEnrollNum);
        resultContainer.appendChild(resultUserName);
    }

}