import {ControllerNoteCategoryModel, ControllerNoteModel} from "../controller/controller.js";

//------------------------------------------Show Model on Page------------------------------------------
function ShowModelPage(arr, tbody) {
    let td;
    let len = arr[0].length;
    for(let item = 0; item < len; item++) {
        let tr = document.createElement('tr');
        for(let row = 0; row < arr.length; row++) {
            td = document.createElement('td');
            td.textContent = arr[row][item];
            td.setAttribute('data-index', row);
            td.setAttribute('data-id', item);
            tr.append(td);
            if(arr[row][item] == null && tbody.id == 'NoteCategoryId') 
                td.textContent = 0
        }

        if(tbody.id == 'NoteModelId') {
            let chTd = document.createElement('td');
            let ch = document.createElement('i');
            ch.id = 'change';
            ch.className = 'fa-sharp fa-solid fa-pen';
            ch.setAttribute('data-ClickId', item);
            chTd.append(ch);
            tr.append(chTd);

            let downTd = document.createElement('td');
            let down = document.createElement('i');
            down.id = 'down';
            down.className = 'fa-solid fa-circle-down';
            down.setAttribute('data-ClickId', item);
            downTd.append(down);
            tr.append(downTd);

            let delTd = document.createElement('td');
            let del = document.createElement('i');
            del.id = 'del';
            del.setAttribute('data-ClickId', item);
            del.className = 'fa-solid fa-trash';
            delTd.append(del);
            tr.append(delTd);
        }
        
        tbody.append(tr);
    }
}

function ShowCategoryModel() {
    let NoteCategoryId = document.querySelector('#NoteCategoryId');
    // console.log(ControllerNoteCategoryModel());
    ShowModelPage(ControllerNoteCategoryModel(), NoteCategoryId)
}

function ShowNoteModel() {
    let NoteModelId = document.querySelector('#NoteModelId');
    // console.log(ControllerNoteModel());
    ShowModelPage(ControllerNoteModel(), NoteModelId)
}


ShowCategoryModel()
ShowNoteModel()

//------------------------------------------Show Model on Page------------------------------------------



//------------------------------------------Create Note------------------------------------------



//------------------------------------------Create Note------------------------------------------