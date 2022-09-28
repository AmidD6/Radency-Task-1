import {IterationArray, InputForm, CreateButtonRow, UpdateTableCategory} from './functions.js'
import {NoteCategory, NoteModel} from '../model/model.js';


//------------------------------------------Show Model on Page------------------------------------------
function ControllerNoteCategoryModel() {
    let NewNoteCategoryArray = new Array(NoteCategoryArray.length);
    for(let item = 0; item < NoteCategoryArray.length; item++) {
        IterationArray(NewNoteCategoryArray, item, NoteCategoryArray[item]);
    }
    return NoteCategoryArray;
}

function ControllerNoteModel() {
    let NewNoteModelArray = new Array(NoteModelArray.length);
    for(let item = 0; item < NoteModelArray.length; item++) {
        IterationArray(NewNoteModelArray, item, NoteModelArray[item]);
    }
    return NoteModelArray;
}

//------------------------------------------Show Model on Page------------------------------------------


//------------------------------------------Create Note------------------------------------------


function CreateNoteController(i){
    let tr = document.createElement('tr');
    let trLen = document.querySelectorAll(`tr[data-columnchange="${i}"] > td`);
    let trLenBefore = - 1 + document.querySelectorAll(`tr[data-column]`).length - document.querySelectorAll(`tr[data-column-change]`).length;
    let text = document.querySelector(`[data-text="${i}"]`);

    NoteModelArray[0].push(NoteModelArray[0].length + 1);

    for(let item = 0; item < trLen.length - 3; item++) {
        if(item == 1) NoteModelArray[item + 1].push(trLen[item].textContent)
        else if(item == 2) NoteModelArray[item + 1].push(Number(trLen[item].firstElementChild.value) + 1);
        else if (item == 3) NoteModelArray[item + 1].push(text.value);
        else if(item == 4) {
            if(trLen[item].firstElementChild.value == '') {
                // arr__note.push( trLen[item].firstElementChild.value );
                NoteModelArray[item + 1].push(null)
            }
            else {
                // console.log(trLen[item].firstElementChild.value)
                let new_arr = new Array();
                new_arr.push( trLen[1].textContent );
                new_arr.push( trLen[item].firstElementChild.value );
                NoteModelArray[item + 1].push(new_arr);
            }
            
        }
        else NoteModelArray[item + 1].push(trLen[item].firstElementChild.value)
 
    }
    // console.log(NoteModelArray)

    for(let item = 1; item < NoteModelArray.length; item++) {
        let td = document.createElement('td');

        if(item == 3) {
            td.textContent = NoteCategory.name[NoteModelArray[item][NoteModelArray[item].length - 1] - 1];
            // console.log(NoteModelArray[item][NoteModelArray[item].length - 1])
        }
        else 
            td.textContent = NoteModelArray[item][NoteModelArray[item].length - 1];

        td.setAttribute('data-index', item);
        tr.append(td);
    }
    CreateButtonRow(i, tr, 'change', 'fa-sharp fa-solid fa-pen', 'data-column')
    CreateButtonRow(i, tr, 'down', 'fa-solid fa-circle-down', 'data-column')
    CreateButtonRow(i, tr, 'del', 'fa-solid fa-trash', 'data-column')
    
    tr.setAttribute('data-column', trLenBefore)

    // console.log(arr__note[2])
    UpdateTableCategory(NoteModelArray[3][NoteModelArray[3].length - 1], 2)

    document.querySelector(`tr[data-columnchange="${i}"]`).remove();
    NoteModelId.append(tr)


    // console.log(NoteModelArray);
}

//------------------------------------------Create Note------------------------------------------

//------------------------------------------Delete Note------------------------------------------

function  DeleteNote(column) {    
    document.querySelector(`tr[data-column="${column}"]`).remove();
    for(let item = 0; item < NoteModelArray.length; item++) {
        NoteModelArray[item].splice(column - 1, 1);
    }
    console.log(column, NoteModelArray);
}

//------------------------------------------Delete Note------------------------------------------

export {
        ControllerNoteCategoryModel, 
        ControllerNoteModel, 
        CreateNoteController,
        DeleteNote
    };