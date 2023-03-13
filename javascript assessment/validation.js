function validation() {
    var cname = document.candidate.candiname.value;
    var dob = document.candidate.dob.value;
    var gender = document.candidate.gen.value;
    var qualification = document.candidate.qualification.value;
    var mark = document.candidate.mark.value;
    var grade = document.candidate.grade.value;
    var tamil = document.candidate.tam.checked;
    var english = document.candidate.eng.checked;
    var hindi = document.candidate.hin.checked;
    var malayalam = document.candidate.mal.checked;
    var telgu = document.candidate.tel.checked;
    var add = document.candidate.address.value;
    var con = document.candidate.contactnum.value;
    var mail = document.candidate.mail.value;

    var namecheck = /^[A-Za-z' ']+$/;
    var mailcheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (cname == '') {
        alert('Please enter your Name');
    } else if (!namecheck.test(cname)) {
        alert('Name field required only alphabet characters & spaces');
    }
    else if (dob == '') {
        alert('Please enter your Date of birth');
    }
    else if (gender == '') {
        alert('Please enter your Gender');
    }
    else if (qualification == '') {
        alert('Please enter your Qualification');
    }
    else if (mark == '') {
        alert('Please enter your Mark');
    }
    else if (grade == '') {
        alert('Please enter your Grade');
    }
    else if (add == '') {
        alert('Please enter your Address');
    }
    else if (con == '') {
        alert('Please enter your Contact number');
    }
    else if (mail == '') {
        alert('Please enter your Address');
    }
      else if (!mailcheck.test(mail)) {
        alert('Enter valid E-Mail ID ');
      }
    else {
        alert('Thank you for registering!');
        display(cname, dob,gender,qualification,mark,grade,tamil,english,hindi,malayalam,telgu,add,con,mail);
    }
}
function display(cname, dob,gender,qualification,mark,grade,tamil,english,hindi,malayalam,telgu,add,con,mail) {
    document.write("<h2>Registration Details:</h2>");
    document.write("<p><strong>Name:</strong> " + cname + "</p>");
    document.write("<p><strong>Date of Birth:</strong> " + dob + "</p>");
    document.write("<p><strong>Gender:</strong> " + gender + "</p>");
    document.write("<p><strong>Qualification:</strong> " + qualification  + "</p>");
    document.write("<p><strong>Mark:</strong> " + mark + "</p>");
    document.write("<p><strong>Grade:</strong> " + grade + "</p>");
    document.write("<p><strong>Languages Known:</strong></p>");
    if (tamil) {
        document.write("<p>Tamil</p>");
    }
    if (english) {
        document.write("<p>English</p>");
    }
    if (hindi) {
        document.write("<p>Hindi</p>");
    }
    if (malayalam) {
        document.write("<p>Malayalam</p>");
    }
    if (telgu) {
        document.write("<p>Telgu</p>");
    }
    document.write("<p><strong>Address:</strong> " + add + "</p>");
    document.write("<p><strong>Contact Number:</strong> " + con + "</p>");
    document.write("<p><strong>E-Mail ID:</strong> " + mail + "</p>");
}