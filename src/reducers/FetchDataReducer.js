
const INITIAL_STATE = { classes: [], students: [], exams: [], finishedStudents: [], rStudents: [], canceledClasses: [], inStudents: [], info: [] }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'classes':
            return { ...state, classes: action.payload }
        case 'students':
            return { ...state, students: action.payload }
        case 'exams':
            return { ...state, exams: action.payload }
        case 'finishedStudents':
            return { ...state, finishedStudents: action.payload }
        case 'rStudents':
            return { ...state, rStudents: action.payload }
        case 'canceledClasses':
            return { ...state, canceledClasses: action.payload }
        case 'inStudents':
            return { ...state, inStudents: action.payload }
        case 'info':
            return { ...state, ifno: action.payload }
        default:
            return state
    }
}