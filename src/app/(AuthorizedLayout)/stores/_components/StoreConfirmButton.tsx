import React from 'react'
import { Box, Button } from '@mui/material'
import styles from './storeComfirmButton.module.css'

type Props = {
  isValidated: boolean,
  handelCancel: () => void,
  handleConfirm: () => void,
  confirmLabel?: string
}

const StoreConfirmButton = ({ isValidated, handelCancel, confirmLabel, handleConfirm }: Props) => {
  return (
    <Box className={styles.buttonGroup}>
      <Button
        variant="contained"
        color="secondary"
        onClick={handelCancel}
        disabled={false}
        className={styles.cancelButton}
      >취소</Button>

      <Button
        variant="contained"
        color="primary"
        onClick={handleConfirm}
        disabled={!isValidated}
        className={styles.confirmButton}
      >{ confirmLabel ? confirmLabel : '등록' }</Button>
    </Box>
  )
}

export default StoreConfirmButton
