import { FormControl, Grid, MenuItem, Select, TextField, Typography, Box, Button } from "@mui/material"
import { ShopLayout } from "../../components/layouts"


const AddressPage = () => {
  return (
    <ShopLayout title={"Dirección"} pageDescription={"Confirmar dirección de destino"}>
      <Typography variant="h1" component='h1'>Dirección</Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} >
          <TextField label='Nombre' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField label='Apellido' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField label='Dirección' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField label='Dirección 2 (opcional)' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField label='Código Postal' variant='filled' fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} >
          <FormControl fullWidth>
            <Select variant="filled" label='Pais' value={1}>
              <MenuItem value={1}>Colombia</MenuItem>
              <MenuItem value={2}>Salvador</MenuItem>
              <MenuItem value={3}>México</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} >
          <TextField label='Teléfono' variant='filled' fullWidth />
        </Grid>
      </Grid>
      <Box sx={{ mt: 5 }} display='flex' justifyContent='center'>
        <Button type="submit" color="secondary" className="circular-btn" size="large">
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AddressPage