import { Button, Card, CardContent, Divider, Grid, Typography, Box, Link } from "@mui/material"

import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"
import NextLink from "next/link"

const SummaryPage = () => {
  return (
    <ShopLayout title="Resumen de orden" pageDescription={'Resumen de la orden'}>
      <Typography variant='h1' component='h1'>Resumen de la orden</Typography>
      <Grid item xs={12} sm={7}>
        <CartList />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Card className="summary-card">
          <CardContent>
            <Typography variant="h2">Resumen (3 productos)</Typography>
            <Divider sx={{ my: 1 }} />
            <Box display='flex' justifyContent='end'>
              <NextLink href='/checkout/address' passHref>
                <Link underline="always">
                  Editar
                </Link>
              </NextLink>
            </Box>
            <Typography variant="subtitle1">Direccion de entrega</Typography>
            <Typography>Andres Reyes</Typography>
            <Typography>123 Barrio Santander</Typography>
            <Typography>Santander</Typography>
            <Typography>3124463212</Typography>
            <Divider sx={{ my: 1 }} />
            <Box display='flex' justifyContent='end'>
              <NextLink href='/cart' passHref>
                <Link underline="always">
                  Editar
                </Link>
              </NextLink>
            </Box>
            {/* Order SUmmary */}
            <OrderSummary />
            <Box sx={{ mt: 3 }}>
              <Button color="secondary" className="circular-btn" fullWidth>
                Confirmar Orden
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage