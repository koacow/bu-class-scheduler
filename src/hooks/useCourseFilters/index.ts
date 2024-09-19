import { useCallback, useState } from 'react';
import { CourseFilter } from './types';


export default function useCourseFilters(){
    const [ filters, setFilters ] = useState<CourseFilter>({
        term: 'Fall 2024',
    });

    const updateFilter = useCallback
}