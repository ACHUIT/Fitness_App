import React,{useEffect,useState}from 'react';
import { Pagination, formControlClasses } from '@mui/material';
import {Box,Stack,Typography} from "@mui/material";
import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
const Exercises = ({exercises,setExercises,bodyPart}) => {
  const [currentPage,setCurrentPage]=useState(1);
  const exercisesPerPage=9;
  const indexOfLastPage=currentPage*exercisesPerPage;
  const indexOfFirstPage=indexOfLastPage-exercisesPerPage;
  const currentExercise=exercises.slice(indexOfFirstPage,indexOfLastPage);
  const paginate=(e, value)=>{
     setCurrentPage(value);
     window.scrollTo({top:1800 ,behavior:"smooth"})
  }
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      let exerciseData=[];
      if(bodyPart==='all'){
       exerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      }
      else{
        exerciseData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions);
      }
      setExercises(exerciseData);
    }
    fetchExercisesData();
    
  },[bodyPart]);
  return (
    <Box id= "exercises"
      sx={{mt:{lg:"110px"}}} mt="50px" p="20px">
      <Typography variant='h3' mb="45px">Showing Results</Typography>
      <Stack direction="row" sx={{gap:{lg:"110px",xs:"50px"}}}
        flexWrap="wrap" justifyContent="center">
           {currentExercise.map((exercise,index)=>(
            <ExerciseCard key={index} exercise={exercise}/>
           ))}
        </Stack>
        <Stack mt="100px" alignItems="center">
         <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length/exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'

         />
        </Stack>

    </Box>
  )
}

export default Exercises