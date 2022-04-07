function hover(elem){
    var name, num, info;
    name = document.getElementById('ename');
    num = document.getElementById('enum');
    info = document.getElementById('einfo');
    var item = elem.id
    switch(item){
        case "H":            
            name.innerHTML = "Hydrogen";
            num.innerHTML = "1";
            info.innerHTML = "a light gas";
            break;
        case "He":
            name.innerHTML = "Helium";
            num.innerHTML = "2";
            info.innerHTML = "a light noble gas";
            break;
        case "Li":
            name.innerHTML = "Lithium";
            num.innerHTML = "3";
            info.innerHTML = "metal";
            break;
        case "Be":
            name.innerHTML = "Beryllium";
            num.innerHTML = "4";
            info.innerHTML = "a poisonous metal";
            break;
        case "B":
            name.innerHTML = "Boron";
            num.innerHTML = "5";
            info.innerHTML = "a non-metal";
            break; 
        case "C":
            name.innerHTML = "Carbon";
            num.innerHTML = "6";
            info.innerHTML = "a non metal";
            break;
        case "N":
            name.innerHTML = "Nitrogen";
            num.innerHTML = "7";
            info.innerHTML = "an inert gas";
            break; 
        case "O":
            name.innerHTML = "Oxygen";
            num.innerHTML = "8";
            info.innerHTML = "a reactive gas";
            break;
        case "F":
            name.innerHTML = "Fluorine";
            num.innerHTML = "9";
            info.innerHTML = "a reactive gas";
            break; 
        case "Ne":
            name.innerHTML = "Neon";
            num.innerHTML = "10";
            info.innerHTML = "an inert noble gas";
            break;    
    }
}