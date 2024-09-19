import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { searchFields, advancedSearchFields } from './fields';
export default function CourseSearch() {
    const [ advancedSearchFieldsVisible, setAdvancedSearchFieldsVisible ] = useState(false);


    return (

        <>
            <Box>
                {
                    searchFields.map(({ label, type }) => {
                        return(
                            <TextField
                                key={label}
                                label={label}
                                type={type}
                                select={type === 'select'}
                            />
                        )
                    })
                }
            </Box>
            <Button
                variant='outlined'
                onClick={() => setAdvancedSearchFieldsVisible(!advancedSearchFieldsVisible)}            
            >
                {
                    advancedSearchFieldsVisible ? 'Fewer Filters' : 'More Filters'
                }
            </Button>
            <Collapse in={advancedSearchFieldsVisible}>
                <Box>
                    {
                        advancedSearchFields.map(({ label, type }) => {
                            return(
                                <TextField
                                    key={label}
                                    label={label}
                                    type={type}
                                    select={type === 'select'}
                                />
                            )
                        })
                    }
                </Box>
            </Collapse>
            <Box>
                <Button variant='contained'>Search</Button>
                <Button variant='outlined'>Reset Filters</Button>
            </Box>
        </>
    )
}