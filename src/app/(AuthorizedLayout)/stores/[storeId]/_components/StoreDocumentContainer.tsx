import styles from '@/app/(AuthorizedLayout)/stores/[storeId]/_components/storeDetail.module.css'
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import { BasicButton } from '@/app/_components/BasicButton'
import { StoreDetailResponse } from '@/app/(AuthorizedLayout)/stores/[storeId]/_models/response'
import React from 'react'
import { isNotEmpty } from '@/app/(AuthorizedLayout)/_lib/string'
import { formatDate } from '@/app/(AuthorizedLayout)/_lib/date'

type Props = {
  storeDetail: StoreDetailResponse,
  handlerEdit: () => void,
}

const StoreDocumentContainer = ({ storeDetail, handlerEdit }: Props) => {
  return (
    <Container className={styles.subContainer}>
      <Box className={styles.row}>
        <Typography className={styles.title}>
          필수 서류
        </Typography>
        <Box className={styles.contents}>
          <Typography className={styles.documentTitle}>
            보건증
          </Typography>
          <Typography className={styles.documentLink}>
            {isNotEmpty(storeDetail.healthCertUrl) ? (
              <Link className={styles.contents} href={''}>
                <u>보기</u>
              </Link>
            ) : null}
          </Typography>
          <Typography className={styles.documentDescription}>
            {formatDate(storeDetail.healthCertRegisterDate)
              ? `보건증 등록일 : ${formatDate(storeDetail.healthCertRegisterDate)} ~ 만기일 : ${formatDate(storeDetail.healthCertExpirationDate)}`
              : null}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.row}>
        <Typography className={styles.title} />
        <Box className={styles.contents}>
          <Typography className={styles.documentTitle}>
            자동차 등록증
          </Typography>
          <Typography className={styles.documentLink}>
            {isNotEmpty(storeDetail.carRegistrationCertUrl) ? (
              <Link className={styles.contents} href={''}>
                <u>보기</u>
              </Link>
            ) : null}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.row}>
        <Typography className={styles.title} />
        <Box className={styles.contents}>
          <Typography className={styles.documentTitle}>
            영업신고증
          </Typography>
          <Typography className={styles.documentLink}>
            {isNotEmpty(storeDetail.businessReportCertUrl) ? (
              <Link className={styles.contents} href={''}>
                <u>보기</u>
              </Link>
            ) : null}
          </Typography>
        </Box>
        <BasicButton
          label={'등록 / 수정'}
          disabled={false}
          onClick={handlerEdit}
        />
      </Box>
    </Container>
  )
}

export default StoreDocumentContainer
