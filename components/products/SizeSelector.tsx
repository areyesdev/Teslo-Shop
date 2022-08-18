import { FC } from "react"
import { Button, Box } from "@mui/material";
import { ISize } from "../../interfaces";

interface Props {
  selectedSize?: ISize;
  sizes: ISize[];
  onSelectedSize: (size: ISize) => void;
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes, onSelectedSize }) => {
  return (
    <Box>
      {
        sizes.map(size => (
          <Button key={size} size='small' color={selectedSize === size ? 'primary' : 'info'} onClick={() => onSelectedSize(size)}>
            {size}
          </Button>
        ))
      }
    </Box>
  )
}
