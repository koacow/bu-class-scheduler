export interface CourseFilter {
    term: string;
    subject?: string;
    catalogNumber?: string;
    keyword?: string;
    career?: string;
    session?: string;
    days?: string;
    startTime?: string;
    endTime?: string;
    location?: string;
    instructionMode?: string;
    academicOrganization?: string;
    instructorLastName?: string;
    instructorFirstName?: string;
    classNumber?: number | null;
    courseAttribute?: string;
    courseAttributeValue?: string;
    units?: number | null;
}