
export type APIResponse = Course[];

export interface Instructor {
    name: string;
    email: string;
}

export interface Course {
    index: number;
    crse_id: string;
    crse_offer_nbr: number;
    strm: string;
    session_code: string;
    session_descr: string;
    class_section: string;
    location: string;
    location_descr: string;
    start_dt: string;
    end_dt: string;
    class_stat: string;
    campus: string;
    campus_descr: string;
    class_nbr: number;
    acad_career: string;
    acad_career_descr: string;
    component: string;
    subject: string;
    subject_descr: string;
    catalog_nbr: string;
    class_type: string;
    schedule_print: string;
    acad_group: string;
    instruction_mode: string;
    instruction_mode_descr: string;
    acad_org: string;
    grading_basis: string;
    wait_tot: number;
    wait_cap: number;
    class_capacity: number;
    enrollment_total: number;
    enrollment_available: number;
    descr: string;
    rqmnt_designtn: string;
    units: string;
    combined_section: string;
    enrl_stat: string;
    enrl_stat_descr: string;
    topic: string;
    instructors: Instructor[];
    section_type: string;
    meetings: any[];
    crse_attr: string;
    crse_attr_value: string;
    reserve_caps: any[];
    notes: any[];
}

/**
 * {
        "index": 1,
        "crse_id": "125249",
        "crse_offer_nbr": 1,
        "strm": "2248",
        "session_code": "1",
        "session_descr": "Regular Academic Session",
        "class_section": "A3",
        "location": "CHARLESRIV",
        "location_descr": "Charles River",
        "start_dt": "09/03/2024",
        "end_dt": "12/10/2024",
        "class_stat": "A",
        "campus": "MAIN",
        "campus_descr": "Boston University",
        "class_nbr": 20231,
        "acad_career": "UGRD",
        "acad_career_descr": "Undergraduate",
        "component": "LEC",
        "subject": "ENGEK",
        "subject_descr": "ENGEK Engineering Core",
        "catalog_nbr": "100",
        "class_type": "E",
        "schedule_print": "Y",
        "acad_group": "ENG",
        "instruction_mode": "P",
        "instruction_mode_descr": "In-Person",
        "acad_org": "ENG",
        "grading_basis": "Grades",
        "wait_tot": 0,
        "wait_cap": 0,
        "class_capacity": 480,
        "enrollment_total": 421,
        "enrollment_available": 59,
        "descr": "Freshman Advising Seminar",
        "rqmnt_designtn": "",
        "units": "0",
        "combined_section": "N",
        "enrl_stat": "O",
        "enrl_stat_descr": "Open",
        "topic": "",
        "instructors": [
            {
                "name": "To Be Announced",
                "email": ""
            }
        ],
        "section_type": "Lecture",
        "meetings": [],
        "crse_attr": "",
        "crse_attr_value": "",
        "reserve_caps": [],
        "notes": []
    },
 */