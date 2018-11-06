window.onload = function(){
    var bd = document.getElementById("thisbody");
    var chm = document.getElementById('changemode');
    let mode = localStorage.getItem('mode');
    let iconmode = localStorage.getItem('iconmode');
    if(mode==null)
    {
        localStorage.setItem('mode','lightmode');
        localStorage.setItem('iconmode','fa-moon');
        mode = localStorage.getItem('mode');
        iconmode = localStorage.getItem('iconmode');
    }
        bd.className = mode;
        chm.classList.add(iconmode);
}


    function mininavbar() {
        var x = document.getElementById("topnav");
        if (x.className === "navs") {
            x.className += " responsive";
        } else {
            x.className = "navs";
        }
    }

    function icon_index() {
        window.location.href = '/';
    }

    function chengemode() {
        var bd = document.getElementById("thisbody");
        var chm = document.getElementById('changemode');

        if(bd.className === "lightmode"){      
            modes('darkmode','fa-sun',bd,chm);
        }
        else{
            modes('lightmode','fa-moon',bd,chm);
        }

    }
    
    function modes(ch_mode,ch_iconmode,bd,chm){
        let mode = localStorage.getItem('mode');
        let iconmode = localStorage.getItem('iconmode');
        chm.classList.remove(iconmode);
        localStorage.removeItem('mode');
        localStorage.removeItem('iconmode');
        localStorage.setItem('mode',ch_mode);
        localStorage.setItem('iconmode',ch_iconmode);
        mode = localStorage.getItem('mode');
        iconmode = localStorage.getItem('iconmode');
        bd.className = mode;
        chm.classList.add(iconmode);
    }



