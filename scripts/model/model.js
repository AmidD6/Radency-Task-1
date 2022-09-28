let NoteCategory = {
    id: [1, 2],
    name: ['Task', 'Rabdom Thought'],
    active: [2, 1],
    archived: [0, 0]
}

let NoteModel = {
    id: [1, 2, 3],
    name: ['Shoping list', 'New Feature', 'Books'],
    created: ['September 26, 2022', 'September 12, 2022', 'September 20, 2022'],
    category: [1, 2, 1],
    contend: ['Tomatoes, bread', 'Implement new value','The Lean Startup'],
    dates: [null, null, null]
}

window.NoteModelArray = Object.values(NoteModel);
window.NoteCategoryArray = Object.values(NoteCategory);

export { NoteCategory, NoteModel };