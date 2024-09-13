import { APIResponse, Course, Instructor, CourseSearchDays } from "./types";

const BU_COURSE_SEARCH_ENDPOINT: string = import.meta.env.BU_COURSE_SEARCH_ENDPOINT;

export const searchCourses = async (
    insitution: string = 'BU001',
    term: number,
    date_from: string = '',
    date_thru: string = '',
    subject: string = '',
    subject_like: string = '',
    catalog_nbr: number | string = '',
    start_time_equals: string = '',
    start_time_ge: string = '',
    end_time_equals: string = '',
    end_time_le: string = '',
    days: CourseSearchDays = [],
    campus: string = '',
    location: string = '',
    x_acad_career: string = '',
    acad_group: string = '',
    rqmnt_designtn: string = '',
    instruction_mode: string = '',
    keyword: string = '',
    class_nbr: number | null,
    acad_org: string = '',
    enrl_stat: string = '',
    crse_attr: string = '',
    crse_attr_value: string = '',
    instructor_name: string = '',
    instr_first_name: string = '',
    session_code: number,
    units: number,
    trigger_search: string = '',
    page: number = 1
) => {
    try {
        const response: Response = await fetch(BU_COURSE_SEARCH_ENDPOINT, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                insitution,
                term,
                date_from,
                date_thru,
                subject,
                subject_like,
                catalog_nbr,
                start_time_equals,
                start_time_ge,
                end_time_equals,
                end_time_le,
                days,
                campus,
                location,
                x_acad_career,
                acad_group,
                rqmnt_designtn,
                instruction_mode,
                keyword,
                class_nbr,
                acad_org,
                enrl_stat,
                crse_attr,
                crse_attr_value,
                instructor_name,
                instr_first_name,
                session_code,
                units,
                trigger_search,
                page
            })
        });
        if (response.ok) {
            const data: APIResponse = await response.json();
            return data;
        }
    } catch (e) {
        console.error(e);
        return null;
    }
}

/**
 * institution: BU001
term: 2248
date_from: 
date_thru: 
subject: CASAN
subject_like: 
catalog_nbr: 
start_time_equals: 
start_time_ge: 09.00
end_time_equals: 
end_time_le: 17.00
days: M,R,T,W
campus: 
location: CHARLESRIV
x_acad_career: UGRD
acad_group: CAS
rqmnt_designtn: 
instruction_mode: P
keyword: h
class_nbr: 90
acad_org: CASAN
enrl_stat: 
crse_attr: HUB
crse_attr_value: CRT
instructor_name: c
instr_first_name: h
session_code: 1
units: 4
trigger_search: 
page: 1
 */