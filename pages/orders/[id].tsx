import { Button, Card, CardContent, Divider, Grid, Typography, Box, Link, Chip } from "@mui/material"

import { ShopLayout } from "../../components/layouts"
import { CartList, OrderSummary } from "../../components/cart"
import NextLink from "next/link"
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material"

const SummaryPage = () => {
  return (
    <ShopLayout title="Resumen de la orden 13343524" pageDescription={'Resumen de la orden'}>
      <Typography variant='h1' component='h1'>Orden: ABD24234</Typography>
      {/* <Chip
        sx={{ my: 2 }}
        label='Pendiente de pago'
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ my: 2 }}
        label='Orden ya fue pagada'
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container >
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
                <h1>Pagar</h1>
                <Chip
                  sx={{ my: 2 }}
                  label='Orden ya fue pagada'
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage