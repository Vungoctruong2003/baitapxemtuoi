function tuoiMale() {
    let yearmale = +document.getElementById("yearMale").value;
    let du = yearmale % 60;
    console.log("so du :" + du);
    let tuoiNam = ""
    switch (du) {
        case 4:
        case 16:
        case 28:
        case 40:
        case 52:
            tuoiNam = "Tý";
            break;
        case 5:
        case 17:
        case 29:
        case 41:
        case 53:
            tuoiNam = "Sửu";
            break;
        case 6:
        case 18:
        case 30:
        case 42:
        case 54:
            tuoiNam = "Dần";
            break;
        case 7:
        case 19:
        case 31:
        case 43:
        case 55:
            tuoiNam = "Mão";
            break;
        case 8:
        case 20:
        case 32:
        case 44:
        case 56:
            tuoiNam = "Thìn";
            break;
        case 9:
        case 21:
        case 33:
        case 45:
        case 57:
            tuoiNam = "Tị";

            break;
        case 10:
        case 22:
        case 34:
        case 46:
        case 58:
            tuoiNam = "Ngọ";
            break;
        case 11:
        case 23:
        case 35:
        case 47:
        case 59:
            tuoiNam = "Mùi";
            break;
        case 12:
        case 24:
        case 36:
        case 48:
        case 0:
            tuoiNam = "Thân";
            break;
        case 13:
        case 25:
        case 37:
        case 49:
        case 1:
            tuoiNam = "Dậu";
            break;
        case 14:
        case 26:
        case 38:
        case 50:
        case 2:
            tuoiNam = "Tuất";
            break;
        default:
            tuoiNam = "Hợi";
    }
    return tuoiNam;
}

function tuoiFemale() {
    let yearFemale = +document.getElementById("yearFemale").value;
    let du = yearFemale % 60;
    let tuoiNu = ""
    switch (du) {
        case 4:
        case 16:
        case 28:
        case 40:
        case 52:
            tuoiNu = "Tý";
            break;
        case 5:
        case 17:
        case 29:
        case 41:
        case 53:
            tuoiNu = "Sửu";
            break;
        case 6:
        case 18:
        case 30:
        case 42:
        case 54:
            tuoiNu = "Dần";
            break;
        case 7:
        case 19:
        case 31:
        case 43:
        case 55:
            tuoiNu = "Mão";
            break;
        case 8:
        case 20:
        case 32:
        case 44:
        case 56:
            tuoiNu = "Thìn";
            break;
        case 9:
        case 21:
        case 33:
        case 45:
        case 57:
            tuoiNu = "Tị";
            break;
        case 10:
        case 22:
        case 34:
        case 46:
        case 58:
            tuoiNu = "Ngọ";
            break;
        case 11:
        case 23:
        case 35:
        case 47:
        case 59:
            tuoiNu = "Mùi";
            break;
        case 12:
        case 24:
        case 36:
        case 48:
        case 0:
            tuoiNu = "Thân";
            break;
        case 13:
        case 25:
        case 37:
        case 49:
        case 1:
            tuoiNu = "Dậu";
            break;
        case 14:
        case 26:
        case 38:
        case 50:
        case 2:
            tuoiNu = "Tuất";
            break;
        default:
            tuoiNu = "Hợi";
    }
    return tuoiNu;
}

function xemKq() {
    let tuoiNam = tuoiMale();
    let tuoiNu = tuoiFemale();
    let sosanh = "";
    switch (tuoiNam) {
        case "Tý": {
            switch (tuoiNu) {
                case "Thìn":
                case "Thân":
                    sosanh = 'hop';
                    break;
                case "Ngọ":
                case "Mão":
                case "Dậu":
                    sosanh = "khac"
                    break;
                default:
                    sosanh = "normal"
                    break;
            }
        }
        case 'Sửu': {
            switch (tuoiNu) {
                case 'Dậu':
                case 'Tị':
                    sosanh = 'hop'
                    break
                case 'Mùi':
                case 'Thìn':
                case 'Tuất':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'nope'
            }
            break
        }
        case 'Dần': {
            switch (tuoiNu) {
                case 'Tuất':
                case 'Ngọ':
                    sosanh = 'hop'
                    break
                case 'Thân':
                case 'Tị':
                case 'Hợi':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'normal'
            }
            break
        }
        case 'Mão': {
            switch (tuoiNu) {
                case 'Mùi':
                case 'Hợi':
                    sosanh = 'hop'
                    break
                case 'Tị':
                case 'Ngọ':
                case 'Dậu':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'nope'
            }
            break
        }
        case 'Thìn': {
            switch (tuoiNu) {
                case 'Tý':
                case 'Thân':
                    sosanh = 'hop'
                    break
                case 'Tuất':
                case 'Sửu':
                case 'Mùi':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'nope'
            }
            break
        }
        case 'Tị': {
            switch (tuoiNu) {
                case 'Sửu':
                case 'Dậu':
                    sosanh = 'hop'
                    break
                case 'Hợi':
                case 'Thân':
                case 'Dần':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'normal'
            }
            break
        }
        case 'Ngọ': {
            switch (tuoiNu) {
                case 'Dần':
                case 'Tuất':
                    sosanh = 'hop'
                    break
                case 'Tý':
                case 'Dậu':
                case 'Mão':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'normal'
            }
            break
        }
        case 'Mùi': {
            switch (tuoiNu) {
                case 'Hợi':
                case 'Mão':
                    sosanh = 'hop'
                    break
                case 'Tuất':
                case 'Sửu':
                case 'Thìn':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'normal'
            }
            break
        }
        case 'Thân': {
            switch (tuoiNu) {
                case 'Thìn':
                case 'Tý':
                    sosanh = 'hop'
                    break
                case 'Dần':
                case 'Hợi':
                case 'Tị':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'normal'
            }
            break
        }
        case 'Dậu': {
            switch (tuoiNu) {
                case 'Sửu':
                case 'Tị':
                    sosanh = 'hop'
                    break
                case 'Tý':
                case 'Mão':
                case 'Ngọ':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'normal'
            }
            break
        }
        case 'Tuất': {
            switch (tuoiNu) {
                case 'Ngọ':
                case 'Dần':
                    sosanh = 'hop'
                    break
                case 'Mùi':
                case 'Sửu':
                case 'Thìn':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'normal'
            }
            break
        }
        case 'Hợi': {
            switch (tuoiNu) {
                case 'Mùi':
                case 'Mão':
                    sosanh = 'hop'
                    break
                case 'Tý':
                case 'Dần':
                case 'Thân':
                    sosanh = 'khac'
                    break
                default :
                    sosanh = 'normal'
            }
            break
        }
    }
       switch (sosanh){
           case "hop":
               document.getElementById("notice").innerHTML = "hai ban rat hop nhau!!!...<3"
               break;
           case "khac":
               document.getElementById("notice").innerHTML = "hai ban khong hop nhau cho lam...:(("
               break;
           default:
              document.getElementById("notice").innerHTML = "hai ban kha  hop nhau day ...:))"
       }
}











