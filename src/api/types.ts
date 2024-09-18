
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

type CourseSearchDay = 'M' | 'T' | 'W' | 'R' | 'F' | 'S' | 'U';

export type CourseSearchDays = CourseSearchDay[];

export interface CourseSearchOptions {
    institution?: string,
    term?: number,
    date_from?: string,
    date_thru?: string,
    subject?: string,
    subject_like?: string,
    catalog_nbr?: number | string,
    start_time_equals?: string,
    start_time_ge?: string,
    end_time_equals?: string,
    end_time_le?: string,
    days?: CourseSearchDays,
    campus?: string,
    location?: string,
    x_acad_career?: string,
    acad_group?: string,
    rqmnt_designtn?: string,
    instruction_mode?: string,
    keyword?: string,
    class_nbr?: number,
    acad_org?: string,
    enrl_stat?: string,
    crse_attr?: string,
    crse_attr_value?: string,
    instructor_name?: string,
    instr_first_name?: string,
    session_code?: number,
    units?: number,
    trigger_search?: string,
    page?: number 
}