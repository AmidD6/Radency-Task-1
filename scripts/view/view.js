import { 
        CreateButtonRow,
        InputForm,
        GetCategoryName,
        GetRegularDate
    } from '../controller/functions.js'

import {
    ControllerNoteCategoryModel, 
    ControllerNoteModel,
    CreateNoteController,
    DeleteNote
    } from "../controller/controller.js";

//------------------------------------------Show Model on Page------------------------------------------
function ShowModelPage(arr, tbody, model__obj) {
    let td;
    let idRow;
    let len = arr[0].length;
    for(let item = 0; item < len; item++) {
        let tr = document.createElement('tr');
        idRow = model__obj[0]; // id
        for(let row = 0; row < arr.length; row++) {
            if(row == 0) continue;
            td = document.createElement('td');

            if(row == 3) td.textContent = GetCategoryName(arr[row][item])
            else td.textContent = arr[row][item];

            td.setAttribute('data-index', row);
            tr.setAttribute('data-column', idRow[item]);
            tr.append(td);
            if(arr[row][item] == null && tbody.id == 'NoteCategoryId') 
                td.textContent = 0
        }

        if(tbody.id == 'NoteModelId') {
            CreateButtonRow(idRow[item], tr, 'change', 'fa-sharp fa-solid fa-pen', 'data-column');
            CreateButtonRow(idRow[item], tr, 'down', 'fa-solid fa-circle-down', 'data-column');
            CreateButtonRow(idRow[item], tr, 'del', 'fa-solid fa-trash', 'data-column');
        }
        
        tbody.append(tr);
    }
}

function ShowCategoryModel() {
    let NoteCategoryId = document.querySelector('#NoteCategoryId');
    // console.log(ControllerNoteCategoryModel());
    ShowModelPage(ControllerNoteCategoryModel(), NoteCategoryId, NoteCategoryArray)
}

function ShowNoteModel() {
    let NoteModelId = document.querySelector('#NoteModelId');
    // console.log(ControllerNoteModel());
    ShowModelPage(ControllerNoteModel(), NoteModelId, NoteModelArray)
}


ShowCategoryModel()
ShowNoteModel()

//------------------------------------------Show Model on Page------------------------------------------



//------------------------------------------Create Note------------------------------------------

function CreateNoteView(){
    // window.amountCreateNoteView = 0;
    let col = document.querySelectorAll('#NoteModelId > tr').length + 1;
    let NoteModelId = document.querySelector('#NoteModelId');
    let tr = document.createElement('tr');
    tr.setAttribute('data-columnchange', col);
    NoteModelId.append(InputForm(tr, col));
}

function ClearRow(i){
    document.querySelector(`tr[data-columnchange="${i}"] > td > #inputNameId`).value =
    document.querySelector(`tr[data-columnchange="${i}"] > td > #textareaContentId`).value = 
    document.querySelector(`tr[data-columnchange="${i}"] > td > #inputDateId`).value = '';
}




document.addEventListener('click', (e) => {
    if(e.target.id == 'buttonId') {
        CreateNoteView()
    } else if(e.target.id == 'del') {
        DeleteNote(e.target.dataset.column);
    } else if(e.target.id == 'clearRow') {
        // console.log(e.target.dataset.column)
        ClearRow(e.target.dataset.columnchange)
    } else if(e.target.id == 'exitRow') {
        // console.log(e.target.dataset.columnchange)
        let chError = document.querySelector(`[data-error="${e.target.dataset.columnchange}"]`);
        if(chError != null) chError.remove();
        document.querySelector(`tr[data-columnchange="${e.target.dataset.columnchange}"]`).remove();
    } else if(e.target.id == 'addRow') {
        let nameTd = document.querySelector(`#inputNameId[data-id="${e.target.dataset.columnchange}"]`);
        console.log(GetRegularDate(nameTd, e.target.dataset.columnchange));
        // CreateNoteController(e.target.dataset.columnchange);
    }
})

// let clearRoww = document.querySelector('#clearRow');
// clearRoww.addEventListener('click', ClearRow);

//------------------------------------------Create Note------------------------------------------