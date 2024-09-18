import { APIResponse, Course, Instructor, CourseSearchDays, CourseSearchOptions } from "./types";

const BU_COURSE_SEARCH_ENDPOINT: string = import.meta.env.VITE_BU_COURSE_SEARCH_ENDPOINT;

export const searchCourses = async (
    options: CourseSearchOptions
) => {
    try {
        const response: Response = await fetch(BU_COURSE_SEARCH_ENDPOINT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({options})
        });
        if (response.ok) {
            const data: APIResponse = await response.json();
            return data;
        }
    } catch (e) {
        console.error(e);
        return [];
    }
}