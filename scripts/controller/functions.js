import {NoteCategory, NoteModel} from '../model/model.js';

//------------------------------------------Show Model on Page------------------------------------------
function CreateButtonRow(item, tr, nameId, classname, atrdata){
    let chTd = document.createElement('td');
    let ch = document.createElement('i');
    ch.id = nameId;
    ch.className = classname;
    ch.setAttribute(atrdata, item);
    chTd.append(ch);
    tr.append(chTd);
}


function IterationArray(arr, index, modelName) {
    arr[index] = new Array(modelName.length);
 
    for(let j = 0; j < modelName.length; j++) {
        if(modelName == NoteModelArray[3]) {
            let new_arr = modelName.map(index => {
                if(index - 1 == NoteCategory.name.indexOf(NoteCategory.name[index - 1])) {
                    return NoteCategory.name[index - 1];
                }
            })
            arr[index][j] = new_arr[j]
        } 
        
        else if(modelName == NoteCategoryArray[2]) {
            let new__arr = NoteModel.category.map((name) => {
                return {count: 1, name: name}
              })
              .reduce((a, b) => {
                a[b.name] = (a[b.name] || 0) + b.count
                return a
              }, {})
              
            arr[index][j] = new__arr[j + 1];
        }
        
        else arr[index][j] = modelName[j];
    }

    // console.log(arr)
}

//------------------------------------------Show Model on Page------------------------------------------



//------------------------------------------Create Note------------------------------------------

function InputForm(tr, col){
    let inputName = document.createElement('input');
    let date = new Date();
    let inputDate = document.createElement('input');
    let inputCategory = document.createElement('select');
    let textareaContent = document.createElement('textarea');

    inputName.type = 'text';
    inputName.id = 'inputNameId'
    inputName.setAttribute('data-id', col)
    inputDate.type = 'date';
    inputDate.id = 'inputDateId';
    inputDate.setAttribute('data-id', col)
    textareaContent.setAttribute('rows', 4);
    textareaContent.setAttribute('cols', 20);
    textareaContent.setAttribute('data-text', col);
    textareaContent.setAttribute('data-id', col);
    textareaContent.id = 'textareaContentId';
    textareaContent.style.resize = 'none';

    for(let item = 0; item < NoteCategory.name.length; item++) {
        let option = document.createElement('option');
        option.value = item;
        option.textContent = NoteCategory.name[item];
        inputCategory.append(option);
    }
    
    let inputNameTd = document.createElement('td');
    inputNameTd.append(inputName);
    tr.append(inputNameTd);

    let dateNow = document.createElement('td');
    dateNow.innerHTML = '<p>' + ShowMonth(date.getMonth()) + ' ' + date.getDate() +', ' + date.getFullYear() + '</p>';
    tr.append(dateNow);

    let inputCategoryTd = document.createElement('td');
    inputCategoryTd.append(inputCategory);
    tr.append(inputCategoryTd);

    let textareaContentTd = document.createElement('td');
    textareaContentTd.append(textareaContent);
    tr.append(textareaContentTd);

    let inputDateTd = document.createElement('td');
    inputDateTd.append(inputDate);
    tr.append(inputDateTd);

    CreateButtonRow(col, tr, 'addRow', 'fa-solid fa-circle-check', 'data-columnchange')
    CreateButtonRow(col, tr, 'clearRow', 'fa-solid fa-arrows-rotate', 'data-columnchange')
    CreateButtonRow(col, tr, 'exitRow', 'fa-sharp fa-solid fa-circle-xmark', 'data-columnchange')

    // console.log(tr)
    return tr
}

function ShowMonth(month){
    switch(month) {
        case 0: 
            return 'January';
            break;
        case 1: 
            return 'February';
            break;
        case 2: 
            return 'March';
            break;
        case 3: 
            return 'April';
            break;
        case 4: 
            return 'May';
            break;
        case 5: 
            return 'June';
            break;
        case 6: 
            return 'July';
            break;
        case 7: 
            return 'August';
            break;
        case 8: 
            return 'September';
            break;
        case 9: 
            return 'October';
            break;
        case 10: 
            return 'November';
            break;
        case 11: 
            return 'December';
            break;
    }
}


// function RegularDate(date){

// }


function UpdateTableCategory(i, ind){
    let updateNum = 0
    let tdNote = document.querySelectorAll(`#NoteCategoryId > tr[data-column="${i}"] > td`);
    console.log(tdNote[ind])
    for(let item in tdNote) {
        if(item == ind) {
            // console.log(item)
            tdNote[item].textContent = ++updateNum + NoteCategory.active[i];
            NoteCategory.active[i] = updateNum + NoteCategory.active[i]
            break;
        }
        // console.log(td[item].firstElementChild)
    }
}

//--------------------------------------------------------------------------------------------

function GetCategoryName(categoryId){
    return NoteCategory.name[categoryId - 1];
}

function GetRegularDate(nameTd, id) {
    let chError = document.querySelector(`[data-error="${id}"]`);
    if(nameTd.value != '') {
        if(chError != null) chError.remove();
        let isAlphaNumeric = (str) => /[a-zA-z]/.test(str)
        return isAlphaNumeric(nameTd.value);
    } else {
        if (chError != null) {
            return false;
        } else {
            isError('empty', id);
            return false;
        }
    }
}


function isError(type, id) {
    let typeMess;
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    let len = document.querySelectorAll(`[data-columnchange="${id}"] > td`).length;
    let trAppend = document.querySelector(`tr[data-columnchange="${id}"]`);
    td.setAttribute('colspan', len)
    if(type == 'empty') typeMess = `Empty field`;
    else if(type == 'regular') typeMess = `Empty field`;
    td.innerHTML = `<i class="fa-solid fa-arrow-up"></i> <b class="error">!!! ${typeMess} !!!</b> <i class="fa-solid fa-arrow-up"></i>`;
    td.classList.add('is_error');
    tr.append(td);
    tr.setAttribute('data-error', id);
    // console.log(trAppend)
    trAppend.after(tr);
}

//------------------------------------------Create Note------------------------------------------

export {CreateButtonRow, IterationArray, InputForm, UpdateTableCategory, GetCategoryName, GetRegularDate};