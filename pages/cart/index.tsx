import { Button, Card, CardContent, Divider, Grid, Typography, Box } from "@mui/material"

import { ShopLayout } from "../../components/layouts"
import { CartList } from "../../components/cart"

const CartPage = () => {
  return (
    <ShopLayout title="Carrito - 3" pageDescription={'Carrito de compras de la tienda'}>
      <Typography variant='h1' component='h1'>Carrito</Typography>
      <Grid item xs={12} sm={7}>
        <CartList />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Card className="summary-card">
          <CardContent>
            <Typography variant="h2">Orden</Typography>
            <Divider sx={{ my: 1 }} />
            {/* Order SUmmary */}
            <Box sx={{ mt: 3 }}>
              <Button color="secondary" className="circular-btn" fullWidth>
                Checkout
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </ShopLayout>
  )
}

export default CartPage