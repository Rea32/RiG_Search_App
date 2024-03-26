import { Box, FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"


export const FilterBar = () => {
  return (
    <div className="prueba">
    <FormControl sx={{ m: 1, minWidth: 120 }}>
         <InputLabel color="error" id="demo-simple-select-helper-label">Plataforma</InputLabel>
        <Select 
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        label="Plataforma"
        autoWidth
        sx={{ backgroundColor:"primary.text"}}
        >
            <MenuItem value="">
                <em>Plataforma</em>
            </MenuItem>
            <MenuItem disabled value="">
                <em>Ps3</em>
            </MenuItem>
        </Select>


    </FormControl>
</div>
  )
}
