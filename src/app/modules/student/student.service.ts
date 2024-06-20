import { StudentModel } from "./student.model";



const getAllstudentsFromDb = async()=>{
    const result = await StudentModel.find()
    return result
}

export const Studentservices = {
  
    getAllstudentsFromDb,
}