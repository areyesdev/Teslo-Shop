import { useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { Box, Button, Chip, Grid, Typography } from '@mui/material'

import { ShopLayout } from '../../components/layouts'
import { ProductSlidesShow, SizeSelector } from '../../components/products'
import { ItemCounter } from '../../components/ui'

import { dbProducts } from '../../database'
import { ICartProduct, IProduct, ISize } from '../../interfaces'

interface Props {
  product: IProduct
}

const ProductPage: NextPage<Props> = ({ product }) => {

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1,
  })
  const selectedSize = (size: ISize) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      size
    }));
  }
  return (
    <ShopLayout title={product.title} pageDescription={product.description} >
      <Grid container spacing={3} >
        <Grid item xs={12} sm={7}>
          {/* Slideshow */}
          <ProductSlidesShow
            images={product.images}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box display='flex' flexDirection='column'>
            {/* Titulos */}
            <Typography variant='h1' component='h1'>{product.title}</Typography>
            <Typography variant='subtitle1' component='h2'>{`$${product.price}`}</Typography>
            {/* cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              {/* ItemCounter */}
              <ItemCounter />
              <SizeSelector
                sizes={product.sizes}
                selectedSize={tempCartProduct.size}
                onSelectedSize={selectedSize}
              />
            </Box>
            {/* Agregar al carrito */}
            {
              (product.inStock > 0)
                ? (
                  <Button color='secondary' className='circular-btn'>
                    {
                      tempCartProduct.size
                        ? 'Agregar al carrito'
                        : 'Seleccione una talla'
                    }
                  </Button>
                ) : (
                  <Chip label='No hay disponibles' color='error' variant='outlined' />
                )
            }

            {/* Description */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout >

  )
}

//No usar esta forma
// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//   const { slug = '' } = params as { slug: string }
//   const product = await dbProducts.getProductBySlug(slug)
//   if (!product) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false
//       }
//     }
//   }
//   return {
//     props: {
//       product
//     }
//   }
// }


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const productSlugs = await dbProducts.getAllProductSlugs()

  return {
    paths: productSlugs.map(({ slug }) => ({
      params: {
        slug
      }
    })),
    fallback: "blocking"
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = '' } = params as { slug: string }
  const product = await dbProducts.getProductBySlug(slug)
  if (!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24
  }
}


export default ProductPage