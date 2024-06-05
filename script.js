function checkIt() { 
    if (document.forms.mailer.Name.value !== "") { 
    } else {
        alert("Ви не вказали своє ім'я");
        document.forms.mailer.Name.focus(); 
        return false;
    }
    if (document.forms.mailer.Subject.value !== "") { 
    } else {
        alert("Ви не вказали тему повідомлення");
        document.forms.mailer.Subject.focus(); 
        return false;
    }
    if (document.forms.mailer.Message.value !== "") { 
        msg();
        return true; 
    } else {
        alert("Ви не написали повідомлення");
        document.forms.mailer.Message.focus(); 
        return false;
    }
}

function msg() { 
    document.mailer.action = "mailto:danilo.geval@gmail.com?Subject=" + encodeURIComponent(document.mailer.Subject.value) + "&Body=" + encodeURIComponent(document.mailer.Message.value);
}