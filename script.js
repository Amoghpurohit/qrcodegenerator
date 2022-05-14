function action(){
    var gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    var image=document.getElementById("myimg");
    var mysize=document.getElementById("size").value;
    var text=document.getElementById("qrtext").value;
    if(text!="" && mysize=="100"){
        image.src=gapi+"100x100"+"&chl="+text;
    }
    else if(text!="" && mysize=="200"){
        image.src=gapi+"200x200"+"&chl="+text;
        
    }
    else if(text!="" && mysize=="250"){
        image.src=gapi+"250x250"+"&chl="+text;
        
    }
    else if(text!="" && mysize=="300"){
        image.src=gapi+"300x300"+"&chl="+text;
    }
    else{
        alert("Please Enter Some Text First");
    }      
                                            
}                                                          
