import { Box, Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';

const initialState ={ 
    nombre: "",
    lanzamiento: "",
}
export const IntroduceDBPage = () => {

    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = ({ titulo, lanzamiento, imagen, genero, atec, slug}) => {
        console.log({titulo, lanzamiento, imagen, genero, atec})
    }
    const resetForm = ()=>(
        reset(initialState)
    ,[reset])

    useEffect(() => {
        console.log("efecto")
        reset(initialState)
      
      }, [reset])
    return (

        <Box       
            gap={4}
            p={4}
            width="60%" 
            display="flex"
            flexDirection="column"
            sx={{ border: '2px solid white' }} 
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >

            
                <TextField
                    id="titulo-basic" 
                    label="Nombre" 
                    {...register("titulo", {required:true, minLength:2})}
                    color="white"
                    variant="outlined" 
                />
                <TextField
                    id="lanzamiento-basic" 
                    label="Fecha de Lanzamiento" 
                    {...register("lanzamiento", {required:true})}
                    color="white"
                    variant="outlined" 
                    type='date'
                    InputLabelProps={{ shrink: true }}

                />
                <TextField
                    id="img-basic" 
                    label="Imagen" 
                    {...register("imagen")}
                    color="white"
                    variant="outlined" 
                    type='file'
                    InputLabelProps={{ shrink: true }}

                />
                <TextField
                    id="genero-textarea" 
                    label="Genero" 
                    {...register("genero", {required:true})}
                    color="white"
                    multiline
                    rows={4} 
                />
                
                <TextField
                    id="atec-textarea" 
                    label="Analisís Técnico" 
                    {...register("atec", {required:true})}
                    color="white"
                    multiline
                    rows={4} 
                />
                <TextField
                    id="slug-basic" 
                    label="Slug" 
                    {...register("slug", {required:true, minLength:2})}
                    color="white"
                    variant="outlined" 
                />
                <Button
                    variant='contained'
                    color='error'
                    type='submit'
                >
                    Introducir
                </Button>
                
            
        </Box >


    )
}
