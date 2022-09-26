import {NoteCategory, NoteModel} from '../model/model.js';


//------------------------------------------Show Model on Page------------------------------------------
function ControllerNoteCategoryModel() {
    let NoteCategoryArray = new Array(Object.keys(NoteCategory).length);
    for(let item = 0; item < Object.keys(NoteCategory).length; item++) {
        // console.log(item)
        if(item == 0) IterationArray(NoteCategoryArray, item, NoteCategory.name);
        if(item == 1) IterationArray(NoteCategoryArray, item, NoteCategory.active);
        if(item == 2) IterationArray(NoteCategoryArray, item, NoteCategory.archived);
    }
    return NoteCategoryArray;
}

function ControllerNoteModel() {
    let NoteModelArray = new Array(Object.keys(NoteModel).length);
    for(let item = 0; item < NoteModelArray.length; item++) {
        if(item == 0) IterationArray(NoteModelArray, item, NoteModel.name);
        if(item == 1) IterationArray(NoteModelArray, item, NoteModel.created);
        if(item == 2) IterationArray(NoteModelArray, item, NoteModel.category);
        if(item == 3) IterationArray(NoteModelArray, item, NoteModel.contend);
        if(item == 4) IterationArray(NoteModelArray, item, NoteModel.dates);
    }
    return NoteModelArray;
}

function IterationArray(arr, index, modelName) {
    arr[index] = new Array(modelName.length);
 
    for(let j = 0; j < modelName.length; j++) {
        if(modelName == NoteModel.category) {
            let new_arr = modelName.map(index => {
                if(index - 1 == NoteCategory.name.indexOf(NoteCategory.name[index - 1])) {
                    return NoteCategory.name[index - 1];
                }
            })
        
            arr[index][j] = new_arr[j]
        } 
        
        else if(modelName == NoteCategory.active) {
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
}
//------------------------------------------Show Model on Page------------------------------------------


//------------------------------------------Create Note------------------------------------------



//------------------------------------------Create Note------------------------------------------

export {ControllerNoteCategoryModel, ControllerNoteModel};