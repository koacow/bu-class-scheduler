import { searchCourses } from "."
import { APIResponse, CourseSearchOptions } from "./types"

const test1 = async () => {
    const options: CourseSearchOptions = {
        institution: 'BU001',
        term: 2248,
        subject: 'CASCS',
    }
    const data: APIResponse | undefined = await searchCourses(options);
    console.log(data);
}